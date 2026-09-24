# Sepomex SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Sepomex",
            "slug": "sepomex",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://sepomex.icalialabs.com/api/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "city": {},
                "municipality": {},
                "state": {},
                "zip_code": {},
            },
        },
        "entity": {
      "city": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the city",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "City name",
          },
          {
            "name": "state_id",
            "title": "State Id",
            "type": "`$INTEGER`",
            "short": "ID of the state this city belongs to",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "city",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cities",
                "segments": [
                  {
                    "lit": "cities",
                  },
                ],
                "parts": [
                  "cities",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "per_page",
                      "orig": "per_page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 15,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "page",
                    "per_page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/cities/{id}",
                "segments": [
                  {
                    "lit": "cities",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "cities",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.city`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "municipality": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the municipality",
          },
          {
            "name": "municipality_key",
            "title": "Municipality Key",
            "type": "`$STRING`",
            "short": "Municipality key code",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "Municipality name",
          },
          {
            "name": "state_id",
            "title": "State Id",
            "type": "`$INTEGER`",
            "short": "ID of the state this municipality belongs to",
          },
          {
            "name": "zip_code",
            "title": "Zip Code",
            "type": "`$STRING`",
            "short": "Representative zip code for the municipality",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "municipality",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/municipalities",
                "segments": [
                  {
                    "lit": "municipalities",
                  },
                ],
                "parts": [
                  "municipalities",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "per_page",
                      "orig": "per_page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 15,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "page",
                    "per_page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/municipalities/{id}",
                "segments": [
                  {
                    "lit": "municipalities",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "municipalities",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.municipality`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "state": {
        "fields": [
          {
            "name": "cities_count",
            "title": "Cities Count",
            "type": "`$INTEGER`",
            "short": "Number of cities in the state",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the state",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "short": "State name",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "state",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/states",
                "segments": [
                  {
                    "lit": "states",
                  },
                ],
                "parts": [
                  "states",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "per_page",
                      "orig": "per_page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 15,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "page",
                    "per_page",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/states/{id}/municipalities",
                "segments": [
                  {
                    "lit": "states",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "municipalities",
                  },
                ],
                "parts": [
                  "states",
                  "{id}",
                  "municipalities",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.municipalities`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "$action": "municipality",
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/states/{id}",
                "segments": [
                  {
                    "lit": "states",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "states",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.state`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "zip_code": {
        "fields": [
          {
            "name": "c_cp",
            "title": "C Cp",
            "type": "`$STRING`",
            "short": "Postal code field",
          },
          {
            "name": "c_cve_ciudad",
            "title": "C Cve Ciudad",
            "type": "`$STRING`",
            "short": "City key",
          },
          {
            "name": "c_estado",
            "title": "C Estado",
            "type": "`$STRING`",
            "short": "State code",
          },
          {
            "name": "c_mnpio",
            "title": "C Mnpio",
            "type": "`$STRING`",
            "short": "Municipality code",
          },
          {
            "name": "c_oficina",
            "title": "C Oficina",
            "type": "`$STRING`",
            "short": "Office code",
          },
          {
            "name": "c_tipo_asenta",
            "title": "C Tipo Asenta",
            "type": "`$STRING`",
            "short": "Settlement type code",
          },
          {
            "name": "d_asenta",
            "title": "D Asenta",
            "type": "`$STRING`",
            "short": "Settlement name (colony)",
          },
          {
            "name": "d_ciudad",
            "title": "D Ciudad",
            "type": "`$STRING`",
            "short": "City name",
          },
          {
            "name": "d_codigo",
            "title": "D Codigo",
            "type": "`$STRING`",
            "short": "Zip code",
          },
          {
            "name": "d_cp",
            "title": "D Cp",
            "type": "`$STRING`",
            "short": "Postal code",
          },
          {
            "name": "d_estado",
            "title": "D Estado",
            "type": "`$STRING`",
            "short": "State name",
          },
          {
            "name": "d_mnpio",
            "title": "D Mnpio",
            "type": "`$STRING`",
            "short": "Municipality name",
          },
          {
            "name": "d_tipo_asenta",
            "title": "D Tipo Asenta",
            "type": "`$STRING`",
            "short": "Settlement type",
          },
          {
            "name": "d_zona",
            "title": "D Zona",
            "type": "`$STRING`",
            "short": "Zone type (Urban/Rural)",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the zip code record",
          },
          {
            "name": "id_asenta_cpcons",
            "title": "Id Asenta Cpcons",
            "type": "`$STRING`",
            "short": "Settlement ID",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "zip_code",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/zip_codes",
                "segments": [
                  {
                    "lit": "zip_codes",
                  },
                ],
                "parts": [
                  "zip_codes",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "city",
                      "orig": "city",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "monterrey",
                    },
                    {
                      "name": "colony",
                      "orig": "colony",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "punta contry",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "per_page",
                      "orig": "per_page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 15,
                    },
                    {
                      "name": "state",
                      "orig": "state",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "nuevo leon",
                    },
                    {
                      "name": "zip_code",
                      "orig": "zip_code",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "67173",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "city",
                    "colony",
                    "page",
                    "per_page",
                    "state",
                    "zip_code",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
