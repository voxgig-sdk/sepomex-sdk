import { SepomexEntityBase } from '../SepomexEntityBase';
import type { SepomexSDK } from '../SepomexSDK';
import type { Control } from '../types';
import type { State, StateLoadMatch, StateListMatch } from '../SepomexTypes';
declare class StateEntity extends SepomexEntityBase<State> {
    constructor(client: SepomexSDK, entopts: any);
    make(this: StateEntity): StateEntity;
    load(this: any, reqmatch?: StateLoadMatch, ctrl?: Control): Promise<StateEntity>;
    list(this: any, reqmatch?: StateListMatch, ctrl?: Control): Promise<StateEntity[]>;
}
export { StateEntity };
