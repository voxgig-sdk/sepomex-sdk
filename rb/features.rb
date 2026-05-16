# Sepomex SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module SepomexFeatures
  def self.make_feature(name)
    case name
    when "base"
      SepomexBaseFeature.new
    when "test"
      SepomexTestFeature.new
    else
      SepomexBaseFeature.new
    end
  end
end
