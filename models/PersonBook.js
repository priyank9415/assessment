// models/User.js
import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import Customer from "./Customer.js";
import Book from "./Books.js";

const PersonBooks = sequelize.define(
  "PersonBooks",
  {
    // Model attributes are defined here
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    customer_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    book_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lend_date: {
      type: DataTypes.DATEONLY,
      // allowNull defaults to true
    },
    days_to_return: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
  },
  {
    timestamps: true,
    tableName: "person_books",
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

export default PersonBooks;
