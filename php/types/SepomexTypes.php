<?php
declare(strict_types=1);

// Typed models for the Sepomex SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** City entity data model. */
class City
{
    public ?array $city = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?int $state_id = null;
}

/** Request payload for City#load. */
class CityLoadMatch
{
    public int $id;
}

/** Request payload for City#list. */
class CityListMatch
{
    public ?array $city = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?int $state_id = null;
}

/** Municipality entity data model. */
class Municipality
{
    public ?int $id = null;
    public ?array $municipality = null;
    public ?string $municipality_key = null;
    public ?string $name = null;
    public ?int $state_id = null;
    public ?string $zip_code = null;
}

/** Request payload for Municipality#load. */
class MunicipalityLoadMatch
{
    public int $id;
}

/** Request payload for Municipality#list. */
class MunicipalityListMatch
{
    public ?int $id = null;
    public ?array $municipality = null;
    public ?string $municipality_key = null;
    public ?string $name = null;
    public ?int $state_id = null;
    public ?string $zip_code = null;
}

/** State entity data model. */
class State
{
    public ?int $cities_count = null;
    public ?int $id = null;
    public ?string $municipality_key = null;
    public ?string $name = null;
    public ?array $state = null;
    public ?int $state_id = null;
    public ?string $zip_code = null;
}

/** Request payload for State#load. */
class StateLoadMatch
{
    public int $id;
}

/** Request payload for State#list. */
class StateListMatch
{
    public ?int $cities_count = null;
    public ?int $id = null;
    public ?string $municipality_key = null;
    public ?string $name = null;
    public ?array $state = null;
    public ?int $state_id = null;
    public ?string $zip_code = null;
}

/** ZipCode entity data model. */
class ZipCode
{
    public ?string $c_cp = null;
    public ?string $c_cve_ciudad = null;
    public ?string $c_estado = null;
    public ?string $c_mnpio = null;
    public ?string $c_oficina = null;
    public ?string $c_tipo_asenta = null;
    public ?string $d_asenta = null;
    public ?string $d_ciudad = null;
    public ?string $d_codigo = null;
    public ?string $d_cp = null;
    public ?string $d_estado = null;
    public ?string $d_mnpio = null;
    public ?string $d_tipo_asenta = null;
    public ?string $d_zona = null;
    public ?int $id = null;
    public ?string $id_asenta_cpcon = null;
}

/** Request payload for ZipCode#list. */
class ZipCodeListMatch
{
    public ?string $c_cp = null;
    public ?string $c_cve_ciudad = null;
    public ?string $c_estado = null;
    public ?string $c_mnpio = null;
    public ?string $c_oficina = null;
    public ?string $c_tipo_asenta = null;
    public ?string $d_asenta = null;
    public ?string $d_ciudad = null;
    public ?string $d_codigo = null;
    public ?string $d_cp = null;
    public ?string $d_estado = null;
    public ?string $d_mnpio = null;
    public ?string $d_tipo_asenta = null;
    public ?string $d_zona = null;
    public ?int $id = null;
    public ?string $id_asenta_cpcon = null;
}

