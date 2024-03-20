// db.js
// const { Sequelize } = require("sequelize");
import Sequelize from "sequelize";
const sequelize = new Sequelize("library", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
