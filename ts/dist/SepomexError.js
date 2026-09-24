"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SepomexError = void 0;
class SepomexError extends Error {
    isSepomexError = true;
    sdk = 'Sepomex';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.SepomexError = SepomexError;
//# sourceMappingURL=SepomexError.js.map