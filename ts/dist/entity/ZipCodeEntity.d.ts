import { SepomexEntityBase } from '../SepomexEntityBase';
import type { SepomexSDK } from '../SepomexSDK';
import type { Control } from '../types';
import type { ZipCode, ZipCodeListMatch } from '../SepomexTypes';
declare class ZipCodeEntity extends SepomexEntityBase<ZipCode> {
    constructor(client: SepomexSDK, entopts: any);
    make(this: ZipCodeEntity): ZipCodeEntity;
    list(this: any, reqmatch?: ZipCodeListMatch, ctrl?: Control): Promise<ZipCodeEntity[]>;
}
export { ZipCodeEntity };
