# City entity test

require "minitest/autorun"
require "json"
require_relative "../Sepomex_sdk"
require_relative "runner"

class CityEntityTest < Minitest::Test
  def test_create_instance
    testsdk = SepomexSDK.test(nil, nil)
    ent = testsdk.City(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = city_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "city." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set SEPOMEX_TEST_CITY_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    city_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.city")))
    city_ref01_data = nil
    if city_ref01_data_raw.length > 0
      city_ref01_data = Helpers.to_map(city_ref01_data_raw[0][1])
    end

    # LIST
    city_ref01_ent = client.City(nil)
    city_ref01_match = {}

    city_ref01_list_result, err = city_ref01_ent.list(city_ref01_match, nil)
    assert_nil err
    assert city_ref01_list_result.is_a?(Array)

    # LOAD
    city_ref01_match_dt0 = {
      "id" => city_ref01_data["id"],
    }
    city_ref01_data_dt0_loaded, err = city_ref01_ent.load(city_ref01_match_dt0, nil)
    assert_nil err
    city_ref01_data_dt0_load_result = Helpers.to_map(city_ref01_data_dt0_loaded)
    assert !city_ref01_data_dt0_load_result.nil?
    assert_equal city_ref01_data_dt0_load_result["id"], city_ref01_data["id"]

  end
end

def city_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "city", "CityTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = SepomexSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["city01", "city02", "city03"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["SEPOMEX_TEST_CITY_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "SEPOMEX_TEST_CITY_ENTID" => idmap,
    "SEPOMEX_TEST_LIVE" => "FALSE",
    "SEPOMEX_TEST_EXPLAIN" => "FALSE",
    "SEPOMEX_APIKEY" => "NONE",
  })

  idmap_resolved = Helpers.to_map(
    env["SEPOMEX_TEST_CITY_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["SEPOMEX_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
        "apikey" => env["SEPOMEX_APIKEY"],
      },
      extra || {},
    ])
    client = SepomexSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["SEPOMEX_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["SEPOMEX_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
