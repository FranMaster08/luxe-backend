const path = require("path");
const baseModels = require("./base/baseModel");
class ServiciosModel extends baseModels {}
const serviciosModel = new ServiciosModel();
serviciosModel.setPathDb(path.join(__dirname, "../db/servicios.json"));

module.exports = serviciosModel;
