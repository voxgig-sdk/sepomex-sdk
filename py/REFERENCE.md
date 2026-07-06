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
city = client.City()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `city` | `dict` | No |  |
| `id` | `int` | No |  |
| `name` | `str` | No |  |
| `state_id` | `int` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.City().list()
for city in results:
    print(city)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.City().load({"id": "city_id"})
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
municipality = client.Municipality()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `int` | No |  |
| `municipality` | `dict` | No |  |
| `municipality_key` | `str` | No |  |
| `name` | `str` | No |  |
| `state_id` | `int` | No |  |
| `zip_code` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Municipality().list()
for municipality in results:
    print(municipality)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Municipality().load({"id": "municipality_id"})
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
state = client.State()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cities_count` | `int` | No |  |
| `id` | `int` | No |  |
| `municipality_key` | `str` | No |  |
| `name` | `str` | No |  |
| `state` | `dict` | No |  |
| `state_id` | `int` | No |  |
| `zip_code` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.State().list()
for state in results:
    print(state)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.State().load({"id": "state_id"})
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
zip_code = client.ZipCode()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `c_cp` | `str` | No |  |
| `c_cve_ciudad` | `str` | No |  |
| `c_estado` | `str` | No |  |
| `c_mnpio` | `str` | No |  |
| `c_oficina` | `str` | No |  |
| `c_tipo_asenta` | `str` | No |  |
| `d_asenta` | `str` | No |  |
| `d_ciudad` | `str` | No |  |
| `d_codigo` | `str` | No |  |
| `d_cp` | `str` | No |  |
| `d_estado` | `str` | No |  |
| `d_mnpio` | `str` | No |  |
| `d_tipo_asenta` | `str` | No |  |
| `d_zona` | `str` | No |  |
| `id` | `int` | No |  |
| `id_asenta_cpcon` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ZipCode().list()
for zip_code in results:
    print(zip_code)
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

