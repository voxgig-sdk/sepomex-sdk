# Sepomex Lua SDK Reference

Complete API reference for the Sepomex Lua SDK.


## SepomexSDK

### Constructor

```lua
local sdk = require("sepomex_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `City(data)`

Create a new `City` entity instance. Pass `nil` for no initial data.

#### `Municipality(data)`

Create a new `Municipality` entity instance. Pass `nil` for no initial data.

#### `State(data)`

Create a new `State` entity instance. Pass `nil` for no initial data.

#### `ZipCode(data)`

Create a new `ZipCode` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## CityEntity

```lua
local city = client:City(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city` | `table` | No |  |
| `id` | `number` | No |  |
| `name` | `string` | No |  |
| `state_id` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:City():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:City():load({ id = "city_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MunicipalityEntity

```lua
local municipality = client:Municipality(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `number` | No |  |
| `municipality` | `table` | No |  |
| `municipality_key` | `string` | No |  |
| `name` | `string` | No |  |
| `state_id` | `number` | No |  |
| `zip_code` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Municipality():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Municipality():load({ id = "municipality_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MunicipalityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StateEntity

```lua
local state = client:State(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cities_count` | `number` | No |  |
| `id` | `number` | No |  |
| `municipality_key` | `string` | No |  |
| `name` | `string` | No |  |
| `state` | `table` | No |  |
| `state_id` | `number` | No |  |
| `zip_code` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:State():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:State():load({ id = "state_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ZipCodeEntity

```lua
local zip_code = client:ZipCode(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `c_cp` | `string` | No |  |
| `c_cve_ciudad` | `string` | No |  |
| `c_estado` | `string` | No |  |
| `c_mnpio` | `string` | No |  |
| `c_oficina` | `string` | No |  |
| `c_tipo_asenta` | `string` | No |  |
| `d_asenta` | `string` | No |  |
| `d_ciudad` | `string` | No |  |
| `d_codigo` | `string` | No |  |
| `d_cp` | `string` | No |  |
| `d_estado` | `string` | No |  |
| `d_mnpio` | `string` | No |  |
| `d_tipo_asenta` | `string` | No |  |
| `d_zona` | `string` | No |  |
| `id` | `number` | No |  |
| `id_asenta_cpcon` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ZipCode():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZipCodeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

