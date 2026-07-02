import React from 'react';
import { Link } from 'react-router-dom';
import Heritage from './Heritage';
import AddCart from '../components/AddCart';
import karuppatti from "../assets/images/karuppatti.jpg";
import handcraft from "../assets/images/handcraft.jpg";
import palmcandy from "../assets/images/palmcandy.jpg";
import {
  ArrowRight,
  Award,
  Heart,
  Leaf,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react';

const Home = () => {
  const featuredProducts = [
    {
      id: 1,
      title: 'Palm Jaggery',
      image: karuppatti,
      price: '₹249',
      rating: '4.9',
    },
    {
      id: 2,
      title: 'Palm Leaf Basket',
      image: handcraft,
      price: '₹399',
      rating: '4.8',
    },
    {
      id: 3,
      title: 'Organic Palm Candy',
      image: palmcandy,
      price: '₹199',
      rating: '4.7',
    },
  ];

  const categories = [
    'Organic Foods',
    'Traditional Crafts',
    'Palm Leaf Products',
    'Healthy Sweeteners',
  ];

  return (
    <div className="w-full overflow-hidden bg-[#F9F5F0] text-[#2D1B12]">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F3E4D2] text-[#904100] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Pure Traditional Palmyra Products
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[#904100]">
              Sustainable
              <span className="block text-[#C87B2A]">
                Panai Maram
              </span>
              Heritage Store
            </h1>

            <p className="mt-8 text-lg leading-8 text-[#5C4033] max-w-xl">
              Bringing authentic Tamil traditional Palmyra products directly
              from local artisans and climbers to modern homes with purity,
              sustainability, and heritage.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">
              <Link to="/products" className="bg-[#904100] hover:bg-[#7A3600] transition text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link to="/heritage"
                className=" inline-flex items-center justify-center border border-[#C89B6D] hover:bg-[#EFE2D3]
                            transition duration-300 px-8 py-4 rounded-full font-semibold text-[#904100] hover:shadow-md">
                Explore Heritage
              </Link>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-14">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#EFE2D3]">
                <ShieldCheck className="w-8 h-8 text-[#904100] mb-3" />
                <p className="font-semibold text-sm">
                  100% Natural & Chemical Free
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#EFE2D3]">
                <Users className="w-8 h-8 text-[#904100] mb-3" />
                <p className="font-semibold text-sm">
                  Supports Local Farmers
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#EFE2D3]">
                <Leaf className="w-8 h-8 text-[#904100] mb-3" />
                <p className="font-semibold text-sm">
                  Eco-Friendly Lifestyle
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src={karuppatti}
              alt="Palmyra"
              className="rounded-[40px] shadow-2xl object-cover h-[700px] w-full"
            />

            <div className="absolute bottom-6 left-6 bg-white p-6 rounded-3xl shadow-xl max-w-xs border border-[#EFE2D3]">
              <div className="flex items-center gap-2 mb-3 text-[#C87B2A]">
                <Award className="w-5 h-5" />
                <span className="font-semibold">Tamil Heritage</span>
              </div>

              <p className="text-sm text-[#5C4033] leading-6">
                Preserving the legacy of Panai Maram through sustainable
                products crafted by traditional communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 lg:px-20 py-24 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#904100]">
            Explore Collections
          </h2>

          <p className="mt-4 text-[#6B4F3B] max-w-2xl mx-auto leading-7">
            Traditional handcrafted products inspired by the timeless value of
            the Palmyra tree.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-[#F9F5F0] hover:-translate-y-2 transition duration-300 rounded-3xl p-8 border border-[#EFE2D3] shadow-sm hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F3E4D2] flex items-center justify-center mb-6">
                <Leaf className="w-8 h-8 text-[#904100]" />
              </div>

              <h3 className="text-xl font-semibold text-[#904100] mb-3">
                {category}
              </h3>

              <p className="text-[#6B4F3B] leading-7 text-sm">
                Authentic handcrafted eco-conscious products for healthy modern
                living.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-4 sm:px-6 lg:px-20 py-16 lg:py-24">

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12 lg:mb-16">

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#904100]">
              Featured Products
            </h2>

            <p className="mt-3 text-[#6B4F3B] leading-7 max-w-2xl text-sm sm:text-base">
              Premium traditional products carefully prepared by local artisan
              communities.
            </p>
          </div>

          <button className="border border-[#C89B6D] px-5 py-3 rounded-full hover:bg-[#EFE2D3] transition font-medium text-[#904100] w-fit text-sm">
            View All
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EFE2D3] shadow-sm hover:shadow-xl transition duration-300"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="
              w-full
              h-64
              sm:h-72
              md:h-80
              object-cover
              hover:scale-105
              transition duration-500
            "
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">

                {/* Title */}
                <div className="flex items-center justify-between mb-3">

                  <h3 className="text-xl sm:text-2xl font-semibold text-[#904100]">
                    {product.title}
                  </h3>

                  <button>
                    <Heart className="w-5 h-5 text-[#904100]" />
                  </button>
                </div>

                {/* RATING */}
                <div
                  className="inline-flex items-center gap-2 bg-[#FFF7ED] px-3 py-2 rounded-full mt-5"
                >
                  <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />

                  <span className="text-sm font-semibold text-[#2D1B12]">
                    {product.rating}
                  </span>

                  <span className="text-xs text-[#8A7A68]">
                    Rating
                  </span>
                </div>

                {/* PRICE + BUTTON */}
                <div className="flex items-center justify-between mt-7">

                  {/* PRICE */}
                  <div className="flex flex-col">

                    <span className="text-xs text-[#8A7A68] uppercase tracking-wider">
                      Price
                    </span>

                    <h3 className="text-3xl font-bold text-[#904100] mt-1">
                      {product.price}
                    </h3>
                  </div>
                  {/* ADD CART */}
                  <AddCart product={product} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;