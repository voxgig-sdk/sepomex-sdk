package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Sepomex",
			"slug": "sepomex",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://sepomex.icalialabs.com/api/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"city": map[string]any{},
				"municipality": map[string]any{},
				"state": map[string]any{},
				"zip_code": map[string]any{},
			},
		},
		"entity": map[string]any{
			"city": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the city",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "City name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state_id",
						"short": "ID of the state this city belongs to",
						"type": "`$INTEGER`",
					},
				},
				"name": "city",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 15,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cities",
								"parts": []any{
									"cities",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/cities/{id}",
								"parts": []any{
									"cities",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.city`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"municipality": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the municipality",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "municipality_key",
						"short": "Municipality key code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Municipality name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state_id",
						"short": "ID of the state this municipality belongs to",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "zip_code",
						"short": "Representative zip code for the municipality",
						"type": "`$STRING`",
					},
				},
				"name": "municipality",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 15,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/municipalities",
								"parts": []any{
									"municipalities",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/municipalities/{id}",
								"parts": []any{
									"municipalities",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.municipality`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"state": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cities_count",
						"short": "Number of cities in the state",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the state",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "municipality_key",
						"short": "Municipality key code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "State name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "state_id",
						"short": "ID of the state this municipality belongs to",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "zip_code",
						"short": "Representative zip code for the municipality",
						"type": "`$STRING`",
					},
				},
				"name": "state",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 15,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/states",
								"parts": []any{
									"states",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/states/{id}/municipalities",
								"parts": []any{
									"states",
									"{id}",
									"municipalities",
								},
								"select": map[string]any{
									"$action": "municipality",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.municipalities`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/states/{id}",
								"parts": []any{
									"states",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.state`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"zip_code": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "c_cp",
						"short": "Postal code field",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "c_cve_ciudad",
						"short": "City key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "c_estado",
						"short": "State code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "c_mnpio",
						"short": "Municipality code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "c_oficina",
						"short": "Office code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "c_tipo_asenta",
						"short": "Settlement type code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "d_asenta",
						"short": "Settlement name (colony)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "d_ciudad",
						"short": "City name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "d_codigo",
						"short": "Zip code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "d_cp",
						"short": "Postal code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "d_estado",
						"short": "State name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "d_mnpio",
						"short": "Municipality name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "d_tipo_asenta",
						"short": "Settlement type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "d_zona",
						"short": "Zone type (Urban/Rural)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the zip code record",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "id_asenta_cpcons",
						"short": "Settlement ID",
						"type": "`$STRING`",
					},
				},
				"name": "zip_code",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "monterrey",
											"kind": "query",
											"name": "city",
											"orig": "city",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "punta contry",
											"kind": "query",
											"name": "colony",
											"orig": "colony",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 15,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "nuevo leon",
											"kind": "query",
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "67173",
											"kind": "query",
											"name": "zip_code",
											"orig": "zip_code",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/zip_codes",
								"parts": []any{
									"zip_codes",
								},
								"select": map[string]any{
									"exist": []any{
										"city",
										"colony",
										"page",
										"per_page",
										"state",
										"zip_code",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
