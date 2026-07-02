import React from "react";
import toast from "react-hot-toast";
import AddCart from "../components/AddCart";
import palmcandy from "../assets/images/palmcandy.jpg";
import nungu from "../assets/images/nungu.jpg";
import karuppatti from "../assets/images/karuppatti.jpg";
import handcraft from "../assets/images/handcraft.jpg";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import {
    Heart,
    Star,
    Sparkles,
} from "lucide-react";


const products = [

    {
        id: 1,
        title: "Karuppatti",
        category: "Traditional Sweetener",
        image: karuppatti,
        price: "₹249",
        rating: "4.9",
        description:
            "Natural palm jaggery rich in iron and traditional nutrients.",
    },

    {
        id: 2,
        title: "Palm Candy",
        category: "Organic Health Product",
        image: palmcandy,
        price: "₹199",
        rating: "4.8",
        description:
            "Crystal palm sweetener used in Siddha and Ayurveda medicine.",
    },

    {
        id: 3,
        title: "Nungu",
        category: "Summer Fruit",
        image: nungu,
        price: "₹149",
        rating: "4.7",
        description:
            "Refreshing natural fruit from the Palmyra tree for summer wellness.",
    },

    {
        id: 4,
        title: "Palm Leaf Basket",
        category: "Handcrafted Product",
        image: handcraft,
        price: "₹399",
        rating: "4.9",
        description:
            "Eco-friendly handcrafted traditional Tamil palm leaf basket.",
    },
];


const Products = () => {

    const navigate = useNavigate();

    const { addToCart } =
        useCart();


    // HANDLE ADD CART
    const handleAddCart = (
        product
    ) => {

        const userInfo =
            JSON.parse(
                localStorage.getItem(
                    "userInfo"
                )
            );

        // NOT LOGGED IN
        if (!userInfo) {

            navigate("/login");

            return;
        }

        // LOGGED IN
        addToCart(product);
    };

    return (

        <section
            className="
        bg-[#F5F1EB]
        min-h-screen
        overflow-hidden
      "
        >

            {/* HERO */}
            <div
                className="
          px-4 sm:px-6 lg:px-20
          py-16 lg:py-24
        "
            >

                <div className="max-w-5xl">

                    <div
                        className="
              inline-flex items-center gap-2
              bg-[#F3E4D2]
              text-[#904100]
              px-4 py-2
              rounded-full
              text-sm font-medium
              mb-6
            "
                    >

                        <Sparkles className="w-4 h-4" />

                        Traditional Tamil Products

                    </div>

                    <h1
                        className="
              text-5xl lg:text-7xl
              font-bold
              text-[#904100]
              leading-tight
            "
                    >

                        Authentic

                        <span className="block text-[#C87B2A]">

                            Palmyra Products

                        </span>
                    </h1>

                    <p
                        className="
              mt-8
              text-lg
              leading-9
              text-[#5C4033]
              max-w-3xl
            "
                    >

                        Explore naturally crafted Panai Maram products inspired by Tamil heritage, traditional wellness, and sustainable living.

                    </p>
                </div>
            </div>

            {/* PRODUCTS */}
            <div
                className="
          px-4 sm:px-6 lg:px-20
          pb-20
        "
            >

                <div
                    className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
                >

                    {products.map((product) => (

                        <div
                            key={product.id}

                            className="
                bg-white
                rounded-[32px]
                overflow-hidden
                border border-[#E8DDD0]
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition duration-300
              "
                        >

                            {/* IMAGE */}
                            <div
                                className="
                  overflow-hidden
                  bg-[#F5F1EB]
                "
                            >

                                <img
                                    src={product.image}

                                    alt={product.title}

                                    className="
                    w-full
                    h-[320px]
                    object-cover
                    hover:scale-105
                    transition duration-500
                  "
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6">

                                {/* CATEGORY */}
                                <p
                                    className="
                    text-sm
                    text-[#B17A4B]
                    font-medium
                    mb-3
                  "
                                >

                                    {product.category}

                                </p>

                                {/* TITLE */}
                                <div
                                    className="
                    flex items-start
                    justify-between
                    gap-4
                  "
                                >

                                    <h2
                                        className="
                      text-2xl
                      font-bold
                      text-[#904100]
                    "
                                    >

                                        {product.title}

                                    </h2>

                                    <button>

                                        <Heart
                                            className="
                        w-5 h-5
                        text-[#904100]
                      "
                                        />

                                    </button>
                                </div>

                                {/* DESCRIPTION */}
                                <p
                                    className="
                    mt-4
                    text-[#6B4F3B]
                    leading-7
                    text-sm
                  "
                                >

                                    {product.description}

                                </p>

                                {/* RATING */}
                                <div
                                    className="
                    inline-flex items-center gap-2
                    bg-[#FFF7ED]
                    px-3 py-2
                    rounded-full
                    mt-5
                  "
                                >

                                    <Star
                                        className="
                      w-4 h-4
                      fill-[#F59E0B]
                      text-[#F59E0B]
                    "
                                    />

                                    <span
                                        className="
                      text-sm
                      font-semibold
                      text-[#2D1B12]
                    "
                                    >

                                        {product.rating}

                                    </span>

                                    <span
                                        className="
                      text-xs
                      text-[#8A7A68]
                    "
                                    >

                                        Rating

                                    </span>
                                </div>

                                {/* PRICE + BUTTON */}
                                <div
                                    className="
                    flex items-center
                    justify-between
                    mt-7
                  "
                                >

                                    {/* PRICE */}
                                    <div className="flex flex-col">

                                        <span
                                            className="
                        text-xs
                        text-[#8A7A68]
                        uppercase
                        tracking-wider
                      "
                                        >

                                            Price

                                        </span>

                                        <h3
                                            className="
                        text-3xl
                        font-bold
                        text-[#904100]
                        mt-1
                      "
                                        >

                                            {product.price}

                                        </h3>
                                    </div>

                                    {/* ADD CART */}
                                    <div
                                        onClick={() =>
                                            handleAddCart(product)
                                        }
                                    >

                                        <AddCart
                                            product={product}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;