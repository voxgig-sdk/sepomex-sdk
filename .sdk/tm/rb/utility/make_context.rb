# Sepomex SDK utility: make_context
require_relative '../core/context'
module SepomexUtilities
  MakeContext = ->(ctxmap, basectx) {
    SepomexContext.new(ctxmap, basectx)
  }
end
