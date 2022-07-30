const { Router } = require("express");
const controller = require("../controller/movientos.controller")
const routes = Router();
routes.get('/' , controller.listAll.bind(controller))
routes.post('/' , controller.create.bind(controller))
module.exports = routes