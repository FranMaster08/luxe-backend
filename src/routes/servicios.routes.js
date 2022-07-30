const { Router } = require("express");
const controller = require("../controller/servicios.controller")
const routes = Router();
routes.get('/' , controller.listAll.bind(controller))
routes.post('/' , controller.create.bind(controller))
module.exports = routes