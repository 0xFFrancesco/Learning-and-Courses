"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.patch = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
const MedatadaKeys_1 = require("./MedatadaKeys");
const Methods_1 = require("./Methods");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MedatadaKeys_1.MetadataKeys.PATH, path, target, key);
            Reflect.defineMetadata(MedatadaKeys_1.MetadataKeys.METHOD, method, target, key);
        };
    };
}
exports.get = routeBinder(Methods_1.Methods.GET);
exports.put = routeBinder(Methods_1.Methods.PUT);
exports.post = routeBinder(Methods_1.Methods.POST);
exports.patch = routeBinder(Methods_1.Methods.PATCH);
exports.del = routeBinder(Methods_1.Methods.DELETE);
