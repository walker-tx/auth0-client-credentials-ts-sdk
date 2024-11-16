/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type Security = {
  oAuth2ClientCredentialScheme?: string | undefined;
};

/** @internal */
export const Security$inboundSchema: z.ZodType<
  Security,
  z.ZodTypeDef,
  unknown
> = z.object({
  OAuth2ClientCredentialScheme: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "OAuth2ClientCredentialScheme": "oAuth2ClientCredentialScheme",
  });
});

/** @internal */
export type Security$Outbound = {
  OAuth2ClientCredentialScheme?: string | undefined;
};

/** @internal */
export const Security$outboundSchema: z.ZodType<
  Security$Outbound,
  z.ZodTypeDef,
  Security
> = z.object({
  oAuth2ClientCredentialScheme: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    oAuth2ClientCredentialScheme: "OAuth2ClientCredentialScheme",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Security$ {
  /** @deprecated use `Security$inboundSchema` instead. */
  export const inboundSchema = Security$inboundSchema;
  /** @deprecated use `Security$outboundSchema` instead. */
  export const outboundSchema = Security$outboundSchema;
  /** @deprecated use `Security$Outbound` instead. */
  export type Outbound = Security$Outbound;
}
