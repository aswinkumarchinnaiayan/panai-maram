import React, { useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import {
  useNavigate,
} from "react-router-dom";

import {
  MapPin,
  Phone,
  User,
  ArrowRight,
} from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;
const Address = () => {

  const navigate =
    useNavigate();


  // STATES
  const [fullName,
    setFullName
  ] = useState("");

  const [mobile,
    setMobile
  ] = useState("");

  const [address,
    setAddress
  ] = useState("");

  const [city,
    setCity
  ] = useState("");

  const [state,
    setState
  ] = useState("");

  const [pincode,
    setPincode
  ] = useState("");

  const [loading,
    setLoading
  ] = useState(false);


  // SUBMIT FUNCTION
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        // USER INFO
        const userInfo =
          JSON.parse(

            localStorage.getItem(
              "userInfo"
            )
          );


        // SAVE ADDRESS TO DATABASE
        const { data } =
          await axios.post(

            `${API_URL}/api/address`,

            {

              user:
                userInfo._id,

              fullName,

              mobile,

              address,

              city,

              state,

              pincode,
            }
          );

        console.log(data);


        // SAVE LOCAL STORAGE
        localStorage.setItem(

          "shippingAddress",

          JSON.stringify({

            fullName,

            mobile,

            address,

            city,

            state,

            pincode,
          })
        );


        // SUCCESS MESSAGE
        toast.success(
          "Address Saved Successfully",
          {
            duration: 2500,

            style: {
              borderRadius: "16px",
              background: "#904100",
              color: "#fff",
              padding: "14px 18px",
              fontWeight: "600",
            },
          }
        );


        // NEXT PAGE
        navigate("/payment");

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed To Save Address",
          {
            duration: 2500,

            style: {
              borderRadius: "16px",
              background: "#7A3600",
              color: "#fff",
              padding: "14px 18px",
              fontWeight: "600",
            },
          }
        );

      } finally {

        setLoading(false);
      }
    };


  return (

    <section
      className="
        min-h-screen
        bg-[#F5F1EB]
        px-4 sm:px-6 lg:px-20
        py-16
      "
    >

      <div
        className="
          max-w-3xl
          mx-auto
          bg-white
          rounded-[32px]
          shadow-sm
          p-8 sm:p-10
        "
      >

        {/* TITLE */}
        <div className="mb-10">

          <h1
            className="
              text-4xl
              font-bold
              text-[#904100]
            "
          >

            Shipping Address

          </h1>

          <p
            className="
              mt-3
              text-[#7A6855]
              leading-7
            "
          >

            Enter your delivery details
            to continue checkout.

          </p>
        </div>


        {/* FORM */}
        <form
          onSubmit={handleSubmit}

          className="space-y-5"
        >

          {/* FULL NAME */}
          <div>

            <label
              className="
                block
                mb-3
                text-sm
                font-medium
                text-[#5C4033]
              "
            >

              Full Name

            </label>

            <div
              className="
                flex items-center gap-3
                border border-[#E5D8C7]
                rounded-2xl
                px-5 py-4
                focus-within:border-[#904100]
                transition duration-300
              "
            >

              <User
                className="
                  w-5 h-5
                  text-[#904100]
                "
              />

              <input
                type="text"

                required

                value={fullName}

                onChange={(e) =>
                  setFullName(
                    e.target.value
                  )
                }

                placeholder="Enter your full name"

                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-[#2D1B12]
                  placeholder:text-[#A08D7C]
                "
              />
            </div>
          </div>


          {/* MOBILE */}
          <div>

            <label
              className="
                block
                mb-3
                text-sm
                font-medium
                text-[#5C4033]
              "
            >

              Mobile Number

            </label>

            <div
              className="
                flex items-center gap-3
                border border-[#E5D8C7]
                rounded-2xl
                px-5 py-4
                focus-within:border-[#904100]
                transition duration-300
              "
            >

              <Phone
                className="
                  w-5 h-5
                  text-[#904100]
                "
              />

              <input
                type="text"

                required

                value={mobile}

                onChange={(e) =>
                  setMobile(
                    e.target.value
                  )
                }

                placeholder="Enter mobile number"

                className="
                  w-full
                  bg-transparent
                  outline-none
                  text-[#2D1B12]
                  placeholder:text-[#A08D7C]
                "
              />
            </div>
          </div>


          {/* ADDRESS */}
          <div>

            <label
              className="
                block
                mb-3
                text-sm
                font-medium
                text-[#5C4033]
              "
            >

              Address

            </label>

            <div
              className="
                flex items-start gap-3
                border border-[#E5D8C7]
                rounded-2xl
                px-5 py-4
                focus-within:border-[#904100]
                transition duration-300
              "
            >

              <MapPin
                className="
                  w-5 h-5
                  text-[#904100]
                  mt-1
                "
              />

              <textarea
                rows="4"

                required

                value={address}

                onChange={(e) =>
                  setAddress(
                    e.target.value
                  )
                }

                placeholder="Enter full address"

                className="
                  w-full
                  bg-transparent
                  outline-none
                  resize-none
                  text-[#2D1B12]
                  placeholder:text-[#A08D7C]
                "
              />
            </div>
          </div>


          {/* CITY */}
          <div>

            <label
              className="
                block
                mb-3
                text-sm
                font-medium
                text-[#5C4033]
              "
            >

              City

            </label>

            <input
              type="text"

              required

              value={city}

              onChange={(e) =>
                setCity(
                  e.target.value
                )
              }

              placeholder="Enter city"

              className="
                w-full
                border border-[#E5D8C7]
                rounded-2xl
                px-5 py-4
                outline-none
                focus:border-[#904100]
                transition duration-300
              "
            />
          </div>


          {/* STATE */}
          <div>

            <label
              className="
                block
                mb-3
                text-sm
                font-medium
                text-[#5C4033]
              "
            >

              State

            </label>

            <input
              type="text"

              required

              value={state}

              onChange={(e) =>
                setState(
                  e.target.value
                )
              }

              placeholder="Enter state"

              className="
                w-full
                border border-[#E5D8C7]
                rounded-2xl
                px-5 py-4
                outline-none
                focus:border-[#904100]
                transition duration-300
              "
            />
          </div>


          {/* PINCODE */}
          <div>

            <label
              className="
                block
                mb-3
                text-sm
                font-medium
                text-[#5C4033]
              "
            >

              Pincode

            </label>

            <input
              type="text"

              required

              value={pincode}

              onChange={(e) =>
                setPincode(
                  e.target.value
                )
              }

              placeholder="Enter pincode"

              className="
                w-full
                border border-[#E5D8C7]
                rounded-2xl
                px-5 py-4
                outline-none
                focus:border-[#904100]
                transition duration-300
              "
            />
          </div>


          {/* BUTTON */}
          <button
            type="submit"

            disabled={loading}

            className="
              w-full
              flex items-center justify-center gap-3
              bg-[#904100]
              hover:bg-[#7A3600]
              transition duration-300
              text-white
              py-4
              rounded-2xl
              font-semibold
              mt-6
              disabled:opacity-70
            "
          >

            {
              loading

                ? "Saving Address..."

                : "Continue To Payment"
            }

            <ArrowRight
              className="w-5 h-5"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Address;