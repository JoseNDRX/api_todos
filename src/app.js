const express = require("express");
const db = require("./utils/database");
const usersRoutes = require("./routes/users.routes.js");
const todosRoutes = require("./routes/todos.routes.js");
const categoriesRoutes = require("./routes/categories.routes.js");
const initModels = require("./models/initModels");
const cors = require("cors");
require("dotenv").config();

initModels();
const app = express();
app.use(cors());
app.use(express.json());
app.use(usersRoutes, todosRoutes, categoriesRoutes);

const PORT = process.env.PORT || 8000;

/* db.sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => console.log(error)); */

app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
