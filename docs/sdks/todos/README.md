# Todos
(*todos*)

## Overview

### Available Operations

* [list](#list) - List all todos

## list

List all todos

### Example Usage

```typescript
import { SpeakeasyAuth0Example } from "todo";

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

### Standalone function

The standalone function version of this method:

```typescript
import { SpeakeasyAuth0ExampleCore } from "todo/core.js";
import { todosList } from "todo/funcs/todosList.js";

// Use `SpeakeasyAuth0ExampleCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const speakeasyAuth0Example = new SpeakeasyAuth0ExampleCore({
  security: {
    clientID: process.env["SPEAKEASY_CLIENT_ID"] ?? "",
    clientSecret: process.env["SPEAKEASY_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await todosList(speakeasyAuth0Example);

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

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 401              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |