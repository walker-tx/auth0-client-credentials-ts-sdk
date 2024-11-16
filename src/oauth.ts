import { z } from "zod";
import { SDK_METADATA } from "./lib/config";

const tokenResponseSchema = z.object({
  access_token: z.string(),
  token_type: z.literal("Bearer"),
  expires_in: z.number().positive(),
});

const expirationTolerance = 5 * 60 * 1000;

export function withAuthorization(
  clientID: string,
  clientSecret: string,
  options: Partial<{ tokenStore: TokenStore }> = {}
) {
  const { tokenStore = new InMemoryTokenStore() } = options;

  return async (): Promise<string> => {
    try {
      const response = await fetch(
        "https://dev-ttwo7r05pkr6nozn.us.auth0.com/oauth/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": SDK_METADATA.userAgent,
          },
          body: JSON.stringify({
            client_id: clientID,
            client_secret: clientSecret,
            grant_type: "client_credentials",
            audience: "http://localhost:3000",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Unexpected status code: " + response.status);
      }

      const json = await response.json();
      const data = tokenResponseSchema.parse(json);

      await tokenStore.set(
        data.access_token,
        Date.now() + data.expires_in * 1000 - expirationTolerance
      );

      return data.access_token;
    } catch (error) {
      throw new Error("Failed to get token: " + error);
    }
  };
}

/**
 * A TokenStore is used to save and retrieve OAuth tokens for use across SDK
 * method calls. This interface can be implemented to store tokens in memory,
 * a shared cache like Redis or a database table.
 */
export interface TokenStore {
  get(): Promise<{ token: string; expires: number } | undefined>;
  set(token: string, expires: number): Promise<void>;
}

/**
 * InMemoryTokenStore holds OAuth access tokens in memory for use by SDKs and
 * methods that require OAuth security.
 */
export class InMemoryTokenStore implements TokenStore {
  private token = "";
  private expires = Date.now();

  constructor() {}

  async get() {
    return { token: this.token, expires: this.expires };
  }

  async set(token: string, expires: number) {
    this.token = token;
    this.expires = expires;
  }
}
