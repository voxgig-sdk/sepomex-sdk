# Sepomex Golang SDK Reference

Complete API reference for the Sepomex Golang SDK.


## SepomexSDK

### Constructor

```go
func NewSepomexSDK(options map[string]any) *SepomexSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `TestSDK(testopts, sdkopts map[string]any) *SepomexSDK`

Create a test client with mock features active. Both arguments may be `nil`.

```go
client := sdk.TestSDK(nil, nil)
```


### Instance Methods

#### `City(data map[string]any) SepomexEntity`

Create a new `City` entity instance. Pass `nil` for no initial data.

#### `Municipality(data map[string]any) SepomexEntity`

Create a new `Municipality` entity instance. Pass `nil` for no initial data.

#### `State(data map[string]any) SepomexEntity`

Create a new `State` entity instance. Pass `nil` for no initial data.

#### `ZipCode(data map[string]any) SepomexEntity`

Create a new `ZipCode` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## CityEntity

```go
city := client.City(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city` | ``$OBJECT`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `state_id` | ``$INTEGER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.City(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.City(nil).Load(map[string]any{"id": "city_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## MunicipalityEntity

```go
municipality := client.Municipality(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | ``$INTEGER`` | No |  |
| `municipality` | ``$OBJECT`` | No |  |
| `municipality_key` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `state_id` | ``$INTEGER`` | No |  |
| `zip_code` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Municipality(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Municipality(nil).Load(map[string]any{"id": "municipality_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `MunicipalityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## StateEntity

```go
state := client.State(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cities_count` | ``$INTEGER`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `municipality_key` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `state` | ``$OBJECT`` | No |  |
| `state_id` | ``$INTEGER`` | No |  |
| `zip_code` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.State(nil).List(nil, nil)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.State(nil).Load(map[string]any{"id": "state_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `StateEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ZipCodeEntity

```go
zip_code := client.ZipCode(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `c_cp` | ``$STRING`` | No |  |
| `c_cve_ciudad` | ``$STRING`` | No |  |
| `c_estado` | ``$STRING`` | No |  |
| `c_mnpio` | ``$STRING`` | No |  |
| `c_oficina` | ``$STRING`` | No |  |
| `c_tipo_asenta` | ``$STRING`` | No |  |
| `d_asenta` | ``$STRING`` | No |  |
| `d_ciudad` | ``$STRING`` | No |  |
| `d_codigo` | ``$STRING`` | No |  |
| `d_cp` | ``$STRING`` | No |  |
| `d_estado` | ``$STRING`` | No |  |
| `d_mnpio` | ``$STRING`` | No |  |
| `d_tipo_asenta` | ``$STRING`` | No |  |
| `d_zona` | ``$STRING`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `id_asenta_cpcon` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZipCode(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ZipCodeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewSepomexSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

