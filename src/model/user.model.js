const path = require("path");
const baseModels = require("../model/base/baseModel");
class UserModel extends baseModels {}
const userModel = new UserModel();
userModel.setPathDb(path.join(__dirname, "../db/user.json"));

module.exports = userModel;


