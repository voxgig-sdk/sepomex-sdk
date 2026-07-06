// Typed models for the Sepomex SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// City is the typed data model for the city entity.
type City struct {
	City *map[string]any `json:"city,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	StateId *int `json:"state_id,omitempty"`
}

// CityLoadMatch is the typed request payload for City.LoadTyped.
type CityLoadMatch struct {
	Id int `json:"id"`
}

// CityListMatch is the typed request payload for City.ListTyped.
type CityListMatch struct {
	City *map[string]any `json:"city,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	StateId *int `json:"state_id,omitempty"`
}

// Municipality is the typed data model for the municipality entity.
type Municipality struct {
	Id *int `json:"id,omitempty"`
	Municipality *map[string]any `json:"municipality,omitempty"`
	MunicipalityKey *string `json:"municipality_key,omitempty"`
	Name *string `json:"name,omitempty"`
	StateId *int `json:"state_id,omitempty"`
	ZipCode *string `json:"zip_code,omitempty"`
}

// MunicipalityLoadMatch is the typed request payload for Municipality.LoadTyped.
type MunicipalityLoadMatch struct {
	Id int `json:"id"`
}

// MunicipalityListMatch is the typed request payload for Municipality.ListTyped.
type MunicipalityListMatch struct {
	Id *int `json:"id,omitempty"`
	Municipality *map[string]any `json:"municipality,omitempty"`
	MunicipalityKey *string `json:"municipality_key,omitempty"`
	Name *string `json:"name,omitempty"`
	StateId *int `json:"state_id,omitempty"`
	ZipCode *string `json:"zip_code,omitempty"`
}

// State is the typed data model for the state entity.
type State struct {
	CitiesCount *int `json:"cities_count,omitempty"`
	Id *int `json:"id,omitempty"`
	MunicipalityKey *string `json:"municipality_key,omitempty"`
	Name *string `json:"name,omitempty"`
	State *map[string]any `json:"state,omitempty"`
	StateId *int `json:"state_id,omitempty"`
	ZipCode *string `json:"zip_code,omitempty"`
}

// StateLoadMatch is the typed request payload for State.LoadTyped.
type StateLoadMatch struct {
	Id int `json:"id"`
}

// StateListMatch is the typed request payload for State.ListTyped.
type StateListMatch struct {
	Id int `json:"id"`
}

// ZipCode is the typed data model for the zip_code entity.
type ZipCode struct {
	CCp *string `json:"c_cp,omitempty"`
	CCveCiudad *string `json:"c_cve_ciudad,omitempty"`
	CEstado *string `json:"c_estado,omitempty"`
	CMnpio *string `json:"c_mnpio,omitempty"`
	COficina *string `json:"c_oficina,omitempty"`
	CTipoAsenta *string `json:"c_tipo_asenta,omitempty"`
	DAsenta *string `json:"d_asenta,omitempty"`
	DCiudad *string `json:"d_ciudad,omitempty"`
	DCodigo *string `json:"d_codigo,omitempty"`
	DCp *string `json:"d_cp,omitempty"`
	DEstado *string `json:"d_estado,omitempty"`
	DMnpio *string `json:"d_mnpio,omitempty"`
	DTipoAsenta *string `json:"d_tipo_asenta,omitempty"`
	DZona *string `json:"d_zona,omitempty"`
	Id *int `json:"id,omitempty"`
	IdAsentaCpcon *string `json:"id_asenta_cpcon,omitempty"`
}

// ZipCodeListMatch is the typed request payload for ZipCode.ListTyped.
type ZipCodeListMatch struct {
	CCp *string `json:"c_cp,omitempty"`
	CCveCiudad *string `json:"c_cve_ciudad,omitempty"`
	CEstado *string `json:"c_estado,omitempty"`
	CMnpio *string `json:"c_mnpio,omitempty"`
	COficina *string `json:"c_oficina,omitempty"`
	CTipoAsenta *string `json:"c_tipo_asenta,omitempty"`
	DAsenta *string `json:"d_asenta,omitempty"`
	DCiudad *string `json:"d_ciudad,omitempty"`
	DCodigo *string `json:"d_codigo,omitempty"`
	DCp *string `json:"d_cp,omitempty"`
	DEstado *string `json:"d_estado,omitempty"`
	DMnpio *string `json:"d_mnpio,omitempty"`
	DTipoAsenta *string `json:"d_tipo_asenta,omitempty"`
	DZona *string `json:"d_zona,omitempty"`
	Id *int `json:"id,omitempty"`
	IdAsentaCpcon *string `json:"id_asenta_cpcon,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
