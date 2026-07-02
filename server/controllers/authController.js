import User from "../models/User.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";


// GENERATE JWT TOKEN
const generateToken = (id) => {

  return jwt.sign(

    { id },

    process.env.JWT_SECRET,

    {
      expiresIn: "30d",
    }
  );
};


// ==========================
// REGISTER USER
// ==========================
export const registerUser = async (
  req,
  res
) => {

  try {

    // GET DATA FROM FRONTEND
    const {
      name,
      email,
      phone,
      password,
    } = req.body;


    // VALIDATION
    if (
      !name ||
      !email ||
      !password
    ) {

      return res.status(400).json({

        message:
          "Please fill all fields",
      });
    }


    // CHECK USER EXISTS
    const userExists =
      await User.findOne({
        email,
      });

    if (userExists) {

      return res.status(400).json({

        message:
          "User already exists",
      });
    }


    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );


    // CREATE USER
    const user = await User.create({

      name,

      email,

      phone,

      password: hashedPassword,
    });


    // RESPONSE
    res.status(201).json({

      _id: user._id,

      name: user.name,

      email: user.email,

      phone: user.phone,

      token: generateToken(user._id),
    });
  } catch (error) {

    res.status(500).json({

      message:
        error.message,
    });
  }
};


// ==========================
// LOGIN USER
// ==========================
export const loginUser = async (
  req,
  res
) => {

  try {

    // GET DATA
    const {
      email,
      password,
    } = req.body;


    // VALIDATION
    if (
      !email ||
      !password
    ) {

      return res.status(400).json({

        message:
          "Please fill all fields",
      });
    }


    // FIND USER
    const user =
      await User.findOne({
        email,
      });


    // CHECK PASSWORD
    if (
      user &&
      (
        await bcrypt.compare(
          password,
          user.password
        )
      )
    ) {

      res.status(200).json({

        _id: user._id,

        name: user.name,

        email: user.email,

        token: generateToken(
          user._id
        ),
      });

    } else {

      // USER NOT FOUND
      if (!user) {

        return res.status(404).json({

          message: "User not found",
        });
      }


      // PASSWORD WRONG
      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!isMatch) {

        return res.status(401).json({

          message:
            "Invalid password",
        });
      }
    }

  } catch (error) {

    res.status(500).json({

      message:
        error.message,
    });
  }
};