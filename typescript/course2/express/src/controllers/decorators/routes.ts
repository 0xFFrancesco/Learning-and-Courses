import "reflect-metadata";
import { MetadataKeys } from "./MedatadaKeys";
import { Methods } from "./Methods";

function routeBinder(method: string) {
	return function (path: string) {
		return function (target: any, key: string, desc: PropertyDescriptor) {
			Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
			Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
		};
	};
}

export const get = routeBinder(Methods.GET);
export const put = routeBinder(Methods.PUT);
export const post = routeBinder(Methods.POST);
export const patch = routeBinder(Methods.PATCH);
export const del = routeBinder(Methods.DELETE);
