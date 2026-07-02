import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import {
  Trash2,
  ShoppingBag,
  Plus,
  Minus,
} from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();
  useEffect(() => {

    const userInfo =
      JSON.parse(
        localStorage.getItem(
          "userInfo"
        )
      );

    if (!userInfo) {

      navigate("/login");
    }

  }, []);
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cartItems.reduce(
    (acc, item) =>
      acc +
      Number(item.price.replace("₹", "")) *
      item.quantity,
    0
  );

  return (
    <section className="min-h-screen bg-[#F5F1EB] px-4 sm:px-6 lg:px-20 py-10">

      {/* HEADING */}
      <div className="flex items-center gap-4 mb-10">

        <div
          className="
            w-14 h-14
            rounded-full
            bg-[#F3E4D2]
            flex items-center justify-center
          "
        >

          <ShoppingBag className="w-7 h-7 text-[#904100]" />
        </div>

        <div>

          <h1 className="text-4xl font-bold text-[#904100]">
            Shopping Cart
          </h1>

          <p className="text-[#7A6855] mt-1">
            Your selected traditional products
          </p>
        </div>
      </div>

      {/* EMPTY CART */}
      {cartItems.length === 0 ? (

        <div
          className="
            bg-white
            rounded-[32px]
            p-16
            text-center
            border border-[#E8DDD0]
          "
        >

          <h2 className="text-3xl font-bold text-[#904100]">
            Your Cart is Empty
          </h2>

          <p className="text-[#7A6855] mt-4">
            Add traditional Panai Maram products.
          </p>
        </div>

      ) : (

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="
                  bg-white
                  rounded-[30px]
                  border border-[#E8DDD0]
                  p-5
                  flex flex-col sm:flex-row gap-5
                "
              >

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full sm:w-[180px]
                    h-[180px]
                    object-cover
                    rounded-2xl
                  "
                />

                {/* CONTENT */}
                <div className="flex-1">

                  <div className="flex items-start justify-between">

                    <div>

                      <p className="text-sm text-[#B17A4B]">
                        {item.category}
                      </p>

                      <h2 className="text-2xl font-bold text-[#904100] mt-2">
                        {item.title}
                      </h2>
                    </div>

                    {/* REMOVE */}
                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="
                        w-10 h-10
                        rounded-full
                        bg-[#F5F1EB]
                        hover:bg-[#F3E4D2]
                        flex items-center justify-center
                        transition
                      "
                    >

                      <Trash2 className="w-5 h-5 text-[#904100]" />
                    </button>
                  </div>

                  <div className="mt-8 flex items-center justify-between">

                    <div>

                      <p className="text-sm text-[#8A7A68] mb-2">
                        Quantity
                      </p>

                      <div
                        className="
      flex items-center
      border border-[#E8DDD0]
      rounded-2xl
      overflow-hidden
      w-fit
    "
                      >

                        {/* MINUS */}
                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="
        px-4 py-3
        hover:bg-[#F3E4D2]
        transition
      "
                        >

                          <Minus className="w-4 h-4 text-[#904100]" />
                        </button>

                        {/* NUMBER */}
                        <span
                          className="
        px-5
        font-semibold
        text-[#2D1B12]
      "
                        >
                          {item.quantity}
                        </span>

                        {/* PLUS */}
                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="
        px-4 py-3
        hover:bg-[#F3E4D2]
        transition
      "
                        >

                          <Plus className="w-4 h-4 text-[#904100]" />
                        </button>
                      </div>
                    </div>

                    <div>

                      <p className="text-sm text-[#8A7A68]">
                        Price
                      </p>

                      <h3 className="text-3xl font-bold text-[#904100] mt-1">
                        ₹
                        {Number(
                          item.price.replace("₹", "")
                        ) * item.quantity}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div
            className="
              bg-white
              rounded-[30px]
              border border-[#E8DDD0]
              p-8
              h-fit
            "
          >

            <h2 className="text-3xl font-bold text-[#904100] mb-8">
              Summary
            </h2>

            <div className="space-y-5">

              <div className="flex items-center justify-between">

                <span className="text-[#7A6855]">
                  Total Items
                </span>

                <span className="font-semibold">
                  {cartItems.length}
                </span>
              </div>

              <div className="border-t border-[#EFE2D3] pt-5">

                <div className="flex items-center justify-between">

                  <span className="text-xl font-semibold text-[#2D1B12]">
                    Total
                  </span>

                  <span className="text-3xl font-bold text-[#904100]">
                    ₹{total}
                  </span>
                </div>
              </div>
            </div>

            <button onClick={()=>navigate("/address")}
              className="
                w-full
                mt-8
                bg-[#904100]
                hover:bg-[#7A3600]
                transition
                text-white
                py-4
                rounded-2xl
                font-semibold
              "
            >
              Proceed Checkout
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;