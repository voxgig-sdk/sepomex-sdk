import { CityEntity } from './entity/CityEntity';
import { MunicipalityEntity } from './entity/MunicipalityEntity';
import { StateEntity } from './entity/StateEntity';
import { ZipCodeEntity } from './entity/ZipCodeEntity';
export type * from './SepomexTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { SepomexEntityBase } from './SepomexEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class SepomexSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    City(entopts?: Record<string, any>): CityEntity;
    Municipality(entopts?: Record<string, any>): MunicipalityEntity;
    State(entopts?: Record<string, any>): StateEntity;
    ZipCode(entopts?: Record<string, any>): ZipCodeEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): SepomexSDK;
    tester(testopts?: any, sdkopts?: any): SepomexSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof SepomexSDK;
export { stdutil, config, BaseFeature, SepomexEntityBase, SepomexSDK, SDK, };
