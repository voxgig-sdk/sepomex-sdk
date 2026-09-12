import { SepomexEntityBase } from '../SepomexEntityBase';
import type { SepomexSDK } from '../SepomexSDK';
import type { Control } from '../types';
import type { City, CityLoadMatch, CityListMatch } from '../SepomexTypes';
declare class CityEntity extends SepomexEntityBase<City> {
    constructor(client: SepomexSDK, entopts: any);
    make(this: CityEntity): CityEntity;
    load(this: any, reqmatch?: CityLoadMatch, ctrl?: Control): Promise<CityEntity>;
    list(this: any, reqmatch?: CityListMatch, ctrl?: Control): Promise<CityEntity[]>;
}
export { CityEntity };
