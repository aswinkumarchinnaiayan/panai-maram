import React from "react";

import { ShoppingCart } from "lucide-react";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";


const AddCart = ({ product }) => {

  const navigate =
    useNavigate();

  const { addToCart } =
    useCart();


  const handleAddCart = () => {

    const userInfo =
      JSON.parse(
        localStorage.getItem(
          "userInfo"
        )
      );

    // NOT LOGGED IN
    if (!userInfo) {

      toast.error(
        "Please login to continue",
        {
          duration: 2000,

          style: {
            borderRadius: "16px",
            background: "#904100",
            color: "#fff",
            padding: "14px 18px",
            fontWeight: "600",
          },

          iconTheme: {
            primary: "#fff",
            secondary: "#904100",
          },
        }
      );

      navigate("/login");

      return;
    }

    // ADD TO CART
    addToCart(product);

    // SUCCESS TOAST
    toast.success(
      `${product.title} added to cart`,
      {
        duration: 2000,

        style: {
          borderRadius: "16px",
          background: "#904100",
          color: "#fff",
          padding: "14px 18px",
          fontWeight: "600",
        },

        iconTheme: {
          primary: "#fff",
          secondary: "#904100",
        },
      }
    );
  };

  return (

    <button
      onClick={handleAddCart}

      className="
        group
        flex items-center gap-2
        bg-[#904100]
        hover:bg-[#7A3600]
        px-5 py-3
        rounded-2xl
        text-white
        transition-all duration-300
        shadow-sm hover:shadow-md
      "
    >

      <ShoppingCart
        className="
          w-4 h-4
          transition-transform duration-300
          group-hover:translate-x-1
        "
      />

      <span className="text-sm font-semibold">

        Add Cart

      </span>
    </button>
  );
};

export default AddCart;