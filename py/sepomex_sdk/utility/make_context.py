# Sepomex SDK utility: make_context

from sepomex_sdk.core.context import SepomexContext


def make_context_util(ctxmap, basectx):
    return SepomexContext(ctxmap, basectx)
