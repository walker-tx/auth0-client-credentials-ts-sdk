#!/bin/bash

# Install the speakeasy CLI
curl -fsSL https://raw.githubusercontent.com/speakeasy-api/speakeasy/main/install.sh | sh

# Setup samples directory
rmdir samples || true
mkdir samples

npm install
npm install -g ts-node
npm link
npm link auto0_client_cred_example_oas
TS_CONFIG_CONTENT=$(cat <<EOL
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "openapi": ["../src/index"],
      "openapi/*": ["../src/*"]
    }
  },
  "include": ["./**/*.ts"]
}
EOL
)
echo "$TS_CONFIG_CONTENT" > samples/tsconfig.json

# Generate starter usage sample with speakeasy
speakeasy generate usage -s openapi.yaml -l typescript -o samples/root.ts