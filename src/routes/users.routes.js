const { Router } = require("express");
const router = Router();
const { createUser } = require("../controllers/users.controller");

router.post("/users/create", createUser);

module.exports = router;
