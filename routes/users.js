const db = require('../utils/db_connection');
const userController = require('./../controller/user_controller');

module.exports = function (app) {
  app.post("/registration", userController.registration)

  app.post("/login", userController.login)
}