import { SepomexEntityBase } from '../SepomexEntityBase';
import type { SepomexSDK } from '../SepomexSDK';
import type { Control } from '../types';
import type { Municipality, MunicipalityLoadMatch, MunicipalityListMatch } from '../SepomexTypes';
declare class MunicipalityEntity extends SepomexEntityBase<Municipality> {
    constructor(client: SepomexSDK, entopts: any);
    make(this: MunicipalityEntity): MunicipalityEntity;
    load(this: any, reqmatch?: MunicipalityLoadMatch, ctrl?: Control): Promise<MunicipalityEntity>;
    list(this: any, reqmatch?: MunicipalityListMatch, ctrl?: Control): Promise<MunicipalityEntity[]>;
}
export { MunicipalityEntity };
