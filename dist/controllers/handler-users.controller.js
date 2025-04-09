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
exports.HandlerUserController = void 0;
const handler_user_service_1 = require("../service/handler-user.service");
class HandlerUserController {
    constructor(service = new handler_user_service_1.HandlerUserService()) {
        this.service = service;
    }
    getUsers(_req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.service.getUsers();
        });
    }
    getUser(_req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.service.getUser();
        });
    }
    addUser(_req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.service.addUser();
        });
    }
    updateUser(_req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.service.updateUser();
        });
    }
    deleteUser(_req, _res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.service.deleteUser();
        });
    }
}
exports.HandlerUserController = HandlerUserController;
