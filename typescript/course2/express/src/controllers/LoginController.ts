import { Response } from "express";
import { RequestWithBody } from "../routes/loginRoutes";
import { controller } from "./decorators/controller";
import { get } from "./decorators/routes";

@controller("/auth")
class LoginController {
	@get("/login")
	getLogin(req: RequestWithBody, res: Response): void {
		res.send(`
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" />
                </div>
                <button>Submit</button>
            </form>
        `);
	}
}
