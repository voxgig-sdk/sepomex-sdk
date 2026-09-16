# Sepomex SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module SepomexFeatures
  def self.make_feature(name)
    case name
    when "base"
      SepomexBaseFeature.new
    when "ratelimit"
      SepomexRatelimitFeature.new
    when "retry"
      SepomexRetryFeature.new
    when "test"
      SepomexTestFeature.new
    when "timeout"
      SepomexTimeoutFeature.new
    else
      SepomexBaseFeature.new
    end
  end
end
