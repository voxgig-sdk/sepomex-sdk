# Sepomex SDK feature factory

from feature.base_feature import SepomexBaseFeature
from feature.test_feature import SepomexTestFeature


def _make_feature(name):
    features = {
        "base": lambda: SepomexBaseFeature(),
        "test": lambda: SepomexTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
