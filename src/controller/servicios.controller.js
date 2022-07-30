const ControllerBase = require("./base/controller.base");
class ServiciosController extends ControllerBase {}
const serviciosController = new ServiciosController(
  require("../model/servicios.model")
);

module.exports = serviciosController;
