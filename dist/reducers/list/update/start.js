"use strict";
const r = require("ramda");
const constants_1 = require("../../../constants");
const invariants_1 = require("../invariants");
const store_1 = require("../store");
var reducerName = constants_1.default.REDUCER_NAMES.UPDATE_START;
function start(config, current, record) {
    invariants_1.default(config, current, record, reducerName);
    // mark record as unsaved and busy
    var recordStatus = {
        busy: true,
        pendingUpdate: true,
    };
    var newRecord = r.merge(record, recordStatus);
    // replace record
    return store_1.default.merge(current, newRecord, config.key);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = start;
