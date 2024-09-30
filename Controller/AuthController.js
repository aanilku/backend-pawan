const UserModel = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const { userName, email, password ,role } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(409)
        .json({
          message: "user is already exist, you can login",
          success: false,
        });
    }
    const userModel = new UserModel({ userName, email, password ,role });
    userModel.password = await bcrypt.hash(password, 10);

    await userModel.save(); // Save the user to the database

    res.status(201).json({
      massage: "signup successfully",
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      massage: "Internal server error",
      success: false,
    });
  }
};

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });
      const errMSG = "User failed email or password is wrong";
      if (!user) {
        return res.status(403).json({ message: errMSG, success: false });
      }
   

      const isPasswordEqual = await bcrypt.compare(password, user.password);
      if (!isPasswordEqual) {
        return res.status(403).json({
          message: errMSG,
          success: false,
        });
      }
  
      const jwtToken = jwt.sign(
        {
          email: user.email,
          _id: user._id,
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );
      res.status(200).json({
        message: "Login success",
        success: true,
        jwtToken,
        email,
        userName: user.userName,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal server error: " + err.message,
        success: false,
      });
    }
  };

module.exports = {
  signup,
  login,
};
