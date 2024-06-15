const { User } = require("../model/User.model");

exports.createUser = async (req, res) => {
  try {
    // Log the request body for debugging
     
      const {email, password } = req.body;

      console.log("name:", email);
      const user = new User({ email, password });
      const doc = await user.save();
    // Simulate user login logic or respond with received data
    res.json({ message: "User signUp is successfully", user: req.body });
  } catch (error) {
    console.error("Error signup  user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};