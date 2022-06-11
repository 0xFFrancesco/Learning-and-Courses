import { NextFunction, Response, Request } from "express";
import { controller, get, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
	if (req.session?.loggedIn) {
		next();
		return;
	} else {
		res.status(403);
		res.send("Not allowed.");
	}
}

@controller("")
class RootControllet {
	@get("/")
	getRoot(req: Request, res: Response) {
		if (req.session?.loggedIn) {
			res.send(`
            <div>
                <div>You are logged in.</div>
                <a href="/auth/logout">Logout</a>
            </div>
        `);
		} else {
			res.send(`
            <div>
                <div>You are not logged in.</div>
                <a href="/auth/login">Login</a>
            </div>
        `);
		}
	}

	@get("/protected")
	@use(requireAuth)
	getProtected(req: Request, res: Response) {
		res.send(`You have accessed a protected route!`);
	}
}
