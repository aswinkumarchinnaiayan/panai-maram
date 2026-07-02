import Address from "../models/Address.js";


// SAVE ADDRESS
export const saveAddress =
  async (req, res) => {

    try {

      const {

        user,

        fullName,

        mobile,

        address,

        city,

        state,

        pincode,
      } = req.body;


      // CREATE ADDRESS
      const newAddress =
        await Address.create({

          user,

          fullName,

          mobile,

          address,

          city,

          state,

          pincode,
        });

      res.status(201).json(
        newAddress
      );

    } catch (error) {

      res.status(500).json({

        message:
          error.message,
      });
    }
  };