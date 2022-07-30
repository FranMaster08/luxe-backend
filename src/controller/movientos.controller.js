const ControllerBase = require("./base/controller.base");
class MovimientosController extends ControllerBase {}
const movimientosController = new MovimientosController(
  require("../model/movimientos.model")
);
module.exports = movimientosController;
