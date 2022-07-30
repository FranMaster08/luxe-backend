const ControllerBase = require("./base/controller.base");
class UserController extends ControllerBase {}
const userController = new UserController(require("../model/user.model"));
module.exports = userController;
