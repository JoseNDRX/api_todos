const { Router } = require("express");
const router = Router();
const { createCategorie } = require("../controllers/categories.controller");

router.post("/categories/create", createCategorie);

module.exports = router;
