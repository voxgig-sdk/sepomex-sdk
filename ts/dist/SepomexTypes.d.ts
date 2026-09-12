export interface City {
    id?: number;
    name?: string;
    state_id?: number;
}
export interface CityLoadMatch {
    id: number;
}
export interface CityListMatch {
    page?: number;
    per_page?: number;
}
export interface Municipality {
    id?: number;
    municipality_key?: string;
    name?: string;
    state_id?: number;
    zip_code?: string;
}
export interface MunicipalityLoadMatch {
    id: number;
}
export interface MunicipalityListMatch {
    page?: number;
    per_page?: number;
}
export interface State {
    cities_count?: number;
    id?: number;
    municipality_key?: string;
    name?: string;
    state_id?: number;
    zip_code?: string;
}
export interface StateLoadMatch {
    id: number;
}
export interface StateListMatch {
    page?: number;
    per_page?: number;
    $action?: string;
    [action: string]: any;
}
export interface ZipCode {
    c_cp?: string;
    c_cve_ciudad?: string;
    c_estado?: string;
    c_mnpio?: string;
    c_oficina?: string;
    c_tipo_asenta?: string;
    d_asenta?: string;
    d_ciudad?: string;
    d_codigo?: string;
    d_cp?: string;
    d_estado?: string;
    d_mnpio?: string;
    d_tipo_asenta?: string;
    d_zona?: string;
    id?: number;
    id_asenta_cpcons?: string;
}
export interface ZipCodeListMatch {
    city?: string;
    colony?: string;
    page?: number;
    per_page?: number;
    state?: string;
    zip_code?: string;
}
