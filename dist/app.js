"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
// import Bundler from "parcel-bundler";
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
var server = new http_1.default.Server(app);
// Tratamento de Cors, lliberação ou bloqueio de acessos externos
app.use(cors_1.default());
// app.use(allowCors);
app.use(body_parser_1.default.json({ limit: "50mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(index_1.default);
exports.default = app;
