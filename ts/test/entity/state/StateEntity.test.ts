

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


describe('StateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when SEPOMEX_TEST_LIVE=TRUE.
  afterEach(liveDelay('SEPOMEX_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = SepomexSDK.test()
    const ent = testsdk.State()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.SEPOMEX_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'state.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cities_count":{"a":true,"h":"Cities Count","n":"cities_count","r":false,"sh":"Number of cities in the state","t":"`$INTEGER`","key$":"cities_count","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the state","t":"`$INTEGER`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"State name","t":"`$STRING`","key$":"name","index$":2}},"id":{"field":"id","name":"id"},"name":"state","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /states","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":15,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/states","q":{"exist":["page","per_page"]},"r":{},"s":[{"lit":"states"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /states/{id}/municipalities","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/states/{id}/municipalities","q":{"$action":"municipality","exist":["id"]},"r":{},"s":[{"lit":"states"},{"var":"id"},{"lit":"municipalities"}],"t":{"req":"`reqdata`","res":"`body.municipalities`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /states/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$INTEGER`","index$":0}]},"k":"http","m":"GET","o":"/states/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"states"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.state`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"state","name__orig":"state","Name":"State","name_":"state","name-":"state","NAME":"STATE","index$":2}, {"active":true,"entity":"state","key$":"BasicStateFlow","kind":"basic","name":"BasicStateFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"state_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"state_ref01","srcdatavar":"state_ref01_data","suffix":"_dt0"},"m":{"id":"state01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-state_ref01"}}],"index$":1}]}, 'State', {"GET /states":{"protocol":"http","operationId":"getStates","responses":{"200":{"description":"Successful response with states list","content":{"application/json":{"schema":{"type":"object","properties":{"states":{"items":{"properties":{"cities_count":{"description":"Number of cities in the state","example":16,"type":"integer","key$":"cities_count"},"id":{"description":"Unique identifier for the state","example":1,"type":"integer","key$":"id"},"name":{"description":"State name","example":"Ciudad de México","type":"string","key$":"name"}},"type":"object","x-ref":"#/components/schemas/State","index$":0},"key$":"states","type":"array"},"meta":{"key$":"meta","properties":{"pagination":{"properties":{"links":{"properties":{"first":{"description":"URL for the first page","example":"/zip_code?page=1","type":"string"},"last":{"description":"URL for the last page","example":"/zip_code?page=9728","type":"string"},"next":{"description":"URL for the next page","example":"/zip_code?page=2","nullable":true,"type":"string"},"prev":{"description":"URL for the previous page","example":"/zip_code?page=1","nullable":true,"type":"string"}},"type":"object"},"per_page":{"description":"Number of items per page","example":15,"type":"integer"},"total_objects":{"description":"Total number of objects across all pages","example":145906,"type":"integer"},"total_pages":{"description":"Total number of pages","example":9728,"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/PaginationMeta"}}}}}}},"parameters":[{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","default":1,"minimum":1},"index$":0},{"name":"per_page","in":"query","description":"Number of items per page (max 200)","required":false,"schema":{"type":"integer","default":15,"minimum":1,"maximum":200},"index$":1}],"securitySource":"unspecified"},"GET /states/{id}/municipalities":{"protocol":"http","operationId":"getMunicipalitiesByState","responses":{"200":{"description":"Successful response with municipalities list","content":{"application/json":{"schema":{"type":"object","properties":{"municipalities":{"items":{"properties":{"id":{"description":"Unique identifier for the municipality","example":1,"type":"integer"},"municipality_key":{"description":"Municipality key code","example":"010","type":"string"},"name":{"description":"Municipality name","example":"Álvaro Obregón","type":"string"},"state_id":{"description":"ID of the state this municipality belongs to","example":1,"type":"integer"},"zip_code":{"description":"Representative zip code for the municipality","example":"01001","type":"string"}},"type":"object","x-ref":"#/components/schemas/Municipality"},"key$":"municipalities","type":"array"}}}}}},"404":{"description":"State not found"}},"parameters":[{"name":"id","in":"path","description":"State ID","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"},"GET /states/{id}":{"protocol":"http","operationId":"getStateById","responses":{"200":{"description":"Successful response with state details","content":{"application/json":{"schema":{"type":"object","properties":{"state":{"type":"object","properties":{"id":{"description":"Unique identifier for the state","example":1,"type":"integer","key$":"id"},"name":{"description":"State name","example":"Ciudad de México","type":"string","key$":"name"},"cities_count":{"description":"Number of cities in the state","example":16,"type":"integer","key$":"cities_count"}},"x-ref":"#/components/schemas/State","index$":0}}}}}},"404":{"description":"State not found"}},"parameters":[{"name":"id","in":"path","description":"State ID","required":true,"schema":{"type":"integer"},"index$":0}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let state_ref01_data = Object.values(setup.data.existing.state)[0] as any

    // LIST
    const state_ref01_ent = client.State()
    const state_ref01_match: any = {}

    const state_ref01_list = (await state_ref01_ent.list(state_ref01_match)).map((e: any) => e.data())


    // LOAD
    const state_ref01_match_dt0: any = {}
    state_ref01_match_dt0.id = state_ref01_data.id
    const state_ref01_data_dt0 = (await state_ref01_ent.load(state_ref01_match_dt0)).data()
    assert(state_ref01_data_dt0.id === state_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/state/StateTestData.json')

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
    ['state01','state02','state03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'SEPOMEX_TEST_STATE_ENTID': idmap,
    'SEPOMEX_TEST_LIVE': 'FALSE',
    'SEPOMEX_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['SEPOMEX_TEST_STATE_ENTID']

  const live = 'TRUE' === env.SEPOMEX_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['SEPOMEX_TEST_STATE_ENTID']
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
  
