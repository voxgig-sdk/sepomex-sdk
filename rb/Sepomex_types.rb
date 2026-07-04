# frozen_string_literal: true

# Typed models for the Sepomex SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# City entity data model.
#
# @!attribute [rw] city
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] state_id
#   @return [Integer, nil]
City = Struct.new(
  :city,
  :id,
  :name,
  :state_id,
  keyword_init: true
)

# Request payload for City#load.
#
# @!attribute [rw] id
#   @return [Integer]
CityLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for City#list (any subset of City fields).
#
# @!attribute [rw] city
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] state_id
#   @return [Integer, nil]
CityListMatch = Struct.new(
  :city,
  :id,
  :name,
  :state_id,
  keyword_init: true
)

# Municipality entity data model.
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] municipality
#   @return [Hash, nil]
#
# @!attribute [rw] municipality_key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] state_id
#   @return [Integer, nil]
#
# @!attribute [rw] zip_code
#   @return [String, nil]
Municipality = Struct.new(
  :id,
  :municipality,
  :municipality_key,
  :name,
  :state_id,
  :zip_code,
  keyword_init: true
)

# Request payload for Municipality#load.
#
# @!attribute [rw] id
#   @return [Integer]
MunicipalityLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Match filter for Municipality#list (any subset of Municipality fields).
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] municipality
#   @return [Hash, nil]
#
# @!attribute [rw] municipality_key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] state_id
#   @return [Integer, nil]
#
# @!attribute [rw] zip_code
#   @return [String, nil]
MunicipalityListMatch = Struct.new(
  :id,
  :municipality,
  :municipality_key,
  :name,
  :state_id,
  :zip_code,
  keyword_init: true
)

# State entity data model.
#
# @!attribute [rw] cities_count
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] municipality_key
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] state
#   @return [Hash, nil]
#
# @!attribute [rw] state_id
#   @return [Integer, nil]
#
# @!attribute [rw] zip_code
#   @return [String, nil]
State = Struct.new(
  :cities_count,
  :id,
  :municipality_key,
  :name,
  :state,
  :state_id,
  :zip_code,
  keyword_init: true
)

# Request payload for State#load.
#
# @!attribute [rw] id
#   @return [Integer]
StateLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for State#list.
#
# @!attribute [rw] id
#   @return [Integer]
StateListMatch = Struct.new(
  :id,
  keyword_init: true
)

# ZipCode entity data model.
#
# @!attribute [rw] c_cp
#   @return [String, nil]
#
# @!attribute [rw] c_cve_ciudad
#   @return [String, nil]
#
# @!attribute [rw] c_estado
#   @return [String, nil]
#
# @!attribute [rw] c_mnpio
#   @return [String, nil]
#
# @!attribute [rw] c_oficina
#   @return [String, nil]
#
# @!attribute [rw] c_tipo_asenta
#   @return [String, nil]
#
# @!attribute [rw] d_asenta
#   @return [String, nil]
#
# @!attribute [rw] d_ciudad
#   @return [String, nil]
#
# @!attribute [rw] d_codigo
#   @return [String, nil]
#
# @!attribute [rw] d_cp
#   @return [String, nil]
#
# @!attribute [rw] d_estado
#   @return [String, nil]
#
# @!attribute [rw] d_mnpio
#   @return [String, nil]
#
# @!attribute [rw] d_tipo_asenta
#   @return [String, nil]
#
# @!attribute [rw] d_zona
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] id_asenta_cpcon
#   @return [String, nil]
ZipCode = Struct.new(
  :c_cp,
  :c_cve_ciudad,
  :c_estado,
  :c_mnpio,
  :c_oficina,
  :c_tipo_asenta,
  :d_asenta,
  :d_ciudad,
  :d_codigo,
  :d_cp,
  :d_estado,
  :d_mnpio,
  :d_tipo_asenta,
  :d_zona,
  :id,
  :id_asenta_cpcon,
  keyword_init: true
)

# Match filter for ZipCode#list (any subset of ZipCode fields).
#
# @!attribute [rw] c_cp
#   @return [String, nil]
#
# @!attribute [rw] c_cve_ciudad
#   @return [String, nil]
#
# @!attribute [rw] c_estado
#   @return [String, nil]
#
# @!attribute [rw] c_mnpio
#   @return [String, nil]
#
# @!attribute [rw] c_oficina
#   @return [String, nil]
#
# @!attribute [rw] c_tipo_asenta
#   @return [String, nil]
#
# @!attribute [rw] d_asenta
#   @return [String, nil]
#
# @!attribute [rw] d_ciudad
#   @return [String, nil]
#
# @!attribute [rw] d_codigo
#   @return [String, nil]
#
# @!attribute [rw] d_cp
#   @return [String, nil]
#
# @!attribute [rw] d_estado
#   @return [String, nil]
#
# @!attribute [rw] d_mnpio
#   @return [String, nil]
#
# @!attribute [rw] d_tipo_asenta
#   @return [String, nil]
#
# @!attribute [rw] d_zona
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] id_asenta_cpcon
#   @return [String, nil]
ZipCodeListMatch = Struct.new(
  :c_cp,
  :c_cve_ciudad,
  :c_estado,
  :c_mnpio,
  :c_oficina,
  :c_tipo_asenta,
  :d_asenta,
  :d_ciudad,
  :d_codigo,
  :d_cp,
  :d_estado,
  :d_mnpio,
  :d_tipo_asenta,
  :d_zona,
  :id,
  :id_asenta_cpcon,
  keyword_init: true
)

