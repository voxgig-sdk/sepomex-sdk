

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { SepomexSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ZipCodeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SEPOMEX_TEST_LIVE=TRUE.
  afterEach(liveDelay('SEPOMEX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SepomexSDK.test()
    const ent = testsdk.ZipCode()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SEPOMEX_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'zip_code.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"c_cp","req":false,"short":"Postal code field","type":"`$STRING`","index$":0},{"active":true,"name":"c_cve_ciudad","req":false,"short":"City key","type":"`$STRING`","index$":1},{"active":true,"name":"c_estado","req":false,"short":"State code","type":"`$STRING`","index$":2},{"active":true,"name":"c_mnpio","req":false,"short":"Municipality code","type":"`$STRING`","index$":3},{"active":true,"name":"c_oficina","req":false,"short":"Office code","type":"`$STRING`","index$":4},{"active":true,"name":"c_tipo_asenta","req":false,"short":"Settlement type code","type":"`$STRING`","index$":5},{"active":true,"name":"d_asenta","req":false,"short":"Settlement name (colony)","type":"`$STRING`","index$":6},{"active":true,"name":"d_ciudad","req":false,"short":"City name","type":"`$STRING`","index$":7},{"active":true,"name":"d_codigo","req":false,"short":"Zip code","type":"`$STRING`","index$":8},{"active":true,"name":"d_cp","req":false,"short":"Postal code","type":"`$STRING`","index$":9},{"active":true,"name":"d_estado","req":false,"short":"State name","type":"`$STRING`","index$":10},{"active":true,"name":"d_mnpio","req":false,"short":"Municipality name","type":"`$STRING`","index$":11},{"active":true,"name":"d_tipo_asenta","req":false,"short":"Settlement type","type":"`$STRING`","index$":12},{"active":true,"name":"d_zona","req":false,"short":"Zone type (Urban/Rural)","type":"`$STRING`","index$":13},{"active":true,"name":"id","req":false,"short":"Unique identifier for the zip code record","type":"`$INTEGER`","index$":14},{"active":true,"name":"id_asenta_cpcons","req":false,"short":"Settlement ID","type":"`$STRING`","index$":15}],"id":{"field":"id","name":"id"},"name":"zip_code","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"monterrey","kind":"query","name":"city","orig":"city","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"punta contry","kind":"query","name":"colony","orig":"colony","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":15,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"example":"nuevo leon","kind":"query","name":"state","orig":"state","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"example":"67173","kind":"query","name":"zip_code","orig":"zip_code","reqd":false,"type":"`$STRING`","index$":5}]},"contract":{"id":"GET /zip_codes","json":"{\"operationId\":\"getZipCodes\",\"parameters\":[{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of items per page (max 200)\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"schema\":{\"default\":15,\"maximum\":200,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter by city name\",\"example\":\"monterrey\",\"in\":\"query\",\"name\":\"city\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by state name\",\"example\":\"nuevo leon\",\"in\":\"query\",\"name\":\"state\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by colony name\",\"example\":\"punta contry\",\"in\":\"query\",\"name\":\"colony\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by zip code\",\"example\":\"67173\",\"in\":\"query\",\"name\":\"zip_code\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"meta\":{\"properties\":{\"pagination\":{\"properties\":{\"links\":{\"properties\":{\"first\":{\"description\":\"URL for the first page\",\"example\":\"/zip_code?page=1\",\"type\":\"string\"},\"last\":{\"description\":\"URL for the last page\",\"example\":\"/zip_code?page=9728\",\"type\":\"string\"},\"next\":{\"description\":\"URL for the next page\",\"example\":\"/zip_code?page=2\",\"nullable\":true,\"type\":\"string\"},\"prev\":{\"description\":\"URL for the previous page\",\"example\":\"/zip_code?page=1\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"per_page\":{\"description\":\"Number of items per page\",\"example\":15,\"type\":\"integer\"},\"total_objects\":{\"description\":\"Total number of objects across all pages\",\"example\":145906,\"type\":\"integer\"},\"total_pages\":{\"description\":\"Total number of pages\",\"example\":9728,\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"},\"zip_codes\":{\"items\":{\"properties\":{\"c_cp\":{\"description\":\"Postal code field\",\"nullable\":true,\"type\":\"string\"},\"c_cve_ciudad\":{\"description\":\"City key\",\"example\":\"01\",\"type\":\"string\"},\"c_estado\":{\"description\":\"State code\",\"example\":\"09\",\"type\":\"string\"},\"c_mnpio\":{\"description\":\"Municipality code\",\"example\":\"010\",\"type\":\"string\"},\"c_oficina\":{\"description\":\"Office code\",\"example\":\"01001\",\"type\":\"string\"},\"c_tipo_asenta\":{\"description\":\"Settlement type code\",\"example\":\"09\",\"type\":\"string\"},\"d_asenta\":{\"description\":\"Settlement name (colony)\",\"example\":\"San Ángel\",\"type\":\"string\"},\"d_ciudad\":{\"description\":\"City name\",\"example\":\"Ciudad de México\",\"type\":\"string\"},\"d_codigo\":{\"description\":\"Zip code\",\"example\":\"01000\",\"type\":\"string\"},\"d_cp\":{\"description\":\"Postal code\",\"example\":\"01001\",\"type\":\"string\"},\"d_estado\":{\"description\":\"State name\",\"example\":\"Ciudad de México\",\"type\":\"string\"},\"d_mnpio\":{\"description\":\"Municipality name\",\"example\":\"Álvaro Obregón\",\"type\":\"string\"},\"d_tipo_asenta\":{\"description\":\"Settlement type\",\"example\":\"Colonia\",\"type\":\"string\"},\"d_zona\":{\"description\":\"Zone type (Urban/Rural)\",\"example\":\"Urbano\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the zip code record\",\"example\":1,\"type\":\"integer\"},\"id_asenta_cpcons\":{\"description\":\"Settlement ID\",\"example\":\"0001\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with zip codes list\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/zip_codes","segments":[{"lit":"zip_codes"}],"select":{"exist":["city","colony","page","per_page","state","zip_code"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"zip_code","name__orig":"zip_code","Name":"ZipCode","name_":"zip_code","name-":"zip-code","NAME":"ZIP_CODE","index$":3}, {"active":true,"entity":"zip_code","key$":"BasicZipCodeFlow","kind":"basic","name":"BasicZipCodeFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"zip_code_ref01"}}],"index$":0}]}, 'ZipCode')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let zip_code_ref01_data = Object.values(setup.data.existing.zip_code)[0] as any

    // LIST
    const zip_code_ref01_ent = client.ZipCode()
    const zip_code_ref01_match: any = {}

    const zip_code_ref01_list = (await zip_code_ref01_ent.list(zip_code_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/zip_code/ZipCodeTestData.json')

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
    ['zip_code01','zip_code02','zip_code03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SEPOMEX_TEST_ZIP_CODE_ENTID': idmap,
    'SEPOMEX_TEST_LIVE': 'FALSE',
    'SEPOMEX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SEPOMEX_TEST_ZIP_CODE_ENTID']

  const live = 'TRUE' === env.SEPOMEX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SEPOMEX_TEST_ZIP_CODE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new SepomexSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  
