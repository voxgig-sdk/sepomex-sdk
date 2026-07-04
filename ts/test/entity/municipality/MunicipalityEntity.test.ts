
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { SepomexSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('MunicipalityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SEPOMEX_TEST_LIVE=TRUE.
  afterEach(liveDelay('SEPOMEX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SepomexSDK.test()
    const ent = testsdk.Municipality()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SEPOMEX_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'municipality.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set SEPOMEX_TEST_MUNICIPALITY_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let municipality_ref01_data = Object.values(setup.data.existing.municipality)[0] as any

    // LIST
    const municipality_ref01_ent = client.Municipality()
    const municipality_ref01_match: any = {}

    const municipality_ref01_list = await municipality_ref01_ent.list(municipality_ref01_match)


    // LOAD
    const municipality_ref01_match_dt0: any = {}
    municipality_ref01_match_dt0.id = municipality_ref01_data.id
    const municipality_ref01_data_dt0 = await municipality_ref01_ent.load(municipality_ref01_match_dt0)
    assert(municipality_ref01_data_dt0.id === municipality_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/municipality/MunicipalityTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = SepomexSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['municipality01','municipality02','municipality03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['SEPOMEX_TEST_MUNICIPALITY_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'SEPOMEX_TEST_MUNICIPALITY_ENTID': idmap,
    'SEPOMEX_TEST_LIVE': 'FALSE',
    'SEPOMEX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SEPOMEX_TEST_MUNICIPALITY_ENTID']

  const live = 'TRUE' === env.SEPOMEX_TEST_LIVE

  if (live) {
    client = new SepomexSDK(merge([
      {
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.SEPOMEX_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
