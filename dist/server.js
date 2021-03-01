"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
var app_1 = __importDefault(require("./app"));
require("./database/index");
dotenv_1.default.config();
var port = process.env.PORT || 3333;
app_1.default.listen(port, function () {
    console.log("\uD83C\uDFC3 Server Running at http://localhost:" + port);
});
