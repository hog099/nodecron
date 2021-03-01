"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes = express_1.Router();
routes
    .get('/', function (req, res, next) {
    return res.status(200).json({ message: "Servico em Operação 🏃 🚀" });
});
routes
    .get('/home', function (req, res, next) {
    return res.status(200).json({ message: "Voce esta na Home 🏃 🚀" });
});
//TRATAMENTO PARA ROTAS INVALIDAS
routes
    .get('*', function (req, res, next) { return res.status(404).json({ message: "N\u00E3o existe rota para a requisi\u00E7\u00E3o solicitada " + req.url + ", verifique." }); })
    .post('*', function (req, res, next) { return res.status(404).json({ message: "N\u00E3o existe rota para a requisi\u00E7\u00E3o solicitada " + req.url + ", verifique." }); });
exports.default = routes;
