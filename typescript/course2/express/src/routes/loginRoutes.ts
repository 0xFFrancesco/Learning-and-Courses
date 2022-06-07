import { NextFunction, Request, Response, Router } from "express";

export interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

function requireAuth(
	req: RequestWithBody,
	res: Response,
	next: NextFunction
): void {
	if (req.session?.loggedIn) {
		next();
		return;
	} else {
		res.status(403);
		res.send("Not allowed.");
	}
}

const router = Router();

router.post("/login", (req: RequestWithBody, res: Response) => {
	const { email, password } = req.body;

	if (email === "admin" && password === "admin") {
		req.session = { loggedIn: true };
		res.redirect("/");
	} else {
		res.send("Invalid email or password.");
	}
});

router.get("/", (req: RequestWithBody, res: Response) => {
	if (req.session?.loggedIn) {
		res.send(`
            <div>
                <div>You are logged in.</div>
                <a href="/logout">Logout</a>
            </div>
        `);
	} else {
		res.send(`
            <div>
                <div>You are not logged in.</div>
                <a href="/login">Login</a>
            </div>
        `);
	}
});

router.get("/logout", (req: RequestWithBody, res: Response) => {
	req.session = undefined;
	res.redirect("/");
});

router.get("/protected", requireAuth, (req: RequestWithBody, res: Response) => {
	res.send(`You have accessed a protected route!`);
});

export { router };
