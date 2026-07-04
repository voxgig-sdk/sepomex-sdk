# Typed models for the Sepomex SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class City:
    city: Optional[dict] = None
    id: Optional[int] = None
    name: Optional[str] = None
    state_id: Optional[int] = None


@dataclass
class CityLoadMatch:
    id: int


@dataclass
class CityListMatch:
    city: Optional[dict] = None
    id: Optional[int] = None
    name: Optional[str] = None
    state_id: Optional[int] = None


@dataclass
class Municipality:
    id: Optional[int] = None
    municipality: Optional[dict] = None
    municipality_key: Optional[str] = None
    name: Optional[str] = None
    state_id: Optional[int] = None
    zip_code: Optional[str] = None


@dataclass
class MunicipalityLoadMatch:
    id: int


@dataclass
class MunicipalityListMatch:
    id: Optional[int] = None
    municipality: Optional[dict] = None
    municipality_key: Optional[str] = None
    name: Optional[str] = None
    state_id: Optional[int] = None
    zip_code: Optional[str] = None


@dataclass
class State:
    cities_count: Optional[int] = None
    id: Optional[int] = None
    municipality_key: Optional[str] = None
    name: Optional[str] = None
    state: Optional[dict] = None
    state_id: Optional[int] = None
    zip_code: Optional[str] = None


@dataclass
class StateLoadMatch:
    id: int


@dataclass
class StateListMatch:
    id: int


@dataclass
class ZipCode:
    c_cp: Optional[str] = None
    c_cve_ciudad: Optional[str] = None
    c_estado: Optional[str] = None
    c_mnpio: Optional[str] = None
    c_oficina: Optional[str] = None
    c_tipo_asenta: Optional[str] = None
    d_asenta: Optional[str] = None
    d_ciudad: Optional[str] = None
    d_codigo: Optional[str] = None
    d_cp: Optional[str] = None
    d_estado: Optional[str] = None
    d_mnpio: Optional[str] = None
    d_tipo_asenta: Optional[str] = None
    d_zona: Optional[str] = None
    id: Optional[int] = None
    id_asenta_cpcon: Optional[str] = None


@dataclass
class ZipCodeListMatch:
    c_cp: Optional[str] = None
    c_cve_ciudad: Optional[str] = None
    c_estado: Optional[str] = None
    c_mnpio: Optional[str] = None
    c_oficina: Optional[str] = None
    c_tipo_asenta: Optional[str] = None
    d_asenta: Optional[str] = None
    d_ciudad: Optional[str] = None
    d_codigo: Optional[str] = None
    d_cp: Optional[str] = None
    d_estado: Optional[str] = None
    d_mnpio: Optional[str] = None
    d_tipo_asenta: Optional[str] = None
    d_zona: Optional[str] = None
    id: Optional[int] = None
    id_asenta_cpcon: Optional[str] = None

