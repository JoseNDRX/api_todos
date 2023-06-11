const Todos = require("../models/todos.model");
const Users = require("../models/users.model");
const Categories = require("../models/categories.model");

const createTodo = async (req, res) => {
  const { title, description, userId, categoryId } = req.body;
  try {
    const newTodo = await Todos.create({
      title,
      description,
      userId,
      categoryId,
    });
    res.status(201).json(newTodo);
  } catch (error) {
    return res.status(500).json({
      message: "Something is wrong, can´t create a to do",
    });
  }
};

const getTodosByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findByPk(id, {
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: Todos,
          attributes: ["id", "title", "description", "completed"],
          include: [
            {
              model: Categories,
              attributes: ["id", "name"],
            },
          ],
        },
      ],
    });
    res.json(user);
  } catch (error) {
    return res.status(500).json({
      message: "Something is wrong",
    });
  }
};

const updateTodoStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { completed } = req.body;
    await Todos.update({ completed }, { where: { id } });
    res.status(202).json();
  } catch (error) {
    return res.status(500).json({
      message: "Something is wrong, can´t update",
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todos.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      message: "Something is wrong, can't delete the to do",
    });
  }
};

module.exports = {
  createTodo,
  getTodosByUser,
  updateTodoStatus,
  deleteTodo,
};
