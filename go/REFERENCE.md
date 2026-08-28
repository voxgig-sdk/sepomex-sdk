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
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *SepomexSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *SepomexSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
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
fmt.Println(city.GetName()) // "city"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No | Unique identifier for the city |
| `name` | `string` | No | City name |
| `state_id` | `int` | No | ID of the state this city belongs to |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.City(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.City(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
fmt.Println(municipality.GetName()) // "municipality"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No | Unique identifier for the municipality |
| `municipality_key` | `string` | No | Municipality key code |
| `name` | `string` | No | Municipality name |
| `state_id` | `int` | No | ID of the state this municipality belongs to |
| `zip_code` | `string` | No | Representative zip code for the municipality |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Municipality(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Municipality(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
fmt.Println(state.GetName()) // "state"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cities_count` | `int` | No | Number of cities in the state |
| `id` | `int` | No | Unique identifier for the state |
| `municipality_key` | `string` | No | Municipality key code |
| `name` | `string` | No | State name |
| `state_id` | `int` | No | ID of the state this municipality belongs to |
| `zip_code` | `string` | No | Representative zip code for the municipality |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.State(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.State(nil).Load(map[string]any{"id": 1}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
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
zipCode := client.ZipCode(nil)
fmt.Println(zipCode.GetName()) // "zip_code"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `c_cp` | `string` | No | Postal code field |
| `c_cve_ciudad` | `string` | No | City key |
| `c_estado` | `string` | No | State code |
| `c_mnpio` | `string` | No | Municipality code |
| `c_oficina` | `string` | No | Office code |
| `c_tipo_asenta` | `string` | No | Settlement type code |
| `d_asenta` | `string` | No | Settlement name (colony) |
| `d_ciudad` | `string` | No | City name |
| `d_codigo` | `string` | No | Zip code |
| `d_cp` | `string` | No | Postal code |
| `d_estado` | `string` | No | State name |
| `d_mnpio` | `string` | No | Municipality name |
| `d_tipo_asenta` | `string` | No | Settlement type |
| `d_zona` | `string` | No | Zone type (Urban/Rural) |
| `id` | `int` | No | Unique identifier for the zip code record |
| `id_asenta_cpcons` | `string` | No | Settlement ID |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ZipCode(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

