# Sepomex Ruby SDK Reference

Complete API reference for the Sepomex Ruby SDK.


## SepomexSDK

### Constructor

```ruby
require_relative 'Sepomex_sdk'

client = SepomexSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SepomexSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = SepomexSDK.test
```


### Instance Methods

#### `City(data = nil)`

Create a new `City` entity instance. Pass `nil` for no initial data.

#### `Municipality(data = nil)`

Create a new `Municipality` entity instance. Pass `nil` for no initial data.

#### `State(data = nil)`

Create a new `State` entity instance. Pass `nil` for no initial data.

#### `ZipCode(data = nil)`

Create a new `ZipCode` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## CityEntity

```ruby
city = client.City
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city` | `Hash` | No |  |
| `id` | `Integer` | No |  |
| `name` | `String` | No |  |
| `state_id` | `Integer` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.City.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.City.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MunicipalityEntity

```ruby
municipality = client.Municipality
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `Integer` | No |  |
| `municipality` | `Hash` | No |  |
| `municipality_key` | `String` | No |  |
| `name` | `String` | No |  |
| `state_id` | `Integer` | No |  |
| `zip_code` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Municipality.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Municipality.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MunicipalityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StateEntity

```ruby
state = client.State
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cities_count` | `Integer` | No |  |
| `id` | `Integer` | No |  |
| `municipality_key` | `String` | No |  |
| `name` | `String` | No |  |
| `state` | `Hash` | No |  |
| `state_id` | `Integer` | No |  |
| `zip_code` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.State.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.State.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ZipCodeEntity

```ruby
zip_code = client.ZipCode
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `c_cp` | `String` | No |  |
| `c_cve_ciudad` | `String` | No |  |
| `c_estado` | `String` | No |  |
| `c_mnpio` | `String` | No |  |
| `c_oficina` | `String` | No |  |
| `c_tipo_asenta` | `String` | No |  |
| `d_asenta` | `String` | No |  |
| `d_ciudad` | `String` | No |  |
| `d_codigo` | `String` | No |  |
| `d_cp` | `String` | No |  |
| `d_estado` | `String` | No |  |
| `d_mnpio` | `String` | No |  |
| `d_tipo_asenta` | `String` | No |  |
| `d_zona` | `String` | No |  |
| `id` | `Integer` | No |  |
| `id_asenta_cpcon` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ZipCode.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ZipCodeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = SepomexSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

