const { Router } = require("express");
const routes = Router();
routes.get("/", (req, res) => {
  res.send("Bienvenido a nuestra Api");
});
routes.use("/user", require("./user.routes"));
routes.use("/materiales", require("./materiales.routes"));
routes.use("/servicios", require("./servicios.routes"));
routes.use("/citas", require("./citas.routes"));

module.exports = routes;
