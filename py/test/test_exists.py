# ProjectName SDK exists test

import pytest
from sepomex_sdk import SepomexSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = SepomexSDK.test(None, None)
        assert testsdk is not None
