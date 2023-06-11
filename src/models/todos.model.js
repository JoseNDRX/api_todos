const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Todos = db.define(
  "todos",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
    },
    categoryId: {
      type: DataTypes.INTEGER,
      field: "category_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Todos;
