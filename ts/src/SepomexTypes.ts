// Typed models for the Sepomex SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface City {
  id?: number
  name?: string
  state_id?: number
}

export interface CityLoadMatch {
  id: number
}

export interface CityListMatch {
  id?: number
  name?: string
  state_id?: number
}

export interface Municipality {
  id?: number
  municipality_key?: string
  name?: string
  state_id?: number
  zip_code?: string
}

export interface MunicipalityLoadMatch {
  id: number
}

export interface MunicipalityListMatch {
  id?: number
  municipality_key?: string
  name?: string
  state_id?: number
  zip_code?: string
}

export interface State {
  cities_count?: number
  id?: number
  municipality_key?: string
  name?: string
  state_id?: number
  zip_code?: string
}

export interface StateLoadMatch {
  id: number
}

export interface StateListMatch {
  cities_count?: number
  id?: number
  municipality_key?: string
  name?: string
  state_id?: number
  zip_code?: string

  // Selects a custom action instead of the plain list:
  //   'municipality'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ZipCode {
  c_cp?: string
  c_cve_ciudad?: string
  c_estado?: string
  c_mnpio?: string
  c_oficina?: string
  c_tipo_asenta?: string
  d_asenta?: string
  d_ciudad?: string
  d_codigo?: string
  d_cp?: string
  d_estado?: string
  d_mnpio?: string
  d_tipo_asenta?: string
  d_zona?: string
  id?: number
  id_asenta_cpcons?: string
}

export interface ZipCodeListMatch {
  c_cp?: string
  c_cve_ciudad?: string
  c_estado?: string
  c_mnpio?: string
  c_oficina?: string
  c_tipo_asenta?: string
  d_asenta?: string
  d_ciudad?: string
  d_codigo?: string
  d_cp?: string
  d_estado?: string
  d_mnpio?: string
  d_tipo_asenta?: string
  d_zona?: string
  id?: number
  id_asenta_cpcons?: string
}

