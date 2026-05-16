# Sepomex SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

SepomexUtility.registrar = ->(u) {
  u.clean = SepomexUtilities::Clean
  u.done = SepomexUtilities::Done
  u.make_error = SepomexUtilities::MakeError
  u.feature_add = SepomexUtilities::FeatureAdd
  u.feature_hook = SepomexUtilities::FeatureHook
  u.feature_init = SepomexUtilities::FeatureInit
  u.fetcher = SepomexUtilities::Fetcher
  u.make_fetch_def = SepomexUtilities::MakeFetchDef
  u.make_context = SepomexUtilities::MakeContext
  u.make_options = SepomexUtilities::MakeOptions
  u.make_request = SepomexUtilities::MakeRequest
  u.make_response = SepomexUtilities::MakeResponse
  u.make_result = SepomexUtilities::MakeResult
  u.make_point = SepomexUtilities::MakePoint
  u.make_spec = SepomexUtilities::MakeSpec
  u.make_url = SepomexUtilities::MakeUrl
  u.param = SepomexUtilities::Param
  u.prepare_auth = SepomexUtilities::PrepareAuth
  u.prepare_body = SepomexUtilities::PrepareBody
  u.prepare_headers = SepomexUtilities::PrepareHeaders
  u.prepare_method = SepomexUtilities::PrepareMethod
  u.prepare_params = SepomexUtilities::PrepareParams
  u.prepare_path = SepomexUtilities::PreparePath
  u.prepare_query = SepomexUtilities::PrepareQuery
  u.result_basic = SepomexUtilities::ResultBasic
  u.result_body = SepomexUtilities::ResultBody
  u.result_headers = SepomexUtilities::ResultHeaders
  u.transform_request = SepomexUtilities::TransformRequest
  u.transform_response = SepomexUtilities::TransformResponse
}
