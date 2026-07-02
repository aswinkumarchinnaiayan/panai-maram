import React from "react";

import {
  Link,
} from "react-router-dom";

import {
  CheckCircle2,
  ShoppingBag,
  Truck,
  ArrowRight,
} from "lucide-react";


const OrderSuccess = () => {

  // RANDOM ORDER ID
  const orderId =
    Math.floor(
      100000 + Math.random() * 900000
    );

  return (

    <section
      className="
        min-h-screen
        bg-[#F5F1EB]
        flex items-center justify-center
        px-4 sm:px-6 lg:px-8
        py-16
      "
    >

      {/* CARD */}
      <div
        className="
          w-full
          max-w-2xl
          bg-white
          rounded-[40px]
          shadow-[0_10px_50px_rgba(0,0,0,0.06)]
          p-8 sm:p-12
          text-center
          relative
          overflow-hidden
        "
      >

        {/* TOP BACKGROUND */}
        <div
          className="
            absolute top-0 left-0
            w-full h-40
            bg-[#FFF7ED]
          "
        />

        {/* SUCCESS ICON */}
        <div className="relative z-10">

          <div
            className="
              w-28 h-28
              rounded-full
              bg-[#F3E4D2]
              flex items-center justify-center
              mx-auto
              shadow-sm
            "
          >

            <CheckCircle2
              className="
                w-16 h-16
                text-[#904100]
              "
            />
          </div>

          {/* TITLE */}
          <h1
            className="
              mt-8
              text-4xl lg:text-5xl
              font-bold
              text-[#904100]
            "
          >

            Order Confirmed

          </h1>

          {/* MESSAGE */}
          <p
            className="
              mt-5
              text-[#6B4F3B]
              leading-8
              max-w-xl
              mx-auto
            "
          >

            Thank you for supporting
            traditional Tamil heritage products.

            Your Panai Maram order has been
            placed successfully and will be
            processed shortly.
          </p>


          {/* ORDER INFO */}
          <div
            className="
              mt-10
              bg-[#FFF7ED]
              rounded-[28px]
              p-6 sm:p-8
              text-left
              border border-[#F3E4D2]
            "
          >

            <div
              className="
                flex items-center justify-between
                flex-wrap gap-4
              "
            >

              {/* ORDER ID */}
              <div>

                <p
                  className="
                    text-sm
                    text-[#8A7A68]
                    mb-2
                  "
                >

                  Order ID

                </p>

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-[#2D1B12]
                  "
                >

                  #PM{orderId}

                </h2>
              </div>

              {/* STATUS */}
              <div
                className="
                  bg-green-100
                  text-green-700
                  px-5 py-2
                  rounded-full
                  text-sm
                  font-semibold
                "
              >

                Payment Successful

              </div>
            </div>


            {/* DELIVERY */}
            <div
              className="
                mt-8
                flex items-start gap-4
              "
            >

              <div
                className="
                  w-14 h-14
                  rounded-2xl
                  bg-white
                  flex items-center justify-center
                "
              >

                <Truck
                  className="
                    w-7 h-7
                    text-[#904100]
                  "
                />
              </div>

              <div>

                <h3
                  className="
                    text-lg
                    font-bold
                    text-[#2D1B12]
                  "
                >

                  Estimated Delivery

                </h3>

                <p
                  className="
                    text-[#6B4F3B]
                    mt-2
                    leading-7
                  "
                >

                  Your order is expected to arrive
                  within 3 - 5 business days.

                </p>
              </div>
            </div>
          </div>


          {/* BUTTONS */}
          <div
            className="
              mt-10
              flex flex-col sm:flex-row
              gap-4
              justify-center
            "
          >

            {/* SHOP MORE */}
            <Link to="/products">

              <button
                className="
                  bg-[#904100]
                  hover:bg-[#7A3600]
                  transition duration-300
                  text-white
                  px-8 py-4
                  rounded-2xl
                  font-semibold
                  flex items-center gap-3
                "
              >

                <ShoppingBag className="w-5 h-5" />

                Continue Shopping

              </button>
            </Link>


            {/* VIEW ORDERS */}
            <Link to="/vieworder">

              <button
                className="
                  border border-[#D9C3AA]
                  hover:bg-[#F5F1EB]
                  transition duration-300
                  text-[#904100]
                  px-8 py-4
                  rounded-2xl
                  font-semibold
                  flex items-center gap-3
                "
              >

                View Orders

                <ArrowRight className="w-5 h-5" />

              </button>
            </Link>
          </div>


          {/* FOOTER */}
          <p
            className="
              mt-10
              text-sm
              text-[#8A7A68]
              leading-7
            "
          >

            Preserving Tamil heritage through
            sustainable Palmyra traditions 🌴

          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;