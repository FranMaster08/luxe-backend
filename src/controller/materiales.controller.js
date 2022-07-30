const ControllerBase = require("./base/controller.base");
class MaterialesController extends ControllerBase {}
const materialesController = new MaterialesController(
  require("../model/materiales.model")
);
module.exports = materialesController;
