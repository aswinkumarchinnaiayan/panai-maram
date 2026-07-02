import React, { useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";

import {
  CreditCard,
  Wallet,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ShoppingBag,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";


const Payment = () => {

  const navigate =
    useNavigate();

  const {
    cartItems,
    clearCart,
  } = useCart();


  // TOTAL PRICE
  const totalPrice =
    cartItems.reduce(

      (acc, item) =>

        acc +
        (
          Number(
            item.price.replace(
              "₹",
              ""
            )
          ) * item.quantity
        ),

      0
    );


  // PAYMENT METHOD
  const [paymentMethod,
    setPaymentMethod
  ] = useState("COD");


  // LOADING
  const [loading,
    setLoading
  ] = useState(false);


  // PLACE ORDER
  const handlePlaceOrder =
    async () => {

      try {

        setLoading(true);

        // USER INFO
        const userInfo =
          JSON.parse(

            localStorage.getItem(
              "userInfo"
            )
          );

        // ADDRESS
        const shippingAddress =
          JSON.parse(

            localStorage.getItem(
              "shippingAddress"
            )
          );



        // =========================
        // CASH ON DELIVERY
        // =========================
        if (
          paymentMethod === "COD"
        ) {

          // SAVE ORDER
          await axios.post(

            `${API_URL}/api/orders`,

            {

              user:
                userInfo._id,

              orderItems:
                cartItems,

              shippingAddress,

              paymentMethod:
                "Cash On Delivery",

              totalPrice,
            }
          );

          toast.success("Order Placed Successfully");

          clearCart();

          navigate("/ordersuccess");

          return;
        }

        // =========================
        // RAZORPAY PAYMENT
        // =========================
        if (
          paymentMethod === "UPI"
        ) {

          // CREATE RAZORPAY ORDER
          const { data } =
            await axios.post(

              "http://panai-maram.onrender.com/api/payment/create-order",

              {
                amount:
                  totalPrice,
              }
            );

          // OPTIONS
          const options = {

            key:
              "rzp_test_SuFqniv2pM8nSx",

            amount:
              data.amount,

            currency:
              data.currency,

            order_id:
              data.id,

            name:
              "PANAI MARAM",

            description:
              "Traditional Tamil Products",

            handler: async function (response) {

              try {

                await axios.post(
                  "https://panai-maram.onrender.com/api/orders",
                  {
                    user: userInfo._id,
                    orderItems: cartItems,
                    shippingAddress,
                    paymentMethod: "Razorpay",
                    paymentId: response.razorpay_payment_id,
                    totalPrice,
                  }
                );

                clearCart();

                toast.success("Payment Successful");

                navigate("/ordersuccess");

              } catch (err) {

                console.error(err);

                toast.error("Unable to save order");

              }

            },

            prefill: {

              name:
                userInfo.name,

              email:
                userInfo.email,

              contact:
                shippingAddress.mobile,
            },

            theme: {

              color:
                "#904100",
            },
          };

          // OPEN RAZORPAY
          const razorpay =
            new window.Razorpay(
              options
            );

          razorpay.open();
        }

      }
      catch (error) {

        console.error(error);

        if (error.response) {
          console.log(error.response.data);
        }

        toast.error(error.message || "Payment Failed");
      }
      finally {

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

      {/* CONTAINER */}
      <div
        className="
          max-w-6xl
          mx-auto
          grid lg:grid-cols-3
          gap-8
        "
      >

        {/* LEFT SECTION */}
        <div
          className="
            lg:col-span-2
            bg-white
            rounded-[32px]
            p-8 sm:p-10
            shadow-sm
          "
        >

          {/* TITLE */}
          <div className="mb-10">

            <div
              className="
                inline-flex items-center gap-2
                bg-[#F3E4D2]
                text-[#904100]
                px-4 py-2
                rounded-full
                text-sm font-medium
                mb-5
              "
            >

              <ShieldCheck className="w-4 h-4" />

              Secure Payment

            </div>

            <h1
              className="
                text-4xl lg:text-5xl
                font-bold
                text-[#904100]
              "
            >

              Choose Payment Method

            </h1>

            <p
              className="
                mt-4
                text-[#6B4F3B]
                leading-8
              "
            >

              Complete your Panai Maram
              purchase securely with
              trusted payment methods.

            </p>
          </div>


          {/* PAYMENT OPTIONS */}
          <div className="space-y-5">

            {/* COD */}
            <div
              onClick={() =>
                setPaymentMethod("COD")
              }

              className={`
                border rounded-[24px]
                p-6
                cursor-pointer
                transition duration-300

                ${paymentMethod === "COD"

                  ? "border-[#904100] bg-[#FFF7ED]"

                  : "border-[#E8DDD0]"
                }
              `}
            >

              <div
                className="
                  flex items-center
                  justify-between
                "
              >

                <div
                  className="
                    flex items-center gap-4
                  "
                >

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-[#F5F1EB]
                      flex items-center justify-center
                    "
                  >

                    <Wallet
                      className="
                        w-7 h-7
                        text-[#904100]
                      "
                    />
                  </div>

                  <div>

                    <h2
                      className="
                        text-xl
                        font-bold
                        text-[#2D1B12]
                      "
                    >

                      Cash On Delivery

                    </h2>

                    <p
                      className="
                        text-sm
                        text-[#7A6855]
                        mt-1
                      "
                    >

                      Pay after receiving
                      your products

                    </p>
                  </div>
                </div>

                {
                  paymentMethod === "COD" && (

                    <CheckCircle2
                      className="
                        w-6 h-6
                        text-[#904100]
                      "
                    />
                  )
                }
              </div>
            </div>


            {/* UPI */}
            <div
              onClick={() =>
                setPaymentMethod("UPI")
              }

              className={`
                border rounded-[24px]
                p-6
                cursor-pointer
                transition duration-300

                ${paymentMethod === "UPI"

                  ? "border-[#904100] bg-[#FFF7ED]"

                  : "border-[#E8DDD0]"
                }
              `}
            >

              <div
                className="
                  flex items-center
                  justify-between
                "
              >

                <div
                  className="
                    flex items-center gap-4
                  "
                >

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-[#F5F1EB]
                      flex items-center justify-center
                    "
                  >

                    <Smartphone
                      className="
                        w-7 h-7
                        text-[#904100]
                      "
                    />
                  </div>

                  <div>

                    <h2
                      className="
                        text-xl
                        font-bold
                        text-[#2D1B12]
                      "
                    >

                      UPI Payment

                    </h2>

                    <p
                      className="
                        text-sm
                        text-[#7A6855]
                        mt-1
                      "
                    >

                      Google Pay, PhonePe,
                      Paytm & more

                    </p>
                  </div>
                </div>

                {
                  paymentMethod === "UPI" && (

                    <CheckCircle2
                      className="
                        w-6 h-6
                        text-[#904100]
                      "
                    />
                  )
                }
              </div>
            </div>


            {/* CARD */}
            <div
              onClick={() =>
                setPaymentMethod("CARD")
              }

              className={`
                border rounded-[24px]
                p-6
                cursor-pointer
                transition duration-300

                ${paymentMethod === "CARD"

                  ? "border-[#904100] bg-[#FFF7ED]"

                  : "border-[#E8DDD0]"
                }
              `}
            >

              <div
                className="
                  flex items-center
                  justify-between
                "
              >

                <div
                  className="
                    flex items-center gap-4
                  "
                >

                  <div
                    className="
                      w-14 h-14
                      rounded-2xl
                      bg-[#F5F1EB]
                      flex items-center justify-center
                    "
                  >

                    <CreditCard
                      className="
                          w-7 h-7
                          text-[#904100]
                        "
                    />
                  </div>

                  <div>

                    <h2
                      className="
                        text-xl
                        font-bold
                        text-[#2D1B12]
                      "
                    >

                      Debit / Credit Card

                    </h2>

                    <p
                      className="
                        text-sm
                        text-[#7A6855]
                        mt-1
                      "
                    >

                      Secure online card payment

                    </p>
                  </div>
                </div>

                {
                  paymentMethod === "CARD" && (

                    <CheckCircle2
                      className="
                        w-6 h-6
                        text-[#904100]
                      "
                    />
                  )
                }
              </div>
            </div>
          </div>
        </div>


        {/* RIGHT SECTION */}
        <div
          className="
            bg-white
            rounded-[32px]
            p-8
            shadow-sm
            h-fit
            sticky top-24
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              text-[#904100]
              mb-8
            "
          >

            Order Summary

          </h2>


          {/* PRODUCTS */}
          <div className="space-y-5">

            {
              cartItems.map(
                (item) => (

                  <div
                    key={item.id}

                    className="
                      flex items-start
                      justify-between
                      gap-4
                    "
                  >

                    <div
                      className="
                        flex items-center gap-4
                      "
                    >

                      <img
                        src={item.image}

                        alt={item.title}

                        className="
                          w-16 h-16
                          rounded-2xl
                          object-cover
                          border
                        "
                      />

                      <div>

                        <h3
                          className="
                            font-bold
                            text-[#2D1B12]
                          "
                        >

                          {item.title}

                        </h3>

                        <p
                          className="
                            text-sm
                            text-[#8A7A68]
                            mt-1
                          "
                        >

                          Qty :
                          {item.quantity}

                        </p>
                      </div>
                    </div>

                    <p
                      className="
                        font-bold
                        text-[#904100]
                      "
                    >

                      ₹
                      {
                        Number(
                          item.price.replace(
                            "₹",
                            ""
                          )
                        ) *
                        item.quantity
                      }

                    </p>
                  </div>
                )
              )
            }
          </div>


          {/* TOTAL */}
          <div
            className="
              border-t
              mt-8
              pt-6
              space-y-4
            "
          >

            <div
              className="
                flex justify-between
                text-[#6B4F3B]
              "
            >

              <span>
                Products Total
              </span>

              <span>
                ₹{totalPrice}
              </span>
            </div>

            <div
              className="
                flex justify-between
                text-[#6B4F3B]
              "
            >

              <span>
                Delivery
              </span>

              <span
                className="
                  text-green-600
                  font-semibold
                "
              >

                Free

              </span>
            </div>

            <div
              className="
                border-t
                pt-5
                flex justify-between
              "
            >

              <span
                className="
                  text-xl
                  font-bold
                  text-[#2D1B12]
                "
              >

                Total

              </span>

              <span
                className="
                  text-3xl
                  font-bold
                  text-[#904100]
                "
              >

                ₹{totalPrice}

              </span>
            </div>
          </div>


          {/* BUTTON */}
          <button
            onClick={handlePlaceOrder}

            disabled={loading}

            className="
              w-full
              mt-10
              bg-[#904100]
              hover:bg-[#7A3600]
              transition duration-300
              text-white
              py-4
              rounded-2xl
              font-semibold
              flex items-center justify-center gap-3
              disabled:opacity-70
            "
          >

            {
              loading

                ? "Processing..."

                : "Place Order"
            }

            <ArrowRight className="w-5 h-5" />

          </button>


          {/* SECURITY */}
          <div
            className="
              mt-8
              flex items-start gap-3
              bg-[#FFF7ED]
              rounded-2xl
              px-4 py-4
            "
          >

            <ShieldCheck
              className="
                w-5 h-5
                text-[#904100]
                mt-1
              "
            />

            <p
              className="
                text-sm
                text-[#6B4F3B]
                leading-6
              "
            >

              Your payments are secured with
              encrypted checkout protection.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;