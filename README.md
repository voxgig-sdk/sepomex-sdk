# Sepomex SDK

Sepomex client, generated from the OpenAPI spec.

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## Try it

**TypeScript**
```bash
npm install sepomex
```

**Python**
```bash
pip install sepomex-sdk
```

**PHP**
```bash
composer require voxgig/sepomex-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/sepomex-sdk/go
```

**Ruby**
```bash
gem install sepomex-sdk
```

**Lua**
```bash
luarocks install sepomex-sdk
```

## Quickstart

### TypeScript

```ts
import { SepomexSDK } from 'sepomex'

const client = new SepomexSDK({
  apikey: process.env.SEPOMEX_APIKEY,
})

// List all citys
const citys = await client.City().list()
console.log(citys.data)
```

See the [TypeScript README](ts/README.md) for the full guide.

## Surfaces

| Surface | Path |
| --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | `go-cli/` |
| **MCP server** | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o sepomex-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "sepomex": {
      "command": "/abs/path/to/sepomex-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **City** |  | `/cities` |
| **Municipality** |  | `/municipalities` |
| **State** |  | `/states` |
| **ZipCode** |  | `/zip_codes` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
import os
from sepomex_sdk import SepomexSDK

client = SepomexSDK({
    "apikey": os.environ.get("SEPOMEX_APIKEY"),
})

# List all citys
citys, err = client.City().list()
print(citys)

# Load a specific city
city, err = client.City().load({"id": "example_id"})
print(city)
```

### PHP

```php
<?php
require_once 'sepomex_sdk.php';

$client = new SepomexSDK([
    "apikey" => getenv("SEPOMEX_APIKEY"),
]);

// List all citys
[$citys, $err] = $client->City()->list();
print_r($citys);

// Load a specific city
[$city, $err] = $client->City()->load(["id" => "example_id"]);
print_r($city);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/sepomex-sdk/go"

client := sdk.NewSepomexSDK(map[string]any{
    "apikey": os.Getenv("SEPOMEX_APIKEY"),
})

// List all citys
citys, err := client.City(nil).List(nil, nil)
fmt.Println(citys)
```

### Ruby

```ruby
require_relative "Sepomex_sdk"

client = SepomexSDK.new({
  "apikey" => ENV["SEPOMEX_APIKEY"],
})

# List all citys
citys, err = client.City().list
puts citys

# Load a specific city
city, err = client.City().load({ "id" => "example_id" })
puts city
```

### Lua

```lua
local sdk = require("sepomex_sdk")

local client = sdk.new({
  apikey = os.getenv("SEPOMEX_APIKEY"),
})

-- List all citys
local citys, err = client:City():list()
print(citys)

-- Load a specific city
local city, err = client:City():load({ id = "example_id" })
print(city)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = SepomexSDK.test()
const result = await client.City().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = SepomexSDK.test()
result, err = client.City().load({"id": "test01"})
```

### PHP

```php
$client = SepomexSDK::test();
[$result, $err] = $client->City()->load(["id" => "test01"]);
```

### Golang

```go
client := sdk.Test()
result, err := client.City(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = SepomexSDK.test
result, err = client.City().load({ "id" => "test01" })
```

### Lua

```lua
local client = sdk.test()
local result, err = client:City():load({ id = "test01" })
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

---

Generated from the Sepomex OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
