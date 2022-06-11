"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = void 0;
require("reflect-metadata");
const MedatadaKeys_1 = require("./MedatadaKeys");
function bodyValidator(...keys) {
    return function (target, key, desc) {
        Reflect.defineMetadata(MedatadaKeys_1.MetadataKeys.VALIDATOR, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
