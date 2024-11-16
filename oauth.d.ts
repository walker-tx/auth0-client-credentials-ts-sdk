export declare function withAuthorization(clientID: string, clientSecret: string, options?: Partial<{
    tokenStore: TokenStore;
}>): () => Promise<string>;
/**
 * A TokenStore is used to save and retrieve OAuth tokens for use across SDK
 * method calls. This interface can be implemented to store tokens in memory,
 * a shared cache like Redis or a database table.
 */
export interface TokenStore {
    get(): Promise<{
        token: string;
        expires: number;
    } | undefined>;
    set(token: string, expires: number): Promise<void>;
}
/**
 * InMemoryTokenStore holds OAuth access tokens in memory for use by SDKs and
 * methods that require OAuth security.
 */
export declare class InMemoryTokenStore implements TokenStore {
    private token;
    private expires;
    constructor();
    get(): Promise<{
        token: string;
        expires: number;
    }>;
    set(token: string, expires: number): Promise<void>;
}
//# sourceMappingURL=oauth.d.ts.map