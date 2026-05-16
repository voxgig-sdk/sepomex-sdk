# Sepomex TypeScript SDK Reference

Complete API reference for the Sepomex TypeScript SDK.


## SepomexSDK

### Constructor

```ts
new SepomexSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SepomexSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = SepomexSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `SepomexSDK` instance in test mode.


### Instance Methods

#### `City(data?: object)`

Create a new `City` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CityEntity` instance.

#### `Municipality(data?: object)`

Create a new `Municipality` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MunicipalityEntity` instance.

#### `State(data?: object)`

Create a new `State` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `StateEntity` instance.

#### `ZipCode(data?: object)`

Create a new `ZipCode` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ZipCodeEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `SepomexSDK.test()`.

**Returns:** `SepomexSDK` instance in test mode.


---

## CityEntity

```ts
const city = client.City()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city` | ``$OBJECT`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `state_id` | ``$INTEGER`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.City().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.City().load({ id: 'city_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CityEntity` instance with the same client and
options.

#### `client()`

Return the parent `SepomexSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## MunicipalityEntity

```ts
const municipality = client.Municipality()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Municipality().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Municipality().load({ id: 'municipality_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MunicipalityEntity` instance with the same client and
options.

#### `client()`

Return the parent `SepomexSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## StateEntity

```ts
const state = client.State()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.State().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.State().load({ id: 'state_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `StateEntity` instance with the same client and
options.

#### `client()`

Return the parent `SepomexSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ZipCodeEntity

```ts
const zip_code = client.ZipCode()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ZipCode().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ZipCodeEntity` instance with the same client and
options.

#### `client()`

Return the parent `SepomexSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new SepomexSDK({
  feature: {
    test: { active: true },
  }
})
```

