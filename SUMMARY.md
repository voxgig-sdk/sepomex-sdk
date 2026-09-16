# Sepomex

REST API mapping current zip codes in Mexico, provides CSV or Excel files from official site. This API provides access to Mexican postal codes (SEPOMEX database) with 145,481 records including zip codes, states, municipalities, and cities.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 4 entities and 8 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### City

Results: Successful response with cities list; Successful response with city details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `id`: Unique identifier for the city
- `name`: City name
- `state_id`: ID of the state this city belongs to

### Municipality

Results: Successful response with municipalities list; Successful response with municipality details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `id`: Unique identifier for the municipality
- `municipality_key`: Municipality key code
- `name`: Municipality name
- `state_id`: ID of the state this municipality belongs to
- `zip_code`: Representative zip code for the municipality

### State

Results: Successful response with states list; Successful response with municipalities list; Successful response with state details.

SDK operations: `list`, `load`.

Key fields to recognise:

- `cities_count`: Number of cities in the state
- `id`: Unique identifier for the state
- `municipality_key`: Municipality key code
- `name`: State name
- `state_id`: ID of the state this municipality belongs to

### ZipCode

Results: Successful response with zip codes list.

SDK operations: `list`.

Key fields to recognise:

- `c_cp`: Postal code field
- `c_cve_ciudad`: City key
- `c_estado`: State code
- `c_mnpio`: Municipality code
- `c_oficina`: Office code

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| City | `list` | `GET /cities` | See reference |
| City | `load` | `GET /cities/{id}` | See reference |
| Municipality | `list` | `GET /municipalities` | See reference |
| Municipality | `load` | `GET /municipalities/{id}` | See reference |
| State | `list` | `GET /states` | See reference |
| State | `list` | `GET /states/{id}/municipalities` | See reference |
| State | `load` | `GET /states/{id}` | See reference |
| ZipCode | `list` | `GET /zip_codes` | See reference |

## Connect to the API

- Production server: `https://sepomex.icalialabs.com/api/v1`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `sepomex_list`: List records for an entity. Supported entities: `city`, `municipality`, `state`, `zip_code`.
- `sepomex_load`: Load one record for an entity. Supported entities: `city`, `municipality`, `state`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

