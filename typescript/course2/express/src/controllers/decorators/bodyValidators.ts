import "reflect-metadata";
import { MetadataKeys } from "./MedatadaKeys";

export function bodyValidator(...keys: string[]) {
	return function (target: any, key: string, desc: PropertyDescriptor): void {
		Reflect.defineMetadata(MetadataKeys.VALIDATOR, keys, target, key);
	};
}
