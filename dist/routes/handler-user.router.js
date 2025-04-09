"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerUserRouter = void 0;
const express_1 = require("express");
const handler_users_controller_1 = require("../controllers/handler-users.controller");
class HandlerUserRouter {
    constructor(controller = new handler_users_controller_1.HandlerUserController()) {
        this.controller = controller;
        this.route = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.route.get('/users', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getUsers(req, res); }));
        this.route.get('/user', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.getUser(req, res); }));
        this.route.post('/user', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.addUser(req, res); }));
        this.route.patch('/user', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.updateUser(req, res); }));
        this.route.delete('/user', (req, res) => __awaiter(this, void 0, void 0, function* () { return yield this.controller.deleteUser(req, res); }));
    }
}
exports.HandlerUserRouter = HandlerUserRouter;
