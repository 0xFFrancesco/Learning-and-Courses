import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User();
const company = new Company();

const customMap = new CustomMap("map");
customMap.addMarker(company);
customMap.addMarker(user);
