# SpeakeasyAuth0Example SDK

## Overview

### Available Operations

* [getTodo](#gettodo) - List all todos

## getTodo

List all todos

### Example Usage

```typescript
import { SpeakeasyAuth0Example } from "todo";

const speakeasyAuth0Example = new SpeakeasyAuth0Example({
  oAuth2ClientCredentialScheme: process.env["SPEAKEASY_O_AUTH2_CLIENT_CREDENTIAL_SCHEME"] ?? "",
});

async function run() {
  const result = await speakeasyAuth0Example.getTodo();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAuth0ExampleCore } from "todo/core.js";
import { getTodo } from "todo/funcs/getTodo.js";

// Use `SpeakeasyAuth0ExampleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAuth0Example = new SpeakeasyAuth0ExampleCore({
  oAuth2ClientCredentialScheme: process.env["SPEAKEASY_O_AUTH2_CLIENT_CREDENTIAL_SCHEME"] ?? "",
});

async function run() {
  const res = await getTodo(speakeasyAuth0Example);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Todo[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |