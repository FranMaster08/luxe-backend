const { Router } = require("express");
const controller = require("../controller/materiales.controller")
const routes = Router();
routes.get('/' , controller.listAll)
routes.post('/' , controller.create)

module.exports = routes