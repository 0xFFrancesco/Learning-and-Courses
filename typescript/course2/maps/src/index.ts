/// <reference types="@types/google.maps" />

import { Company } from "./Company";
import { User } from "./User";

const user = new User();
const company = new Company();

const map = new google.maps.Map(document.getElementById("MAP"), {
	zoom: 1,
	center: user.location,
});
