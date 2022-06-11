import "reflect-metadata";
import express from "express";

export const router = express.Router();

export function controller(routePrefix: string) {
	return function (target: Function) {
		for (let value of Object.getOwnPropertyNames(target.prototype)) {
			const routeHandler = target.prototype[value];
			const path = Reflect.getMetadata("path", target.prototype, value);

			if (path) {
				router.get(`${routePrefix}${path}`, routeHandler);
			}
		}
	};
}
