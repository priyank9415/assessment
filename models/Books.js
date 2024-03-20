// models/User.js
import { DataTypes } from "sequelize";
import sequelize from "../db.js";
import PersonBooks from "./PersonBook.js";

const Book = sequelize.define(
  "Book",
  {
    // Model attributes are defined here
    book_id: {
      primaryKey: true,
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    book_name: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    lend_date: {
      type: DataTypes.DATEONLY,
      // allowNull defaults to true
    },
    days_to_return: {
      type: DataTypes.NUMBER,
      // allowNull defaults to true
    },
    total_count: {
      type: DataTypes.NUMBER,
      // allowNull defaults to true
    },
  },
  {
    timestamps: true,
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

export default Book;
