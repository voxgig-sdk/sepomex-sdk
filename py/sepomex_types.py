# Typed models for the Sepomex SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class City(TypedDict, total=False):
    city: dict
    id: int
    name: str
    state_id: int


class CityLoadMatch(TypedDict):
    id: int


class CityListMatch(TypedDict, total=False):
    city: dict
    id: int
    name: str
    state_id: int


class Municipality(TypedDict, total=False):
    id: int
    municipality: dict
    municipality_key: str
    name: str
    state_id: int
    zip_code: str


class MunicipalityLoadMatch(TypedDict):
    id: int


class MunicipalityListMatch(TypedDict, total=False):
    id: int
    municipality: dict
    municipality_key: str
    name: str
    state_id: int
    zip_code: str


class State(TypedDict, total=False):
    cities_count: int
    id: int
    municipality_key: str
    name: str
    state: dict
    state_id: int
    zip_code: str


class StateLoadMatch(TypedDict):
    id: int


class StateListMatch(TypedDict):
    id: int


class ZipCode(TypedDict, total=False):
    c_cp: str
    c_cve_ciudad: str
    c_estado: str
    c_mnpio: str
    c_oficina: str
    c_tipo_asenta: str
    d_asenta: str
    d_ciudad: str
    d_codigo: str
    d_cp: str
    d_estado: str
    d_mnpio: str
    d_tipo_asenta: str
    d_zona: str
    id: int
    id_asenta_cpcon: str


class ZipCodeListMatch(TypedDict, total=False):
    c_cp: str
    c_cve_ciudad: str
    c_estado: str
    c_mnpio: str
    c_oficina: str
    c_tipo_asenta: str
    d_asenta: str
    d_ciudad: str
    d_codigo: str
    d_cp: str
    d_estado: str
    d_mnpio: str
    d_tipo_asenta: str
    d_zona: str
    id: int
    id_asenta_cpcon: str
