<!-- Start SDK Example Usage [usage] -->
```typescript
import { SpeakeasyAuth0Example } from "auto0_client_cred_example_oas";

const speakeasyAuth0Example = new SpeakeasyAuth0Example({
  security: {
    clientID: process.env["SPEAKEASY_CLIENT_ID"] ?? "",
    clientSecret: process.env["SPEAKEASY_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await speakeasyAuth0Example.todos.list();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->