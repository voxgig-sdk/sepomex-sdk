import { Context } from './Context';
declare class SepomexError extends Error {
    isSepomexError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { SepomexError };
