

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('CityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SEPOMEX_TEST_LIVE=TRUE.
  afterEach(liveDelay('SEPOMEX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SepomexSDK.test()
    const ent = testsdk.City()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SEPOMEX_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'city.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the city","t":"`$INTEGER`","key$":"id","index$":0},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"City name","t":"`$STRING`","key$":"name","index$":1},"state_id":{"a":true,"h":"State Id","n":"state_id","r":false,"sh":"ID of the state this city belongs to","t":"`$INTEGER`","key$":"state_id","index$":2}},"id":{"field":"id","name":"id"},"name":"city","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /cities","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":15,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/cities","q":{"exist":["page","per_page"]},"r":{},"s":[{"lit":"cities"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /cities/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/cities/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"cities"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.city`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"city","name__orig":"city","Name":"City","name_":"city","name-":"city","NAME":"CITY","index$":0}, {"active":true,"entity":"city","key$":"BasicCityFlow","kind":"basic","name":"BasicCityFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"city_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"city_ref01","srcdatavar":"city_ref01_data","suffix":"_dt0"},"m":{"id":"city01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-city_ref01"}}],"index$":1}]}, 'City', {"GET /cities":{"protocol":"http","operationId":"getCities","responses":{"200":{"description":"Successful response with cities list","content":{"application/json":{"schema":{"type":"object","properties":{"cities":{"items":{"properties":{"id":{"description":"Unique identifier for the city","example":1,"type":"integer","key$":"id"},"name":{"description":"City name","example":"Ciudad de México","type":"string","key$":"name"},"state_id":{"description":"ID of the state this city belongs to","example":1,"type":"integer","key$":"state_id"}},"type":"object","x-ref":"#/components/schemas/City","index$":0},"key$":"cities","type":"array"},"meta":{"key$":"meta","properties":{"pagination":{"properties":{"links":{"properties":{"first":{"description":"URL for the first page","example":"/zip_code?page=1","type":"string"},"last":{"description":"URL for the last page","example":"/zip_code?page=9728","type":"string"},"next":{"description":"URL for the next page","example":"/zip_code?page=2","nullable":true,"type":"string"},"prev":{"description":"URL for the previous page","example":"/zip_code?page=1","nullable":true,"type":"string"}},"type":"object"},"per_page":{"description":"Number of items per page","example":15,"type":"integer"},"total_objects":{"description":"Total number of objects across all pages","example":145906,"type":"integer"},"total_pages":{"description":"Total number of pages","example":9728,"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/PaginationMeta"}}}}}}},"parameters":[{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","default":1,"minimum":1},"index$":0},{"name":"per_page","in":"query","description":"Number of items per page (max 200)","required":false,"schema":{"type":"integer","default":15,"minimum":1,"maximum":200},"index$":1}],"securitySource":"unspecified"},"GET /cities/{id}":{"protocol":"http","operationId":"getCityById","responses":{"200":{"description":"Successful response with city details","content":{"application/json":{"schema":{"type":"object","properties":{"city":{"type":"object","properties":{"id":{"description":"Unique identifier for the city","example":1,"type":"integer","key$":"id"},"name":{"description":"City name","example":"Ciudad de México","type":"string","key$":"name"},"state_id":{"description":"ID of the state this city belongs to","example":1,"type":"integer","key$":"state_id"}},"x-ref":"#/components/schemas/City","index$":0}}}}}},"404":{"description":"City not found"}},"parameters":[{"name":"id","in":"path","description":"City ID","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let city_ref01_data = Object.values(setup.data.existing.city)[0] as any

    // LIST
    const city_ref01_ent = client.City()
    const city_ref01_match: any = {}

    const city_ref01_list = (await city_ref01_ent.list(city_ref01_match)).map((e: any) => e.data())


    // LOAD
    const city_ref01_match_dt0: any = {}
    city_ref01_match_dt0.id = city_ref01_data.id
    const city_ref01_data_dt0 = (await city_ref01_ent.load(city_ref01_match_dt0)).data()
    assert(city_ref01_data_dt0.id === city_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/city/CityTestData.json')

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
    ['city01','city02','city03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SEPOMEX_TEST_CITY_ENTID': idmap,
    'SEPOMEX_TEST_LIVE': 'FALSE',
    'SEPOMEX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SEPOMEX_TEST_CITY_ENTID']

  const live = 'TRUE' === env.SEPOMEX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SEPOMEX_TEST_CITY_ENTID']
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
  
