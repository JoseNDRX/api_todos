const Categories = require("../models/categories.model");

const createCategorie = async (req, res) => {
  const { name } = req.body;
  try {
    const newCategorie = await Categories.create({
      name,
    });
    res.status(201).json(newCategorie);
  } catch (error) {
    return res.status(500).json({
      message: "Something is wrong, can´t create the categorie",
    });
  }
};

module.exports = {
  createCategorie,
};
