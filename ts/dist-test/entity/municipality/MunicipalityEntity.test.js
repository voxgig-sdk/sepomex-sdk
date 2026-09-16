"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('MunicipalityEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when SEPOMEX_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('SEPOMEX_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.SepomexSDK.test();
        const ent = testsdk.Municipality();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.SEPOMEX_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'municipality.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "short": "Unique identifier for the municipality", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "municipality_key", "req": false, "short": "Municipality key code", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "name", "req": false, "short": "Municipality name", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "state_id", "req": false, "short": "ID of the state this municipality belongs to", "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "zip_code", "req": false, "short": "Representative zip code for the municipality", "type": "`$STRING`", "index$": 4 }], "id": { "field": "id", "name": "id" }, "name": "municipality", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 15, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /municipalities", "json": "{\"operationId\":\"getMunicipalities\",\"parameters\":[{\"description\":\"Page number for pagination\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Number of items per page (max 200)\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"schema\":{\"default\":15,\"maximum\":200,\"minimum\":1,\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"meta\":{\"properties\":{\"pagination\":{\"properties\":{\"links\":{\"properties\":{\"first\":{\"description\":\"URL for the first page\",\"example\":\"/zip_code?page=1\",\"type\":\"string\"},\"last\":{\"description\":\"URL for the last page\",\"example\":\"/zip_code?page=9728\",\"type\":\"string\"},\"next\":{\"description\":\"URL for the next page\",\"example\":\"/zip_code?page=2\",\"nullable\":true,\"type\":\"string\"},\"prev\":{\"description\":\"URL for the previous page\",\"example\":\"/zip_code?page=1\",\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"per_page\":{\"description\":\"Number of items per page\",\"example\":15,\"type\":\"integer\"},\"total_objects\":{\"description\":\"Total number of objects across all pages\",\"example\":145906,\"type\":\"integer\"},\"total_pages\":{\"description\":\"Total number of pages\",\"example\":9728,\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"},\"municipalities\":{\"items\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the municipality\",\"example\":1,\"type\":\"integer\"},\"municipality_key\":{\"description\":\"Municipality key code\",\"example\":\"010\",\"type\":\"string\"},\"name\":{\"description\":\"Municipality name\",\"example\":\"Álvaro Obregón\",\"type\":\"string\"},\"state_id\":{\"description\":\"ID of the state this municipality belongs to\",\"example\":1,\"type\":\"integer\"},\"zip_code\":{\"description\":\"Representative zip code for the municipality\",\"example\":\"01001\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with municipalities list\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/municipalities", "segments": [{ "lit": "municipalities" }], "select": { "exist": ["page", "per_page"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /municipalities/{id}", "json": "{\"operationId\":\"getMunicipalityById\",\"parameters\":[{\"description\":\"Municipality ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"municipality\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the municipality\",\"example\":1,\"type\":\"integer\"},\"municipality_key\":{\"description\":\"Municipality key code\",\"example\":\"010\",\"type\":\"string\"},\"name\":{\"description\":\"Municipality name\",\"example\":\"Álvaro Obregón\",\"type\":\"string\"},\"state_id\":{\"description\":\"ID of the state this municipality belongs to\",\"example\":1,\"type\":\"integer\"},\"zip_code\":{\"description\":\"Representative zip code for the municipality\",\"example\":\"01001\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with municipality details\"},\"404\":{\"description\":\"Municipality not found\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/municipalities/{id}", "segments": [{ "lit": "municipalities" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body.municipality`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "municipality", "name__orig": "municipality", "Name": "Municipality", "name_": "municipality", "name-": "municipality", "NAME": "MUNICIPALITY", "index$": 1 }, { "active": true, "entity": "municipality", "key$": "BasicMunicipalityFlow", "kind": "basic", "name": "BasicMunicipalityFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "municipality_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "municipality_ref01", "srcdatavar": "municipality_ref01_data", "suffix": "_dt0" }, "match": { "id": "municipality01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-municipality_ref01" } }], "index$": 1 }] }, 'Municipality');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let municipality_ref01_data = Object.values(setup.data.existing.municipality)[0];
        // LIST
        const municipality_ref01_ent = client.Municipality();
        const municipality_ref01_match = {};
        const municipality_ref01_list = (await municipality_ref01_ent.list(municipality_ref01_match)).map((e) => e.data());
        // LOAD
        const municipality_ref01_match_dt0 = {};
        municipality_ref01_match_dt0.id = municipality_ref01_data.id;
        const municipality_ref01_data_dt0 = (await municipality_ref01_ent.load(municipality_ref01_match_dt0)).data();
        (0, node_assert_1.default)(municipality_ref01_data_dt0.id === municipality_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/municipality/MunicipalityTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.SepomexSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['municipality01', 'municipality02', 'municipality03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'SEPOMEX_TEST_MUNICIPALITY_ENTID': idmap,
        'SEPOMEX_TEST_LIVE': 'FALSE',
        'SEPOMEX_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['SEPOMEX_TEST_MUNICIPALITY_ENTID'];
    const live = 'TRUE' === env.SEPOMEX_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['SEPOMEX_TEST_MUNICIPALITY_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.SepomexSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=MunicipalityEntity.test.js.map