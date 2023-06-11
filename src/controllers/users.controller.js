const Users = require("../models/users.model");

const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await Users.create({ username, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({
      message: "Something is wrong, can´t create a User",
    });
  }
};

module.exports = {
  createUser,
};
