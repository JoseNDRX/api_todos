const Users = require("./users.model");
const Todos = require("./todos.model");
const Categories = require("./categories.model");

const initModels = () => {
  Todos.belongsTo(Users, { foreignKey: "userId" });
  Users.hasMany(Todos, { foreignKey: "userId" });

  Todos.belongsTo(Categories, { foreignKey: "categoryId" });
  Categories.hasMany(Todos, { foreignKey: "categoryId" });
};

module.exports = initModels;
