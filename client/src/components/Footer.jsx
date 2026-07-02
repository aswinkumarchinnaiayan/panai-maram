import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Leaf,
  TreePalm,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#2D1B12] text-[#E8D9C8] px-6 lg:px-20 py-14">

      {/* Top */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-[#4A3428] pb-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">

            <div className="w-12 h-12 rounded-full border border-[#C89B6D] flex items-center justify-center group">
              <TreePalm className="w-6 h-6 text-[#C87B2A] transition-transform duration-300
      group-hover:rotate-12" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-white uppercase">
                PANAI MARAM
              </h1>

              <p className="text-[10px] tracking-[2px] text-[#C89B6D] uppercase">
                Sacred Palmyra
              </p>
            </div>
          </div>

          <p className="text-sm leading-6 text-[#CDB7A0]">
            Traditional palmyra products crafted naturally with Tamil heritage.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-5">

            <div className="w-9 h-9 rounded-full bg-[#3A281F] hover:bg-[#904100] transition flex items-center justify-center cursor-pointer">
              <Mail size={16} />
            </div>

          </div>
        </div>

        {/* Links */}
        <div>

          <h2 className="text-white font-semibold mb-4">
            Quick Links
          </h2>

          <ul className="flex flex-col gap-3 text-sm text-[#D9C3AA]">

            <li>
              <Link
                to="/"
                className="hover:text-[#C87B2A] transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className="hover:text-[#C87B2A] transition"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/heritage"
                className="hover:text-[#C87B2A] transition"
              >
                Heritage
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-[#C87B2A] transition"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-white font-semibold mb-4">
            Categories
          </h2>

          <ul className="space-y-3 text-sm">
            <li>Palm Jaggery</li>
            <li>Palm Candy</li>
            <li>Palm Crafts</li>
            <li>Organic Products</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white font-semibold mb-4">
            Contact
          </h2>

          <div className="space-y-4 text-sm">

            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-[#C87B2A]" />
              <p>Thanjavur, Tamil Nadu</p>
            </div>

            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-[#C87B2A]" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-[#C87B2A]" />
              <p>support@panaimaram.com</p>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 text-sm text-[#B89C83]">

        <p>© 2026 Panai Maram</p>

        <div className="flex gap-5">
          <p className="hover:text-[#C87B2A] cursor-pointer">
            Privacy
          </p>

          <p className="hover:text-[#C87B2A] cursor-pointer">
            Terms
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;