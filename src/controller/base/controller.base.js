
class ControllerBase {
  constructor(modelDB) {
    this.model = modelDB;
  }
  async create(req, res, next) {
    try {
      if (!this.model) throw "not set model for this controller";
      const body = req.body;
      const result = await this.model.create(body);
      res.status(200).json(result);
    } catch (e) {
      res.status(400).json(result);
    }
  }
  async listAll(req, res, next) {
    try {
      if (!this.model) throw "not set model for this controller";
      const result = await this.model.getAll();
      res.status(200).json(result);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  }
}
module.exports = ControllerBase;
