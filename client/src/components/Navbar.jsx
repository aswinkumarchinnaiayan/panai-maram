import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Products from "../pages/Products";
import { useCart } from "../context/CartContext";
import {
    Heart,
    ShoppingCart,
    User,
    Languages,
    Menu,
    TreePalm,
    X,
    Home
} from "lucide-react";
const Navbar = () => {
    const navigate = useNavigate();
    const {

        cartItems,

        clearCart,

    } = useCart();
    const [mobileMenu, setMobileMenu] = useState(false);
    const userInfo =
        JSON.parse(
            localStorage.getItem(
                "userInfo"
            )
        );

    const logoutHandler = () => {

        // REMOVE USER
        localStorage.removeItem(
            "userInfo"
        );

        // REMOVE ADDRESS
        localStorage.removeItem(
            "shippingAddress"
        );

        // CLEAR CART STATE
        clearCart();

        // NAVIGATE
        navigate("/login");
    };
    return (
        <>
            <nav className="w-full bg-[#F5F1EB] border-b border-[#E6D8C7] px-8 lg:px-16 py-4 sticky top-0 z-50">
                <div className="flex items-center justify-between">

                    <Link to="/">
                        {/* Logo Section */}
                        <div className="flex items-center gap-4 cursor-pointer">

                            {/* Logo Circle */}
                            <div className="w-14 h-14 rounded-full border border-[#C89B6D] flex items-center justify-center group">
                                <TreePalm className="w-6 h-6 text-[#904100] transition-transform duration-300 group-hover:rotate-12" />
                            </div>

                            {/* Brand Name */}
                            <div className="leading-tight">
                                <h1 className="text-[28px] font-bold tracking-[2px] text-[#904100] uppercase">
                                    PANAI MARAM
                                </h1>

                                <p className="text-[10px] tracking-[4px] text-[#B17A4B] uppercase mt-1">
                                    Sacred Palmyra Nurtured
                                </p>
                            </div>
                        </div></Link>

                    {/* Nav Links */}
                    <ul className="hidden lg:flex items-center gap-14 font-medium text-[#2D1B12] text-[15px]">

                        <Link
                            to="/"
                            className="cursor-pointer hover:text-[#C87B2A] transition"
                        >
                            HOME
                        </Link>

                        <Link
                            to="/heritage"
                            className="cursor-pointer hover:text-[#C87B2A] transition"
                        >
                            HERITAGE
                        </Link>

                        <Link to="/products" className="cursor-pointer hover:text-[#C87B2A] transition">
                            PRODUCTS
                        </Link>

                        <Link
                            to="/contact"
                            className="cursor-pointer hover:text-[#C87B2A] transition"
                        >
                            CONTACT
                        </Link>
                    </ul>

                    {/* Right Icons */}
                    <div className="flex items-center gap-6">

                        {/* Language Button */}
                        <button className="hidden md:flex items-center gap-2 border border-[#D9C3AA] rounded-full px-4 py-2 text-[#8B4513] text-sm hover:bg-[#EFE6DB] transition">
                            <Languages size={16} />
                            <span className="font-medium">TA</span>
                        </button>

                        <Heart
                            size={24}
                            className="text-[#2D1B12] cursor-pointer hover:text-[#C87B2A] transition"
                        />

                        <div className="relative">

                            <ShoppingCart
                                size={24}
                                onClick={() => navigate("/cart")}
                                className="
      text-[#2D1B12]
      cursor-pointer
      hover:text-[#C87B2A]
      transition
    "
                            />

                            {/* CART COUNT */}
                            {cartItems.length > 0 && (

                                <span
                                    className="
        absolute
        -top-2
        -right-2
        w-5 h-5
        rounded-full
        bg-[#904100]
        text-white
        text-[10px]
        font-semibold
        flex items-center justify-center
        shadow-md
      "
                                >
                                    {cartItems.length}
                                </span>
                            )}
                        </div>

                        {
                            userInfo ? (

                                <button
                                    onClick={logoutHandler}
                                    className="
        text-sm
        font-semibold
        text-[#904100]
        border border-[#904100]
        px-4 py-2
        rounded-full
        hover:bg-[#904100]
        hover:text-white
        transition
      "
                                >
                                    Logout
                                </button>

                            ) : (

                                <User
                                    size={24}

                                    onClick={() =>
                                        navigate("/login")
                                    }

                                    className="
        text-[#2D1B12]
        cursor-pointer
        hover:text-[#C87B2A]
        transition
      "
                                />
                            )
                        }

                        {/* Mobile Menu */}
                        <button
                            onClick={() => setMobileMenu(true)}
                            className="lg:hidden"
                        >

                            <Menu
                                size={30}
                                className="text-[#904100]"
                            />
                        </button>
                    </div>
                </div >
            </nav >

            {/* MOBILE SIDEBAR */}
            <>
                {/* BACKDROP */}
                <div
                    onClick={() => setMobileMenu(false)}
                    className={` cursor-pointer
      fixed inset-0
      bg-black/40 backdrop-blur-sm
      z-40
      transition-opacity duration-300
      lg:hidden 

      ${mobileMenu
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        }
    `}
                />

                {/* SIDEBAR */}
                <div
                    className={`
      fixed top-0 right-0
      h-screen w-[320px]
      bg-[#FDFBF8]
      border-l border-[#E8DDD0]
      shadow-[0_10px_60px_rgba(0,0,0,0.15)]
      z-50
      transition-all duration-300 ease-in-out
      flex flex-col 

      ${mobileMenu
                            ? "translate-x-0"
                            : "translate-x-full"
                        }
    `}
                >

                    {/* HEADER */}
                    <div
                        className="
        flex items-center justify-between
        px-6 py-5
        border-b border-[#EFE2D3]
        bg-white
      "
                    >

                        {/* LOGO */}
                        <div className="flex items-center gap-3">

                            <div
                                className="
            w-11 h-11
            rounded-full
            border border-[#C89B6D]
            flex items-center justify-center
          "
                            >

                                <TreePalm
                                    className="
              w-5 h-5
              text-[#904100]
              rotate-12
            "
                                />
                            </div>

                            <div>
                                <h2
                                    className=" text-lg font-bold tracking-wide text-[#904100]">
                                    PANAI MARAM
                                </h2>
                                <p
                                    className=" text-[9px] uppercase tracking-[3px] text-[#B17A4B]">
                                    Tamil Heritage
                                </p>
                            </div>
                        </div>

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={() => setMobileMenu(false)}
                            className="
          w-10 h-10
          rounded-full
          bg-[#F5F1EB]
          hover:bg-[#EFE2D3]
          flex items-center justify-center
          transition duration-300
        "
                        >

                            <X
                                size={22}
                                className="text-[#904100]"
                            />
                        </button>
                    </div>

                    {/* MENU LINKS */}
                    <div className="flex flex-col px-6 py-8 gap-3">

                        {/* LINK ITEM */}
                        <Link
                            to="/"
                            onClick={() => setMobileMenu(false)}
                            className="
          group
          flex items-center justify-between
          px-5 py-4
          rounded-2xl
          hover:bg-[#F3E4D2]
          transition duration-300
        "
                        >

                            <span
                                className="
            text-lg
            font-medium
            text-[#2D1B12]
            group-hover:text-[#904100]
          "
                            >
                                Home
                            </span>

                            <span
                                className="
            text-[#B17A4B]
            opacity-0
            group-hover:opacity-100
            transition
          "
                            >
                                →
                            </span>
                        </Link>

                        {/* HERITAGE */}
                        <Link
                            to="/heritage"
                            onClick={() => setMobileMenu(false)}
                            className="
          group
          flex items-center justify-between
          px-5 py-4
          rounded-2xl
          hover:bg-[#F3E4D2]
          transition duration-300
        "
                        >

                            <span
                                className="
            text-lg
            font-medium
            text-[#2D1B12]
            group-hover:text-[#904100]
          "
                            >
                                Heritage
                            </span>

                            <span
                                className="
            text-[#B17A4B]
            opacity-0
            group-hover:opacity-100
            transition
          "
                            >
                                →
                            </span>
                        </Link>

                        {/* PRODUCTS */}
                        <Link
                            to="/products"
                            onClick={() => setMobileMenu(false)}
                            className="
          group
          flex items-center justify-between
          px-5 py-4
          rounded-2xl
          hover:bg-[#F3E4D2]
          transition duration-300
        "
                        >

                            <span
                                className="
            text-lg
            font-medium
            text-[#2D1B12]
            group-hover:text-[#904100]
          "
                            >
                                Products
                            </span>

                            <span
                                className="
            text-[#B17A4B]
            opacity-0
            group-hover:opacity-100
            transition
          "
                            >
                                →
                            </span>
                        </Link>

                        {/* CONTACT */}
                        <Link
                            to="/contact"
                            onClick={() => setMobileMenu(false)}
                            className="
          group
          flex items-center justify-between
          px-5 py-4
          rounded-2xl
          hover:bg-[#F3E4D2]
          transition duration-300
        "
                        >

                            <span
                                className="
            text-lg
            font-medium
            text-[#2D1B12]
            group-hover:text-[#904100]
          "
                            >
                                Contact
                            </span>

                            <span
                                className="
            text-[#B17A4B]
            opacity-0
            group-hover:opacity-100
            transition
          "
                            >
                                →
                            </span>
                        </Link>
                    </div>

                    {/* BOTTOM SECTION */}
                    <div className="mt-auto p-6 border-t border-[#EFE2D3]">

                        {/* LANGUAGE */}
                        <button
                            className="
          w-full
          flex items-center justify-center gap-2
          bg-[#904100]
          hover:bg-[#7A3600]
          transition duration-300
          text-white
          py-4
          rounded-2xl
          font-medium
        "
                        >

                            <Languages className="w-5 h-5" />

                            தமிழ் / English
                        </button>

                        {/* COPYRIGHT */}
                        <p
                            className="
          text-center
          text-xs
          text-[#8A7A68]
          mt-5
          leading-6
        "
                        >
                            Preserving Tamil Heritage through
                            sustainable Palmyra traditions.
                        </p>
                    </div>
                </div>
            </>
        </>
    );
};

export default Navbar;