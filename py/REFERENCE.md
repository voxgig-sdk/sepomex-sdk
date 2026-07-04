# Sepomex Python SDK Reference

Complete API reference for the Sepomex Python SDK.


## SepomexSDK

### Constructor

```python
from sepomex_sdk import SepomexSDK

client = SepomexSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `SepomexSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = SepomexSDK.test()
```


### Instance Methods

#### `City(data=None)`

Create a new `CityEntity` instance. Pass `None` for no initial data.

#### `Municipality(data=None)`

Create a new `MunicipalityEntity` instance. Pass `None` for no initial data.

#### `State(data=None)`

Create a new `StateEntity` instance. Pass `None` for no initial data.

#### `ZipCode(data=None)`

Create a new `ZipCodeEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## CityEntity

```python
city = client.city
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city` | ``$OBJECT`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `name` | ``$STRING`` | No |  |
| `state_id` | ``$INTEGER`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.city.list({})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.city.load({"id": "city_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## MunicipalityEntity

```python
municipality = client.municipality
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.municipality.list({})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.municipality.load({"id": "municipality_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MunicipalityEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## StateEntity

```python
state = client.state
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.state.list({})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.state.load({"id": "state_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ZipCodeEntity

```python
zip_code = client.zip_code
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

#### `list(reqmatch, ctrl=None) -> list`

List entities matching the given criteria. Returns a list and raises on error.

```python
results = client.zip_code.list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ZipCodeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = SepomexSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

