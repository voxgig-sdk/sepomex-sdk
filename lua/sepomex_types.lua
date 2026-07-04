-- Typed models for the Sepomex SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class City
---@field city? table
---@field id? number
---@field name? string
---@field state_id? number

---@class CityLoadMatch
---@field id number

---@class CityListMatch

---@class Municipality
---@field id? number
---@field municipality? table
---@field municipality_key? string
---@field name? string
---@field state_id? number
---@field zip_code? string

---@class MunicipalityLoadMatch
---@field id number

---@class MunicipalityListMatch

---@class State
---@field cities_count? number
---@field id? number
---@field municipality_key? string
---@field name? string
---@field state? table
---@field state_id? number
---@field zip_code? string

---@class StateLoadMatch
---@field id number

---@class StateListMatch
---@field id number

---@class ZipCode
---@field c_cp? string
---@field c_cve_ciudad? string
---@field c_estado? string
---@field c_mnpio? string
---@field c_oficina? string
---@field c_tipo_asenta? string
---@field d_asenta? string
---@field d_ciudad? string
---@field d_codigo? string
---@field d_cp? string
---@field d_estado? string
---@field d_mnpio? string
---@field d_tipo_asenta? string
---@field d_zona? string
---@field id? number
---@field id_asenta_cpcon? string

---@class ZipCodeListMatch

local M = {}

return M
