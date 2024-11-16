<!-- Start SDK Example Usage [usage] -->
```typescript
import { SpeakeasyAuth0Example } from "todo";

const speakeasyAuth0Example = new SpeakeasyAuth0Example({
  oAuth2ClientCredentialScheme:
    process.env["SPEAKEASY_O_AUTH2_CLIENT_CREDENTIAL_SCHEME"] ?? "",
});

async function run() {
  const result = await speakeasyAuth0Example.getTodo();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->