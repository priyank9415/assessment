// models/User.js
import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import PersonBooks from "./PersonBook.js";

const Customer = sequelize.define(
  "Customer",
  {
    // Model attributes are defined here
    customer_id: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    timestamps: true,
    tableName: "person",
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

export default Customer;
