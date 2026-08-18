
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Sepomex',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://sepomex.icalialabs.com/api/v1",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      city: {
      },

      municipality: {
      },

      state: {
      },

      zip_code: {
      },

    }
  }


  entity = {
    "city": {
      "fields": [
        {
          "name": "id",
          "type": "`$INTEGER`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "state_id",
          "type": "`$INTEGER`"
        }
      ],
      "name": "city",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 15,
                    "kind": "query",
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cities",
              "parts": [
                "cities"
              ],
              "select": {
                "exist": [
                  "page",
                  "per_page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/cities/{id}",
              "parts": [
                "cities",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.city`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "municipality": {
      "fields": [
        {
          "name": "id",
          "type": "`$INTEGER`"
        },
        {
          "name": "municipality_key",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "state_id",
          "type": "`$INTEGER`"
        },
        {
          "name": "zip_code",
          "type": "`$STRING`"
        }
      ],
      "name": "municipality",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 15,
                    "kind": "query",
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/municipalities",
              "parts": [
                "municipalities"
              ],
              "select": {
                "exist": [
                  "page",
                  "per_page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/municipalities/{id}",
              "parts": [
                "municipalities",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.municipality`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "state": {
      "fields": [
        {
          "name": "cities_count",
          "type": "`$INTEGER`"
        },
        {
          "name": "id",
          "type": "`$INTEGER`"
        },
        {
          "name": "municipality_key",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "state_id",
          "type": "`$INTEGER`"
        },
        {
          "name": "zip_code",
          "type": "`$STRING`"
        }
      ],
      "name": "state",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 15,
                    "kind": "query",
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/states",
              "parts": [
                "states"
              ],
              "select": {
                "exist": [
                  "page",
                  "per_page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            },
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/states/{id}/municipalities",
              "parts": [
                "states",
                "{id}",
                "municipalities"
              ],
              "select": {
                "$action": "municipality",
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.municipalities`"
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/states/{id}",
              "parts": [
                "states",
                "{id}"
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.state`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "zip_code": {
      "fields": [
        {
          "name": "c_cp",
          "type": "`$STRING`"
        },
        {
          "name": "c_cve_ciudad",
          "type": "`$STRING`"
        },
        {
          "name": "c_estado",
          "type": "`$STRING`"
        },
        {
          "name": "c_mnpio",
          "type": "`$STRING`"
        },
        {
          "name": "c_oficina",
          "type": "`$STRING`"
        },
        {
          "name": "c_tipo_asenta",
          "type": "`$STRING`"
        },
        {
          "name": "d_asenta",
          "type": "`$STRING`"
        },
        {
          "name": "d_ciudad",
          "type": "`$STRING`"
        },
        {
          "name": "d_codigo",
          "type": "`$STRING`"
        },
        {
          "name": "d_cp",
          "type": "`$STRING`"
        },
        {
          "name": "d_estado",
          "type": "`$STRING`"
        },
        {
          "name": "d_mnpio",
          "type": "`$STRING`"
        },
        {
          "name": "d_tipo_asenta",
          "type": "`$STRING`"
        },
        {
          "name": "d_zona",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$INTEGER`"
        },
        {
          "name": "id_asenta_cpcons",
          "type": "`$STRING`"
        }
      ],
      "name": "zip_code",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "monterrey",
                    "kind": "query",
                    "name": "city",
                    "orig": "city",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "punta contry",
                    "kind": "query",
                    "name": "colony",
                    "orig": "colony",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 15,
                    "kind": "query",
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": "nuevo leon",
                    "kind": "query",
                    "name": "state",
                    "orig": "state",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "67173",
                    "kind": "query",
                    "name": "zip_code",
                    "orig": "zip_code",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/zip_codes",
              "parts": [
                "zip_codes"
              ],
              "select": {
                "exist": [
                  "city",
                  "colony",
                  "page",
                  "per_page",
                  "state",
                  "zip_code"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

