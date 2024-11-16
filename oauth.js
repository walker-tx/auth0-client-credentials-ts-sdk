"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryTokenStore = void 0;
exports.withAuthorization = withAuthorization;
const zod_1 = require("zod");
const config_1 = require("./lib/config");
const tokenResponseSchema = zod_1.z.object({
    access_token: zod_1.z.string(),
    token_type: zod_1.z.literal("Bearer"),
    expires_in: zod_1.z.number().positive(),
});
const expirationTolerance = 5 * 60 * 1000;
function withAuthorization(clientID, clientSecret, options = {}) {
    const { tokenStore = new InMemoryTokenStore() } = options;
    return async () => {
        try {
            const response = await fetch("https://dev-ttwo7r05pkr6nozn.us.auth0.com/oauth/token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "User-Agent": config_1.SDK_METADATA.userAgent,
                },
                body: JSON.stringify({
                    client_id: clientID,
                    client_secret: clientSecret,
                    grant_type: "client_credentials",
                    audience: "http://localhost:3000",
                }),
            });
            if (!response.ok) {
                throw new Error("Unexpected status code: " + response.status);
            }
            const json = await response.json();
            const data = tokenResponseSchema.parse(json);
            await tokenStore.set(data.access_token, Date.now() + data.expires_in * 1000 - expirationTolerance);
            return data.access_token;
        }
        catch (error) {
            throw new Error("Failed to get token: " + error);
        }
    };
}
/**
 * InMemoryTokenStore holds OAuth access tokens in memory for use by SDKs and
 * methods that require OAuth security.
 */
class InMemoryTokenStore {
    constructor() {
        this.token = "";
        this.expires = Date.now();
    }
    async get() {
        return { token: this.token, expires: this.expires };
    }
    async set(token, expires) {
        this.token = token;
        this.expires = expires;
    }
}
exports.InMemoryTokenStore = InMemoryTokenStore;
//# sourceMappingURL=oauth.js.map