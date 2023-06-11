const { Router } = require("express");
const router = Router();
const {
  createTodo,
  getTodosByUser,
  updateTodoStatus,
  deleteTodo,
} = require("../controllers/todos.controller");

router.post("/todos/create", createTodo);

router.get("/todos/user/:id", getTodosByUser);

router.put("/todos/update/:id", updateTodoStatus);

router.delete("/todos/delete/:id", deleteTodo);

module.exports = router;
