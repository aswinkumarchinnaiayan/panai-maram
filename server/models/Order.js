import mongoose from "mongoose";

const orderSchema =
  mongoose.Schema(

    {

      user: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "User",

        required: true,
      },

      orderItems: [

        {
          title: String,

          image: String,

          price: String,

          quantity: Number,
        },
      ],

      shippingAddress: {

        fullName: String,

        mobile: String,

        address: String,

        city: String,

        state: String,

        pincode: String,
      },

      paymentMethod: {

        type: String,

        required: true,
      },

      totalPrice: {

        type: Number,

        required: true,
      },

      isPaid: {

        type: Boolean,

        default: false,
      },

      paidAt: Date,
    },

    {
      timestamps: true,
    }
  );

const Order =
  mongoose.model(
    "Order",
    orderSchema
  );

export default Order;