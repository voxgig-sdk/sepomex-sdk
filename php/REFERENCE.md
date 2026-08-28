# Sepomex PHP SDK Reference

Complete API reference for the Sepomex PHP SDK.


## SepomexSDK

### Constructor

```php
require_once __DIR__ . '/sepomex_sdk.php';

$client = new SepomexSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SepomexSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = SepomexSDK::test();
```


### Instance Methods

#### `City($data = null)`

Create a new `CityEntity` instance. Pass `null` for no initial data.

#### `Municipality($data = null)`

Create a new `MunicipalityEntity` instance. Pass `null` for no initial data.

#### `State($data = null)`

Create a new `StateEntity` instance. Pass `null` for no initial data.

#### `ZipCode($data = null)`

Create a new `ZipCodeEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): SepomexUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## CityEntity

```php
$city = $client->City();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No | Unique identifier for the city |
| `name` | `string` | No | City name |
| `state_id` | `int` | No | ID of the state this city belongs to |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->City()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->City()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CityEntity`

Create a new `CityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MunicipalityEntity

```php
$municipality = $client->Municipality();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Municipality()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Municipality()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MunicipalityEntity`

Create a new `MunicipalityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StateEntity

```php
$state = $client->State();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->State()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->State()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StateEntity`

Create a new `StateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ZipCodeEntity

```php
$zip_code = $client->ZipCode();
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

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ZipCode()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ZipCodeEntity`

Create a new `ZipCodeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new SepomexSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
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

