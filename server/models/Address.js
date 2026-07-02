import mongoose from "mongoose";


// ADDRESS SCHEMA
const addressSchema =
  mongoose.Schema(

    {

      // CONNECT USER
      user: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },

      fullName: {

        type: String,

        required: true,
      },

      mobile: {

        type: String,

        required: true,
      },

      address: {

        type: String,

        required: true,
      },

      city: {

        type: String,

        required: true,
      },

      state: {

        type: String,

        required: true,
      },

      pincode: {

        type: String,

        required: true,
      },
    },

    {
      timestamps: true,
    }
  );


// EXPORT
const Address =
  mongoose.model(
    "Address",
    addressSchema
  );

export default Address;