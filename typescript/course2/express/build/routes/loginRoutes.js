"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        next();
        return;
    }
    else {
        res.status(403);
        res.send("Not allowed.");
    }
}
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send(`
            <div>
                <div>You are logged in.</div>
                <a href="/logout">Logout</a>
            </div>
        `);
    }
    else {
        res.send(`
            <div>
                <div>You are not logged in.</div>
                <a href="/auth/login">Login</a>
            </div>
        `);
    }
});
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, (req, res) => {
    res.send(`You have accessed a protected route!`);
});
