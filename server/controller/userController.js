const User = require("../model/userModel");

const register = async (req, res) => {
  await User.create(req.body);
  res.status(201).send("Registration successful");
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
    .then((user) => {
      if (user.password === req.body.password) {
        return res.status(200).send({ message: "Login successful" });
      } else {
        return res.status(400).send({ message: "Invalid password" });
      }
    })
    .catch((err) => console.log(err));
  if (!user) return res.status(400).send("Invalid email or password");
};

module.exports = { register, login };
