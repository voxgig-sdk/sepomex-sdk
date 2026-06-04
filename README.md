# Sepomex SDK

Look up Mexican postal (CP) codes, states, municipalities and cities from the SEPOMEX dataset

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Sepomex

Sepomex is a free REST API maintained by [Icalia Labs](https://github.com/IcaliaLabs/sepomex) that exposes the Mexican postal-code dataset (SEPOMEX) — roughly 145,000 records covering every Mexican zip code, the city/colony it belongs to, the municipality and the state.

What you get from the API:

- Lookup zip codes by city, state, colony or the postal code itself (`/zip_codes`).
- Browse the full list of Mexican states, each with a count of cities (`/states`).
- Browse municipalities with their official key and parent state (`/municipalities`).
- Browse cities linked to their parent state (`/cities`).

Responses are paginated: the default page size is 15 records and the maximum is 200 per page, with `first`/`last`/`next`/`previous` links included in the response metadata.

The service is unauthenticated and the base URL is `https://sepomex.icalialabs.com/api/v1`. It is a community-run deployment built on Ruby on Rails + PostgreSQL, so endpoint availability can vary — consider caching results or self-hosting from the GitHub repository for production workloads.

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

## 30-second quickstart

### TypeScript

```ts
import { SepomexSDK } from 'sepomex'

const client = new SepomexSDK({})

// List all citys
const citys = await client.City().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

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
| **City** | A Mexican city (locality) tied to a parent state, exposed via `/cities` and `/cities/{id}`. | `/cities` |
| **Municipality** | A Mexican municipio with its official key and parent state, exposed via `/municipalities` and `/municipalities/{id}`. | `/municipalities` |
| **State** | A Mexican state (entidad federativa), including a count of associated cities, exposed via `/states` and `/states/{id}`. | `/states` |
| **ZipCode** | A Mexican postal code record (colonia / asentamiento) queryable by city, state, colony or code via `/zip_codes`. | `/zip_codes` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from sepomex_sdk import SepomexSDK

client = SepomexSDK({})

# List all citys
citys, err = client.City(None).list(None, None)

# Load a specific city
city, err = client.City(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'sepomex_sdk.php';

$client = new SepomexSDK([]);

// List all citys
[$citys, $err] = $client->City(null)->list(null, null);

// Load a specific city
[$city, $err] = $client->City(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/sepomex-sdk/go"

client := sdk.NewSepomexSDK(map[string]any{})

// List all citys
citys, err := client.City(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Sepomex_sdk"

client = SepomexSDK.new({})

# List all citys
citys, err = client.City(nil).list(nil, nil)

# Load a specific city
city, err = client.City(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("sepomex_sdk")

local client = sdk.new({})

-- List all citys
local citys, err = client:City(nil):list(nil, nil)

-- Load a specific city
local city, err = client:City(nil):load(
  { id = "example_id" }, nil
)
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
client = SepomexSDK.test(None, None)
result, err = client.City(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = SepomexSDK::test(null, null);
[$result, $err] = $client->City(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.City(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = SepomexSDK.test(nil, nil)
result, err = client.City(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:City(nil):load(
  { id = "test01" }, nil
)
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

## Using the Sepomex

- Upstream: [https://sepomex.icalialabs.com/api/v1](https://sepomex.icalialabs.com/api/v1)
- API docs: [https://github.com/IcaliaLabs/sepomex](https://github.com/IcaliaLabs/sepomex)

- Project code is released under the MIT License by Icalia Labs.
- The underlying postal-code data originates from SEPOMEX (Servicio Postal Mexicano); confirm any reuse against current SEPOMEX terms.
- No attribution requirements are documented in the API itself, but crediting Icalia Labs and SEPOMEX is courteous.

---

Generated from the Sepomex OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
