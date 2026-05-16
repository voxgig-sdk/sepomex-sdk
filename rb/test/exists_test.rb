# Sepomex SDK exists test

require "minitest/autorun"
require_relative "../Sepomex_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = SepomexSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
