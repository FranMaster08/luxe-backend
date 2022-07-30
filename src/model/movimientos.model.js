const path = require("path");
const baseModels = require("./base/baseModel");
class MovimientoModel extends baseModels {}
const movimientoModel = new MovimientoModel();
movimientoModel.setPathDb(path.join(__dirname, "../db/movimientos.json"));

module.exports = movimientoModel;


