const path = require("path");
const baseModels = require("./base/baseModel");
class MaterialesModel extends baseModels {
}
const materiales = new MaterialesModel();
materiales.setPathDb(path.join(__dirname, "../db/materiales.json"));
module.exports = materiales;

