-- Sepomex SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Sepomex",
      slug = "sepomex",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://sepomex.icalialabs.com/api/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["city"] = {},
        ["municipality"] = {},
        ["state"] = {},
        ["zip_code"] = {},
      },
    },
    entity = {
      ["city"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the city",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["short"] = "City name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "state_id",
            ["short"] = "ID of the state this city belongs to",
            ["type"] = "`$INTEGER`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "city",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 15,
                      ["kind"] = "query",
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cities",
                ["segments"] = {
                  {
                    ["lit"] = "cities",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "per_page",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "cities",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/cities/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "cities",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.city`",
                },
                ["parts"] = {
                  "cities",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["municipality"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the municipality",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "municipality_key",
            ["short"] = "Municipality key code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "Municipality name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "state_id",
            ["short"] = "ID of the state this municipality belongs to",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "zip_code",
            ["short"] = "Representative zip code for the municipality",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "municipality",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 15,
                      ["kind"] = "query",
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/municipalities",
                ["segments"] = {
                  {
                    ["lit"] = "municipalities",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "per_page",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "municipalities",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/municipalities/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "municipalities",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.municipality`",
                },
                ["parts"] = {
                  "municipalities",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["state"] = {
        ["fields"] = {
          {
            ["name"] = "cities_count",
            ["short"] = "Number of cities in the state",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the state",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "municipality_key",
            ["short"] = "Municipality key code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "State name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "state_id",
            ["short"] = "ID of the state this municipality belongs to",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "zip_code",
            ["short"] = "Representative zip code for the municipality",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "state",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 15,
                      ["kind"] = "query",
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/states",
                ["segments"] = {
                  {
                    ["lit"] = "states",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "page",
                    "per_page",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "states",
                },
              },
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/states/{id}/municipalities",
                ["segments"] = {
                  {
                    ["lit"] = "states",
                  },
                  {
                    ["var"] = "id",
                  },
                  {
                    ["lit"] = "municipalities",
                  },
                },
                ["select"] = {
                  ["$action"] = "municipality",
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.municipalities`",
                },
                ["parts"] = {
                  "states",
                  "{id}",
                  "municipalities",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/states/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "states",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.state`",
                },
                ["parts"] = {
                  "states",
                  "{id}",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["zip_code"] = {
        ["fields"] = {
          {
            ["name"] = "c_cp",
            ["short"] = "Postal code field",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "c_cve_ciudad",
            ["short"] = "City key",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "c_estado",
            ["short"] = "State code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "c_mnpio",
            ["short"] = "Municipality code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "c_oficina",
            ["short"] = "Office code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "c_tipo_asenta",
            ["short"] = "Settlement type code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "d_asenta",
            ["short"] = "Settlement name (colony)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "d_ciudad",
            ["short"] = "City name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "d_codigo",
            ["short"] = "Zip code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "d_cp",
            ["short"] = "Postal code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "d_estado",
            ["short"] = "State name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "d_mnpio",
            ["short"] = "Municipality name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "d_tipo_asenta",
            ["short"] = "Settlement type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "d_zona",
            ["short"] = "Zone type (Urban/Rural)",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the zip code record",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "id_asenta_cpcons",
            ["short"] = "Settlement ID",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "zip_code",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "monterrey",
                      ["kind"] = "query",
                      ["name"] = "city",
                      ["orig"] = "city",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "punta contry",
                      ["kind"] = "query",
                      ["name"] = "colony",
                      ["orig"] = "colony",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 15,
                      ["kind"] = "query",
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = "nuevo leon",
                      ["kind"] = "query",
                      ["name"] = "state",
                      ["orig"] = "state",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "67173",
                      ["kind"] = "query",
                      ["name"] = "zip_code",
                      ["orig"] = "zip_code",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/zip_codes",
                ["segments"] = {
                  {
                    ["lit"] = "zip_codes",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "city",
                    "colony",
                    "page",
                    "per_page",
                    "state",
                    "zip_code",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "zip_codes",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
