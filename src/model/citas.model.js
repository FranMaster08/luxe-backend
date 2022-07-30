const path = require("path");
const baseModels = require("./base/baseModel");
class CitasModel extends baseModels {

}
const citasMoldel = new CitasModel();
citasMoldel.setPathDb(path.join(__dirname, "../db/citas.json"));
module.exports = citasMoldel;
