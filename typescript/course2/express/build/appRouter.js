"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRouter = void 0;
const express_1 = __importDefault(require("express"));
class AppRouter {
    static getInstance() {
        if (!AppRouter.instance) {
            AppRouter.instance = express_1.default.Router();
        }
        return AppRouter.instance;
    }
}
exports.AppRouter = AppRouter;
