import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import {
  Mail,
  Lock,
  ArrowRight,
  TreePalm,
} from "lucide-react";

const Login = () => {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);


  // LOGIN FUNCTION
  const handleLogin = async (
    e
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const { data } =
        await axios.post(

          "http://localhost:5000/api/auth/login",

          {
            email,
            password,
          }
        );

      // STORE USER
      localStorage.setItem(

        "userInfo",

        JSON.stringify(data)
      );

      toast.success(
        "Login Successful",
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

      navigate("/");

    } catch (error) {

      // USER NOT REGISTERED
      if (
        error?.response?.data?.message ===
        "User not found"
      ) {

        toast(
          "Account not found. Please register first.",
          {
            icon: "⚠️",

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

        // REDIRECT TO REGISTER
        setTimeout(() => {

          navigate("/register");

        }, 2500);

      }

      // INVALID PASSWORD
      else {

        toast.error(

          error?.response?.data
            ?.message ||

          "Invalid Email or Password",

          {
            duration: 2500,

            style: {
              borderRadius: "16px",
              background: "#7A3600",
              color: "#fff",
              padding: "14px 18px",
              fontWeight: "600",
            },

            iconTheme: {
              primary: "#fff",
              secondary: "#7A3600",
            },
          }
        );
      }
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
              bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop')]
              bg-cover bg-center
              opacity-20
            "
          />

          {/* TOP */}
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

              Welcome to

              <span className="block text-[#F3D2A2]">

                Panai Maram

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

              Explore traditional Tamil
              Palmyra products crafted
              naturally with heritage
              and purity.

            </p>
          </div>

          {/* BOTTOM */}
          <div className="relative z-10">

            <p
              className="
                text-sm
                text-white/70
                leading-7
              "
            >

              Preserving Tamil culture
              through sustainable
              Palmyra traditions and
              authentic natural wellness.

            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            flex items-center
            justify-center
            p-6 sm:p-10 lg:p-16
          "
        >

          <div className="w-full max-w-md">

            {/* LOGO */}
            <div
              className="
                flex items-center
                gap-4 mb-10
              "
            >

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

                Login

              </h2>

              <p
                className="
                  mt-3
                  text-[#7A6855]
                  leading-7
                "
              >

                Login to continue your
                journey with authentic
                Tamil heritage products.

              </p>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleLogin}
              className="space-y-6"
            >

              {/* EMAIL */}
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

                  Email Address

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

                  <Mail className="w-5 h-5 text-[#904100]" />

                  <input
                    type="email"

                    value={email}

                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }

                    required

                    placeholder="Enter your email"

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

              {/* PASSWORD */}
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

                  Password

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

                  <Lock className="w-5 h-5 text-[#904100]" />

                  <input
                    type="password"

                    value={password}

                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
                    }

                    required

                    placeholder="Enter your password"

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

              {/* OPTIONS */}
              <div
                className="
                  flex items-center
                  justify-between
                  text-sm
                "
              >

                <label
                  className="
                    flex items-center
                    gap-2
                    text-[#5C4033]
                  "
                >

                  <input type="checkbox" />

                  Remember me

                </label>

                <button
                  type="button"

                  className="
                    text-[#904100]
                    font-medium
                    hover:underline
                  "
                >

                  Forgot Password

                </button>
              </div>

              {/* BUTTON */}
              <button
                type="submit"

                disabled={loading}

                className="
                  w-full
                  flex items-center
                  justify-center
                  gap-3
                  bg-[#904100]
                  hover:bg-[#7A3600]
                  transition duration-300
                  text-white
                  py-4
                  rounded-2xl
                  font-semibold
                  shadow-sm hover:shadow-lg
                "
              >

                {
                  loading
                    ? "Logging In..."
                    : "Login"
                }

                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            {/* REGISTER */}
            <p
              className="
                text-center
                text-[#7A6855]
                mt-8
              "
            >

              Don’t have an account?

              <Link
                to="/register"

                className="
                  text-[#904100]
                  font-semibold
                  ml-2
                  hover:underline
                "
              >

                Register

              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;