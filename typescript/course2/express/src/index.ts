import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import { router } from "./routes/loginRoutes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["asdqwezxc"] }));
app.use(router);

app.listen(3000, () => {
	console.log("Listening on port 3000.");
});
