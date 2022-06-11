"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
const MedatadaKeys_1 = require("./MedatadaKeys");
function use(middleware) {
    return function (target, key, desc) {
        const middlewares = Reflect.getMetadata(MedatadaKeys_1.MetadataKeys.MIDDLEWARE, target, key) || [];
        Reflect.defineMetadata(MedatadaKeys_1.MetadataKeys.MIDDLEWARE, [...middlewares, middleware], target, key);
    };
}
exports.use = use;
