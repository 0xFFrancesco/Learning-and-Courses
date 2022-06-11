"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const appRouter_1 = require("../../appRouter");
const MedatadaKeys_1 = require("./MedatadaKeys");
function bodyValidators(keys) {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send("Invalid request.");
            return;
        }
        for (let key of keys) {
            if (!req.body[key]) {
                res.status(422).send(`Missing property ${key}.`);
                return;
            }
        }
        next();
    };
}
function controller(routePrefix) {
    return function (target) {
        const router = appRouter_1.AppRouter.getInstance();
        for (let value of Object.getOwnPropertyNames(target.prototype)) {
            const routeHandler = target.prototype[value];
            const path = Reflect.getMetadata(MedatadaKeys_1.MetadataKeys.PATH, target.prototype, value);
            const method = Reflect.getMetadata(MedatadaKeys_1.MetadataKeys.METHOD, target.prototype, value);
            const middlewares = Reflect.getMetadata(MedatadaKeys_1.MetadataKeys.MIDDLEWARE, target.prototype, value) || [];
            const requiredBodyProps = Reflect.getMetadata(MedatadaKeys_1.MetadataKeys.VALIDATOR, target.prototype, value) || [];
            const validator = bodyValidators(requiredBodyProps);
            if (path) {
                router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
            }
        }
    };
}
exports.controller = controller;
