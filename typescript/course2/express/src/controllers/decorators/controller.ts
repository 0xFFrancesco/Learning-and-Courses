import { RequestHandler, Response, Request, NextFunction } from "express";
import "reflect-metadata";
import { AppRouter } from "../../appRouter";
import { MetadataKeys } from "./MedatadaKeys";
import { Methods } from "./Methods";

function bodyValidators(keys: string[]): RequestHandler {
	return function (req: Request, res: Response, next: NextFunction) {
		if (!req.body) {
			res.status(422).send("Invalid request.");
			return;
		}

		for (let key of keys) {
			if (!req.body[key]) {
				res.status(422).send("Invalid request.");
				return;
			}
		}

		next();
	};
}

export function controller(routePrefix: string) {
	return function (target: Function) {
		const router = AppRouter.getInstance();

		for (let value of Object.getOwnPropertyNames(target.prototype)) {
			const routeHandler = target.prototype[value];

			const path = Reflect.getMetadata(
				MetadataKeys.PATH,
				target.prototype,
				value
			);
			const method: Methods = Reflect.getMetadata(
				MetadataKeys.METHOD,
				target.prototype,
				value
			);
			const middlewares =
				Reflect.getMetadata(
					MetadataKeys.MIDDLEWARE,
					target.prototype,
					value
				) || [];
			const requiredBodyProps =
				Reflect.getMetadata(
					MetadataKeys.VALIDATOR,
					target.prototype,
					value
				) || [];

			const validator = bodyValidators(requiredBodyProps);

			if (path) {
				router[method](
					`${routePrefix}${path}`,
					...middlewares,
					validator,
					routeHandler
				);
			}
		}
	};
}
