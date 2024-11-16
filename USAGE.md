<!-- Start SDK Example Usage [usage] -->
```typescript
import { SpeakeasyAuth0Example } from "todo";

const speakeasyAuth0Example = new SpeakeasyAuth0Example({
  security: {
    clientId: process.env["my-client-id"] ?? "",
    clientSecret: process.env["my-client-secret"] ?? "",
  },
});

async function run() {
  const result = await speakeasyAuth0Example.getTodo();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->