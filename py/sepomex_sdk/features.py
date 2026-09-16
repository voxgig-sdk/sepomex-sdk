# Sepomex SDK feature factory

from sepomex_sdk.feature.base_feature import SepomexBaseFeature
from sepomex_sdk.feature.ratelimit_feature import SepomexRatelimitFeature
from sepomex_sdk.feature.retry_feature import SepomexRetryFeature
from sepomex_sdk.feature.test_feature import SepomexTestFeature
from sepomex_sdk.feature.timeout_feature import SepomexTimeoutFeature


_FEATURES = {
    "base": lambda: SepomexBaseFeature(),
    "ratelimit": lambda: SepomexRatelimitFeature(),
    "retry": lambda: SepomexRetryFeature(),
    "test": lambda: SepomexTestFeature(),
    "timeout": lambda: SepomexTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
