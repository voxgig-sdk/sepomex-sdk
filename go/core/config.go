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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "Unique identifier for the city",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "City name",
					},
					map[string]any{
						"name": "state_id",
						"title": "State Id",
						"type": "`$INTEGER`",
						"short": "ID of the state this city belongs to",
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
								"kind": "http",
								"method": "GET",
								"orig": "/cities",
								"segments": []any{
									map[string]any{
										"lit": "cities",
									},
								},
								"parts": []any{
									"cities",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 15,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"cities",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.city`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "Unique identifier for the municipality",
					},
					map[string]any{
						"name": "municipality_key",
						"title": "Municipality Key",
						"type": "`$STRING`",
						"short": "Municipality key code",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "Municipality name",
					},
					map[string]any{
						"name": "state_id",
						"title": "State Id",
						"type": "`$INTEGER`",
						"short": "ID of the state this municipality belongs to",
					},
					map[string]any{
						"name": "zip_code",
						"title": "Zip Code",
						"type": "`$STRING`",
						"short": "Representative zip code for the municipality",
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
								"kind": "http",
								"method": "GET",
								"orig": "/municipalities",
								"segments": []any{
									map[string]any{
										"lit": "municipalities",
									},
								},
								"parts": []any{
									"municipalities",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 15,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"municipalities",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.municipality`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "Cities Count",
						"type": "`$INTEGER`",
						"short": "Number of cities in the state",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "Unique identifier for the state",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"short": "State name",
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
								"kind": "http",
								"method": "GET",
								"orig": "/states",
								"segments": []any{
									map[string]any{
										"lit": "states",
									},
								},
								"parts": []any{
									"states",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 15,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"per_page",
									},
								},
							},
							map[string]any{
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
								"parts": []any{
									"states",
									"{id}",
									"municipalities",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.municipalities`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"$action": "municipality",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"states",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.state`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
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
						"title": "C Cp",
						"type": "`$STRING`",
						"short": "Postal code field",
					},
					map[string]any{
						"name": "c_cve_ciudad",
						"title": "C Cve Ciudad",
						"type": "`$STRING`",
						"short": "City key",
					},
					map[string]any{
						"name": "c_estado",
						"title": "C Estado",
						"type": "`$STRING`",
						"short": "State code",
					},
					map[string]any{
						"name": "c_mnpio",
						"title": "C Mnpio",
						"type": "`$STRING`",
						"short": "Municipality code",
					},
					map[string]any{
						"name": "c_oficina",
						"title": "C Oficina",
						"type": "`$STRING`",
						"short": "Office code",
					},
					map[string]any{
						"name": "c_tipo_asenta",
						"title": "C Tipo Asenta",
						"type": "`$STRING`",
						"short": "Settlement type code",
					},
					map[string]any{
						"name": "d_asenta",
						"title": "D Asenta",
						"type": "`$STRING`",
						"short": "Settlement name (colony)",
					},
					map[string]any{
						"name": "d_ciudad",
						"title": "D Ciudad",
						"type": "`$STRING`",
						"short": "City name",
					},
					map[string]any{
						"name": "d_codigo",
						"title": "D Codigo",
						"type": "`$STRING`",
						"short": "Zip code",
					},
					map[string]any{
						"name": "d_cp",
						"title": "D Cp",
						"type": "`$STRING`",
						"short": "Postal code",
					},
					map[string]any{
						"name": "d_estado",
						"title": "D Estado",
						"type": "`$STRING`",
						"short": "State name",
					},
					map[string]any{
						"name": "d_mnpio",
						"title": "D Mnpio",
						"type": "`$STRING`",
						"short": "Municipality name",
					},
					map[string]any{
						"name": "d_tipo_asenta",
						"title": "D Tipo Asenta",
						"type": "`$STRING`",
						"short": "Settlement type",
					},
					map[string]any{
						"name": "d_zona",
						"title": "D Zona",
						"type": "`$STRING`",
						"short": "Zone type (Urban/Rural)",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "Unique identifier for the zip code record",
					},
					map[string]any{
						"name": "id_asenta_cpcons",
						"title": "Id Asenta Cpcons",
						"type": "`$STRING`",
						"short": "Settlement ID",
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
								"kind": "http",
								"method": "GET",
								"orig": "/zip_codes",
								"segments": []any{
									map[string]any{
										"lit": "zip_codes",
									},
								},
								"parts": []any{
									"zip_codes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "city",
											"orig": "city",
											"type": "`$STRING`",
											"kind": "query",
											"example": "monterrey",
										},
										map[string]any{
											"name": "colony",
											"orig": "colony",
											"type": "`$STRING`",
											"kind": "query",
											"example": "punta contry",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 15,
										},
										map[string]any{
											"name": "state",
											"orig": "state",
											"type": "`$STRING`",
											"kind": "query",
											"example": "nuevo leon",
										},
										map[string]any{
											"name": "zip_code",
											"orig": "zip_code",
											"type": "`$STRING`",
											"kind": "query",
											"example": "67173",
										},
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
