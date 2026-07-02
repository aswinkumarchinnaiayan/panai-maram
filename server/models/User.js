import mongoose from "mongoose";


// USER SCHEMA
const userSchema =
  mongoose.Schema(

    {

      // USER NAME
      name: {
        type: String,
        required: true,
      },

      // USER EMAIL
      email: {
        type: String,
        required: true,
        unique: true,
      },

      // USER PHONE
      phone: {
        type: String,
        required: true,
      },

      // USER PASSWORD
      password: {
        type: String,
        required: true,
      },
    },

    {
      timestamps: true,
    }
  );


// EXPORT MODEL
const User =
  mongoose.model(
    "User",
    userSchema
  );

export default User;