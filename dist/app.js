"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const handler_user_router_1 = require("./routes/handler-user.router");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 3000;
        this.config();
        this.routes();
    }
    config() {
        this.app.use(express_1.default.json());
    }
    routes() {
        return [
            new handler_user_router_1.HandlerUserRouter().route
        ];
    }
    start() {
        this.app.listen(this.port, () => {
            console.log(`Server on ${this.port}`);
        });
    }
}
void new Server();
