

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"c_cp":{"a":true,"h":"C Cp","n":"c_cp","r":false,"sh":"Postal code field","t":"`$STRING`","key$":"c_cp","index$":0},"c_cve_ciudad":{"a":true,"h":"C Cve Ciudad","n":"c_cve_ciudad","r":false,"sh":"City key","t":"`$STRING`","key$":"c_cve_ciudad","index$":1},"c_estado":{"a":true,"h":"C Estado","n":"c_estado","r":false,"sh":"State code","t":"`$STRING`","key$":"c_estado","index$":2},"c_mnpio":{"a":true,"h":"C Mnpio","n":"c_mnpio","r":false,"sh":"Municipality code","t":"`$STRING`","key$":"c_mnpio","index$":3},"c_oficina":{"a":true,"h":"C Oficina","n":"c_oficina","r":false,"sh":"Office code","t":"`$STRING`","key$":"c_oficina","index$":4},"c_tipo_asenta":{"a":true,"h":"C Tipo Asenta","n":"c_tipo_asenta","r":false,"sh":"Settlement type code","t":"`$STRING`","key$":"c_tipo_asenta","index$":5},"d_asenta":{"a":true,"h":"D Asenta","n":"d_asenta","r":false,"sh":"Settlement name (colony)","t":"`$STRING`","key$":"d_asenta","index$":6},"d_ciudad":{"a":true,"h":"D Ciudad","n":"d_ciudad","r":false,"sh":"City name","t":"`$STRING`","key$":"d_ciudad","index$":7},"d_codigo":{"a":true,"h":"D Codigo","n":"d_codigo","r":false,"sh":"Zip code","t":"`$STRING`","key$":"d_codigo","index$":8},"d_cp":{"a":true,"h":"D Cp","n":"d_cp","r":false,"sh":"Postal code","t":"`$STRING`","key$":"d_cp","index$":9},"d_estado":{"a":true,"h":"D Estado","n":"d_estado","r":false,"sh":"State name","t":"`$STRING`","key$":"d_estado","index$":10},"d_mnpio":{"a":true,"h":"D Mnpio","n":"d_mnpio","r":false,"sh":"Municipality name","t":"`$STRING`","key$":"d_mnpio","index$":11},"d_tipo_asenta":{"a":true,"h":"D Tipo Asenta","n":"d_tipo_asenta","r":false,"sh":"Settlement type","t":"`$STRING`","key$":"d_tipo_asenta","index$":12},"d_zona":{"a":true,"h":"D Zona","n":"d_zona","r":false,"sh":"Zone type (Urban/Rural)","t":"`$STRING`","key$":"d_zona","index$":13},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the zip code record","t":"`$INTEGER`","key$":"id","index$":14},"id_asenta_cpcons":{"a":true,"h":"Id Asenta Cpcons","n":"id_asenta_cpcons","r":false,"sh":"Settlement ID","t":"`$STRING`","key$":"id_asenta_cpcons","index$":15}},"id":{"field":"id","name":"id"},"name":"zip_code","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /zip_codes","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"monterrey","k":"query","n":"city","or":"city","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"punta contry","k":"query","n":"colony","or":"colony","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":15,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":"nuevo leon","k":"query","n":"state","or":"state","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"67173","k":"query","n":"zip_code","or":"zip_code","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/zip_codes","q":{"exist":["city","colony","page","per_page","state","zip_code"]},"r":{},"s":[{"lit":"zip_codes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"zip_code","name__orig":"zip_code","Name":"ZipCode","name_":"zip_code","name-":"zip-code","NAME":"ZIP_CODE","index$":3}, {"active":true,"entity":"zip_code","key$":"BasicZipCodeFlow","kind":"basic","name":"BasicZipCodeFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"zip_code_ref01"}}],"index$":0}]}, 'ZipCode', {"GET /zip_codes":{"protocol":"http","operationId":"getZipCodes","responses":{"200":{"description":"Successful response with zip codes list","content":{"application/json":{"schema":{"type":"object","properties":{"zip_codes":{"items":{"properties":{"c_cp":{"description":"Postal code field","nullable":true,"type":"string","key$":"c_cp"},"c_cve_ciudad":{"description":"City key","example":"01","type":"string","key$":"c_cve_ciudad"},"c_estado":{"description":"State code","example":"09","type":"string","key$":"c_estado"},"c_mnpio":{"description":"Municipality code","example":"010","type":"string","key$":"c_mnpio"},"c_oficina":{"description":"Office code","example":"01001","type":"string","key$":"c_oficina"},"c_tipo_asenta":{"description":"Settlement type code","example":"09","type":"string","key$":"c_tipo_asenta"},"d_asenta":{"description":"Settlement name (colony)","example":"San Ángel","type":"string","key$":"d_asenta"},"d_ciudad":{"description":"City name","example":"Ciudad de México","type":"string","key$":"d_ciudad"},"d_codigo":{"description":"Zip code","example":"01000","type":"string","key$":"d_codigo"},"d_cp":{"description":"Postal code","example":"01001","type":"string","key$":"d_cp"},"d_estado":{"description":"State name","example":"Ciudad de México","type":"string","key$":"d_estado"},"d_mnpio":{"description":"Municipality name","example":"Álvaro Obregón","type":"string","key$":"d_mnpio"},"d_tipo_asenta":{"description":"Settlement type","example":"Colonia","type":"string","key$":"d_tipo_asenta"},"d_zona":{"description":"Zone type (Urban/Rural)","example":"Urbano","type":"string","key$":"d_zona"},"id":{"description":"Unique identifier for the zip code record","example":1,"type":"integer","key$":"id"},"id_asenta_cpcons":{"description":"Settlement ID","example":"0001","type":"string","key$":"id_asenta_cpcons"}},"type":"object","x-ref":"#/components/schemas/ZipCode","index$":0},"key$":"zip_codes","type":"array"},"meta":{"key$":"meta","properties":{"pagination":{"properties":{"links":{"properties":{"first":{"description":"URL for the first page","example":"/zip_code?page=1","type":"string"},"last":{"description":"URL for the last page","example":"/zip_code?page=9728","type":"string"},"next":{"description":"URL for the next page","example":"/zip_code?page=2","nullable":true,"type":"string"},"prev":{"description":"URL for the previous page","example":"/zip_code?page=1","nullable":true,"type":"string"}},"type":"object"},"per_page":{"description":"Number of items per page","example":15,"type":"integer"},"total_objects":{"description":"Total number of objects across all pages","example":145906,"type":"integer"},"total_pages":{"description":"Total number of pages","example":9728,"type":"integer"}},"type":"object"}},"type":"object","x-ref":"#/components/schemas/PaginationMeta"}}}}}}},"parameters":[{"name":"page","in":"query","description":"Page number for pagination","required":false,"schema":{"type":"integer","default":1,"minimum":1},"index$":0},{"name":"per_page","in":"query","description":"Number of items per page (max 200)","required":false,"schema":{"type":"integer","default":15,"minimum":1,"maximum":200},"index$":1},{"name":"city","in":"query","description":"Filter by city name","required":false,"schema":{"type":"string"},"example":"monterrey","index$":2},{"name":"state","in":"query","description":"Filter by state name","required":false,"schema":{"type":"string"},"example":"nuevo leon","index$":3},{"name":"colony","in":"query","description":"Filter by colony name","required":false,"schema":{"type":"string"},"example":"punta contry","index$":4},{"name":"zip_code","in":"query","description":"Filter by zip code","required":false,"schema":{"type":"string"},"example":"67173","index$":5}],"securitySource":"unspecified"}})
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
  
