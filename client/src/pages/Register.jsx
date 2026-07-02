import React, { useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  User,
  Mail,
  Phone,
  Lock,
  ArrowRight,
  TreePalm,
} from "lucide-react";


const Register = () => {

  const navigate =
    useNavigate();


  // STATES
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);


  // REGISTER FUNCTION
  const handleRegister = async (
    e
  ) => {

    e.preventDefault();

    // VALIDATION
    if (
      !name ||
      !email ||
      !phone ||
      !password
    ) {

      toast.error(
        "Please fill all fields"
      );

      return;
    }

    try {

      setLoading(true);

      // API REQUEST
      const { data } =
        await axios.post(

          "http://localhost:5000/api/auth/register",

          {
            name,
            email,
            phone,
            password,
          }
        );

      // STORE USER
      localStorage.setItem(

        "userInfo",

        JSON.stringify(data)
      );

      // SUCCESS TOAST
      toast.success(
        "Registration Successful",
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

      // REDIRECT
      navigate("/");

    } catch (error) {

      toast.error(

        error?.response?.data
          ?.message ||

        "Registration Failed",

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
        flex items-center justify-center
        px-4 sm:px-6 lg:px-8
        py-10
      "
    >

      {/* CONTAINER */}
      <div
        className="
          w-full max-w-6xl
          bg-white
          rounded-[32px]
          overflow-hidden
          shadow-[0_10px_50px_rgba(0,0,0,0.08)]
          grid lg:grid-cols-2
        "
      >

        {/* LEFT SIDE */}
        <div
          className="
            hidden lg:flex
            relative
            bg-[#904100]
            text-white
            p-14
            flex-col justify-between
          "
        >

          {/* BACKGROUND */}
          <div
            className="
              absolute inset-0
              bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop')]
              bg-cover bg-center
              opacity-20
            "
          />

          {/* CONTENT */}
          <div className="relative z-10">

            <div
              className="
                w-16 h-16
                rounded-full
                border border-white/30
                flex items-center justify-center
                mb-8
              "
            >

              <TreePalm className="w-8 h-8 rotate-12" />

            </div>

            <h1 className="text-5xl font-bold leading-tight">

              Join the

              <span className="block text-[#F3D2A2]">

                Panai Maram Family

              </span>
            </h1>

            <p
              className="
                mt-8
                text-lg
                leading-8
                text-white/90
                max-w-md
              "
            >

              Discover authentic Tamil Palmyra products
              and support sustainable artisan communities.

            </p>
          </div>

          {/* FOOTER */}
          <div className="relative z-10">

            <p className="text-sm text-white/70 leading-7">

              Traditional Tamil heritage products crafted
              naturally with purity and sustainability.

            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div
          className="
            flex items-center justify-center
            p-6 sm:p-10 lg:p-16
          "
        >

          <div className="w-full max-w-md">

            {/* LOGO */}
            <div className="flex items-center gap-4 mb-10">

              <div
                className="
                  w-14 h-14
                  rounded-full
                  border border-[#C89B6D]
                  flex items-center justify-center
                "
              >

                <TreePalm
                  className="
                    w-6 h-6
                    text-[#904100]
                    rotate-12
                  "
                />
              </div>

              <div>

                <h2
                  className="
                    text-3xl
                    font-bold
                    tracking-wide
                    text-[#904100]
                  "
                >

                  PANAI MARAM

                </h2>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[4px]
                    text-[#B17A4B]
                    mt-1
                  "
                >

                  Sacred Palmyra Nurtured

                </p>
              </div>
            </div>

            {/* TITLE */}
            <div className="mb-10">

              <h2
                className="
                  text-4xl
                  font-bold
                  text-[#2D1B12]
                "
              >

                Create Account

              </h2>

              <p
                className="
                  mt-3
                  text-[#7A6855]
                  leading-7
                "
              >

                Register to explore authentic Tamil
                heritage products and wellness collections.

              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleRegister}
              className="space-y-5"
            >

              {/* NAME */}
              <InputField
                icon={<User className="w-5 h-5 text-[#904100]" />}
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />

              {/* EMAIL */}
              <InputField
                icon={<Mail className="w-5 h-5 text-[#904100]" />}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              {/* PHONE */}
              <InputField
                icon={<Phone className="w-5 h-5 text-[#904100]" />}
                type="text"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) =>
                  setPhone(e.target.value)
                }
              />

              {/* PASSWORD */}
              <InputField
                icon={<Lock className="w-5 h-5 text-[#904100]" />}
                type="password"
                placeholder="Create password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

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
                  shadow-sm hover:shadow-lg
                  mt-4
                  disabled:opacity-70
                "
              >

                {
                  loading
                    ? "Creating..."
                    : "Create Account"
                }

                <ArrowRight className="w-5 h-5" />

              </button>
            </form>

            {/* LOGIN */}
            <p
              className="
                text-center
                text-[#7A6855]
                mt-8
              "
            >

              Already have an account?

              <Link
                to="/login"

                className="
                  text-[#904100]
                  font-semibold
                  ml-2
                  hover:underline
                "
              >

                Login

              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


// REUSABLE INPUT COMPONENT
const InputField = ({
  icon,
  type,
  placeholder,
  value,
  onChange,
}) => {

  return (

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

      {icon}

      <input
        type={type}

        placeholder={placeholder}

        value={value}

        onChange={onChange}

        required

        className="
          w-full
          outline-none
          bg-transparent
          text-[#2D1B12]
          placeholder:text-[#A08D7C]
        "
      />
    </div>
  );
};

export default Register;