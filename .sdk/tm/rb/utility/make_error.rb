# Sepomex SDK utility: make_error
require_relative '../core/operation'
require_relative '../core/result'
require_relative '../core/error'
module SepomexUtilities
  MakeError = ->(ctx, err) {
    if ctx.nil?
      require_relative '../core/context'
      ctx = SepomexContext.new({}, nil)
    end
    op = ctx.op || SepomexOperation.new({})
    opname = op.name
    opname = "unknown operation" if opname.empty? || opname == "_"

    result = ctx.result || SepomexResult.new({})
    result.ok = false

    err = result.err if err.nil?
    err = ctx.make_error("unknown", "unknown error") if err.nil?

    errmsg = err.is_a?(SepomexError) ? err.msg : err.to_s
    msg = "SepomexSDK: #{opname}: #{errmsg}"
    msg = ctx.utility.clean.call(ctx, msg)

    result.err = nil
    spec = ctx.spec

    if ctx.ctrl.explain
      ctx.ctrl.explain["err"] = { "message" => msg }
    end

    sdk_err = SepomexError.new("", msg, ctx)
    sdk_err.result = ctx.utility.clean.call(ctx, result)
    sdk_err.spec = ctx.utility.clean.call(ctx, spec)
    sdk_err.code = err.code if err.is_a?(SepomexError)

    ctx.ctrl.err = sdk_err

    if ctx.ctrl.throw_err == false
      return result.resdata, nil
    end
    return nil, sdk_err
  }
end
