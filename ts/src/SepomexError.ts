
import { Context } from './Context'


class SepomexError extends Error {

  isSepomexError = true

  sdk = 'Sepomex'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  SepomexError
}

