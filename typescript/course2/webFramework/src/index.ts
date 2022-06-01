import { User } from "./models/User";

const user = new User({ name: "John", age: 20 });
user.on("change", () => console.log("is changed!"));
console.log(user);

user.trigger("change");
