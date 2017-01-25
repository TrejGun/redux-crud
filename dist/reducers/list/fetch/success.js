"use strict";
const assertAllHaveKeys_1 = require("../../../utils/assertAllHaveKeys");
const constants_1 = require("../../../constants");
const store_1 = require("../store");
const wrapArray_1 = require("../../../utils/wrapArray");
const invariants_1 = require("../invariants");
var reducerName = constants_1.default.REDUCER_NAMES.FETCH_SUCCESS;
var invariantArgs = {
    reducerName,
    canBeArray: true,
};
function success(config, current, records) {
    invariants_1.default(invariantArgs, config, current, records);
    // wrap array
    records = wrapArray_1.default(records);
    // All given records must have a key
    assertAllHaveKeys_1.default(config, reducerName, records);
    return store_1.default.merge(current, records, config.key);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = success;