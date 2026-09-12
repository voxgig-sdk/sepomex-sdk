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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "cities",
									},
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
								"parts": []any{
									"cities",
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
								"segments": []any{
									map[string]any{
										"lit": "cities",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"cities",
									"{id}",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "municipalities",
									},
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
								"parts": []any{
									"municipalities",
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
								"segments": []any{
									map[string]any{
										"lit": "municipalities",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"municipalities",
									"{id}",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "states",
									},
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
								"parts": []any{
									"states",
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
								"segments": []any{
									map[string]any{
										"lit": "states",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "municipalities",
									},
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
								"parts": []any{
									"states",
									"{id}",
									"municipalities",
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
								"segments": []any{
									map[string]any{
										"lit": "states",
									},
									map[string]any{
										"var": "id",
									},
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
								"parts": []any{
									"states",
									"{id}",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "zip_codes",
									},
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
								"parts": []any{
									"zip_codes",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
