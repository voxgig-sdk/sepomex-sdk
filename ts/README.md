# Sepomex TypeScript SDK



The TypeScript SDK for the Sepomex API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.City()` — each with a small set of operations (`list`, `load`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `go`, `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/sepomex-sdk/releases](https://github.com/voxgig-sdk/sepomex-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { SepomexSDK } from '@voxgig-sdk/sepomex-sdk'

const client = new SepomexSDK()
```

### 2. List city records

`list()` resolves to an array of City ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const citys = await client.City().list()

for (const city of citys) {
  console.log(city)
}
```

### 3. Load a city

`load()` returns the entity directly and throws on failure:

```ts
try {
  const city = await client.City().load({ id: 1 })
  console.log(city)
} catch (err) {
  console.error('load failed:', err)
}
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const states = await client.State().list()
  console.log(states)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = SepomexSDK.test()

const state = await client.State().list()
// state is the entity, populated with mock response data
// — call state.data() for the record itself
console.log(state)
```

You can also use the instance method:

```ts
const client = new SepomexSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.State()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new SepomexSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
SEPOMEX_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### SepomexSDK

#### Constructor

```ts
new SepomexSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `City(data?)` | `CityEntity` | Create a City entity instance. |
| `Municipality(data?)` | `MunicipalityEntity` | Create a Municipality entity instance. |
| `State(data?)` | `StateEntity` | Create a State entity instance. |
| `ZipCode(data?)` | `ZipCodeEntity` | Create a ZipCode entity instance. |
| `tester(testopts?, sdkopts?)` | `SepomexSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `SepomexSDK.test(testopts?, sdkopts?)` | `SepomexSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): SepomexSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load` resolves to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### City

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the city |
| `name` | City name |
| `state_id` | ID of the state this city belongs to |

Operations: list, load.

API path: `/cities`

#### Municipality

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the municipality |
| `municipality_key` | Municipality key code |
| `name` | Municipality name |
| `state_id` | ID of the state this municipality belongs to |
| `zip_code` | Representative zip code for the municipality |

Operations: list, load.

API path: `/municipalities`

#### State

| Field | Description |
| --- | --- |
| `cities_count` | Number of cities in the state |
| `id` | Unique identifier for the state |
| `municipality_key` | Municipality key code |
| `name` | State name |
| `state_id` | ID of the state this municipality belongs to |
| `zip_code` | Representative zip code for the municipality |

Operations: list, load.

API path: `/states`

#### ZipCode

| Field | Description |
| --- | --- |
| `c_cp` | Postal code field |
| `c_cve_ciudad` | City key |
| `c_estado` | State code |
| `c_mnpio` | Municipality code |
| `c_oficina` | Office code |
| `c_tipo_asenta` | Settlement type code |
| `d_asenta` | Settlement name (colony) |
| `d_ciudad` | City name |
| `d_codigo` | Zip code |
| `d_cp` | Postal code |
| `d_estado` | State name |
| `d_mnpio` | Municipality name |
| `d_tipo_asenta` | Settlement type |
| `d_zona` | Zone type (Urban/Rural) |
| `id` | Unique identifier for the zip code record |
| `id_asenta_cpcons` | Settlement ID |

Operations: list.

API path: `/zip_codes`



## Entities


### City

Create an instance: `const city = client.City()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` | Unique identifier for the city |
| `name` | `string` | City name |
| `state_id` | `number` | ID of the state this city belongs to |

#### Example: Load

```ts
const city = await client.City().load({ id: 1 })
```

#### Example: List

```ts
const citys = await client.City().list()
```


### Municipality

Create an instance: `const municipality = client.Municipality()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `number` | Unique identifier for the municipality |
| `municipality_key` | `string` | Municipality key code |
| `name` | `string` | Municipality name |
| `state_id` | `number` | ID of the state this municipality belongs to |
| `zip_code` | `string` | Representative zip code for the municipality |

#### Example: Load

```ts
const municipality = await client.Municipality().load({ id: 1 })
```

#### Example: List

```ts
const municipalitys = await client.Municipality().list()
```


### State

Create an instance: `const state = client.State()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cities_count` | `number` | Number of cities in the state |
| `id` | `number` | Unique identifier for the state |
| `municipality_key` | `string` | Municipality key code |
| `name` | `string` | State name |
| `state_id` | `number` | ID of the state this municipality belongs to |
| `zip_code` | `string` | Representative zip code for the municipality |

#### Example: Load

```ts
const state = await client.State().load({ id: 1 })
```

#### Example: List

```ts
const states = await client.State().list()
```


### ZipCode

Create an instance: `const zip_code = client.ZipCode()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `c_cp` | `string` | Postal code field |
| `c_cve_ciudad` | `string` | City key |
| `c_estado` | `string` | State code |
| `c_mnpio` | `string` | Municipality code |
| `c_oficina` | `string` | Office code |
| `c_tipo_asenta` | `string` | Settlement type code |
| `d_asenta` | `string` | Settlement name (colony) |
| `d_ciudad` | `string` | City name |
| `d_codigo` | `string` | Zip code |
| `d_cp` | `string` | Postal code |
| `d_estado` | `string` | State name |
| `d_mnpio` | `string` | Municipality name |
| `d_tipo_asenta` | `string` | Settlement type |
| `d_zona` | `string` | Zone type (Urban/Rural) |
| `id` | `number` | Unique identifier for the zip code record |
| `id_asenta_cpcons` | `string` | Settlement ID |

#### Example: List

```ts
const zip_codes = await client.ZipCode().list()
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | In-memory mock transport for testing without a live server |

### test

In-memory mock transport for testing without a live server.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
sepomex/
├── src/
│   ├── SepomexSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { SepomexSDK } from '@voxgig-sdk/sepomex-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const state = client.State()
await state.list()

// state.data() now returns the state data from the last `list`
// state.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
