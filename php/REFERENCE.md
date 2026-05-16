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
| `$options["apikey"]` | `string` | API key for authentication. |
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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

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

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## CityEntity

```php
$city = $client->City();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city` | ``$OBJECT`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `state_id` | ``$INTEGER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->City()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->City()->load(["id" => "city_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CityEntity`

Create a new `CityEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## MunicipalityEntity

```php
$municipality = $client->Municipality();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Municipality()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Municipality()->load(["id" => "municipality_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): MunicipalityEntity`

Create a new `MunicipalityEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## StateEntity

```php
$state = $client->State();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->State()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->State()->load(["id" => "state_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): StateEntity`

Create a new `StateEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ZipCodeEntity

```php
$zip_code = $client->ZipCode();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->ZipCode()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ZipCodeEntity`

Create a new `ZipCodeEntity` instance with the same client and
options.

#### `getName(): string`

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

