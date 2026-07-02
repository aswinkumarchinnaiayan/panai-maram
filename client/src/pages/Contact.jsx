import React from "react";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  MapPinned,
} from "lucide-react";


const districts = [

  {
    code: "TNL",
    name: "Tirunelveli",
    active: true,
  },

  {
    code: "TUT",
    name: "Thoothukudi",
  },

  {
    code: "RMN",
    name: "Ramanathapuram",
  },
];


const Contact = () => {

  const navigate =
    useNavigate();


  // CONTACT SUBMIT
  const handleContact = (
    e
  ) => {

    e.preventDefault();

    const userInfo =
      JSON.parse(
        localStorage.getItem(
          "userInfo"
        )
      );

    // USER NOT LOGGED IN
    if (!userInfo) {

      toast.error(
        "Please login to continue",
        {
          duration: 2500,

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

    // SUCCESS
    toast.success(
      "Message Sent Successfully",
      {
        duration: 2500,

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

    <section
      className="
        bg-[#F5F1EB]
        min-h-screen
        px-4 sm:px-6 lg:px-20
        py-12 lg:py-16
      "
    >

      {/* HEADING */}
      <div className="max-w-4xl mb-16">

        <h1
          className="
            text-3xl lg:text-5xl
            font-bold
            text-[#2D1B12]
            leading-tight
          "
        >

          Contact Cooperatives & HQ

        </h1>

        <p
          className="
            mt-6
            text-[#5C4033]
            text-lg
            leading-8
            max-w-3xl
          "
        >

          Have queries about wholesale organic sweeteners,
          traditional gift packaging, or sustainable farm trips?
          Write directly to our Tirunelveli guild.

        </p>

        <div
          className="
            w-24 h-1
            bg-[#904100]
            rounded-full
            mt-8
          "
        />
      </div>

      {/* MAIN GRID */}
      <div className="grid lg:grid-cols-2 gap-8">

        {/* LEFT FORM */}
        <div
          className="
            bg-white
            rounded-[32px]
            p-6 lg:p-8
            border border-[#E8DDD0]
            shadow-sm
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              text-[#2D1B12]
              uppercase
              tracking-wide
            "
          >

            Send Secure Message

          </h2>

          <p className="text-[#8A7A68] mt-3 mb-10">

            Our co-operative desk responds within 24–48 working hours.

          </p>

          {/* FORM */}
          <form
            onSubmit={handleContact}
            className="space-y-6"
          >

            {/* NAME */}
            <div>

              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-[#2D1B12]
                  mb-3
                "
              >

                Your Full Name

              </label>

              <input
                type="text"

                placeholder="e.g. Aswin Kumar"

                className="
                  w-full
                  bg-[#F8F4EE]
                  border border-[#E0D2C3]
                  rounded-2xl
                  px-5 py-4
                  outline-none
                  focus:border-[#904100]
                  transition
                "
              />
            </div>

            {/* EMAIL */}
            <div>

              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-[#2D1B12]
                  mb-3
                "
              >

                Email Address

              </label>

              <input
                type="email"

                placeholder="e.g. aswin@gmail.com"

                className="
                  w-full
                  bg-[#F8F4EE]
                  border border-[#E0D2C3]
                  rounded-2xl
                  px-5 py-4
                  outline-none
                  focus:border-[#904100]
                  transition
                "
              />
            </div>

            {/* SUBJECT */}
            <div>

              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-[#2D1B12]
                  mb-3
                "
              >

                Subject

              </label>

              <input
                type="text"

                placeholder="Bulk jaggery, palm products..."

                className="
                  w-full
                  bg-[#F8F4EE]
                  border border-[#E0D2C3]
                  rounded-2xl
                  px-5 py-4
                  outline-none
                  focus:border-[#904100]
                  transition
                "
              />
            </div>

            {/* MESSAGE */}
            <div>

              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-[#2D1B12]
                  mb-3
                "
              >

                Message Content

              </label>

              <textarea
                rows="6"

                placeholder="Details of your request..."

                className="
                  w-full
                  bg-[#F8F4EE]
                  border border-[#E0D2C3]
                  rounded-2xl
                  px-5 py-4
                  outline-none
                  resize-none
                  focus:border-[#904100]
                  transition
                "
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"

              className="
                bg-[#904100]
                hover:bg-[#7A3600]
                transition-all duration-300
                text-white
                px-8 py-4
                rounded-2xl
                font-semibold
                flex items-center gap-3
                shadow-sm hover:shadow-lg
              "
            >

              Send Message

              <Send size={18} />
            </button>
          </form>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-8">

          {/* DISTRICT CARD */}
          <div
            className="
              bg-gradient-to-br
              from-white
              to-[#FAF6F1]
              rounded-[32px]
              p-6
              border border-[#E8DDD0]
              shadow-sm
            "
          >

            {/* HEADER */}
            <div
              className="
                flex flex-col sm:flex-row
                sm:items-center
                sm:justify-between
                gap-4
                mb-8
              "
            >

              <div>

                <div
                  className="
                    flex items-center gap-3
                    mb-3
                  "
                >

                  <MapPinned
                    className="
                      w-7 h-7
                      text-[#904100]
                    "
                  />

                  <h2
                    className="
                      text-2xl
                      font-bold
                      text-[#2D1B12]
                      uppercase
                      tracking-wide
                    "
                  >

                    Interactive Palmyra Districts

                  </h2>
                </div>

                <p className="text-[#8A7A68]">

                  Connect with organic co-operative partners.

                </p>
              </div>

              <span
                className="
                  bg-[#EEF3EA]
                  text-[#4E6B4E]
                  px-4 py-2
                  rounded-xl
                  text-sm
                  font-semibold
                  w-fit
                "
              >

                Southern Zone Active

              </span>
            </div>

            {/* DISTRICTS */}
            <div
              className="
                grid grid-cols-1 sm:grid-cols-3
                gap-3 mb-8
              "
            >

              {districts.map(
                (district, index) => (

                  <button
                    key={index}

                    className={`
                      rounded-2xl
                      py-5
                      text-center
                      transition duration-300
                      hover:-translate-y-1

                      ${district.active
                        ? "border-2 border-[#904100] bg-[#FFF8F1]"
                        : "border border-[#E0D2C3] bg-white hover:bg-[#F8F1E8]"
                      }
                    `}
                  >

                    <h3
                      className="
                        font-bold
                        text-[#2D1B12]
                        text-lg
                      "
                    >

                      {district.code}

                    </h3>

                    <p
                      className="
                        text-sm
                        text-[#7A6855]
                        mt-1
                      "
                    >

                      {district.name}

                    </p>
                  </button>
                )
              )}
            </div>

            {/* INFO CARD */}
            <div
              className="
                bg-[#F9F5F0]
                rounded-3xl
                p-6
                border border-[#E8DDD0]
                hover:shadow-md
                transition duration-300
              "
            >

              <div
                className="
                  flex flex-col sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-4
                  mb-6
                "
              >

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#904100]
                  "
                >

                  Tirunelveli District

                </h3>

                <span
                  className="
                    bg-[#EEF3EA]
                    text-[#4E6B4E]
                    px-4 py-2
                    rounded-xl
                    text-sm
                    font-semibold
                    w-fit
                  "
                >

                  145 Active Families

                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">

                <div>

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[2px]
                      text-[#9A8A78]
                    "
                  >

                    Primary Cooperative

                  </p>

                  <h4
                    className="
                      text-lg
                      font-semibold
                      text-[#2D1B12]
                      leading-7
                      mt-2
                    "
                  >

                    Sivalaperi Palm Climbers Association Ltd

                  </h4>
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[2px]
                      text-[#9A8A78]
                    "
                  >

                    Supplied Products

                  </p>

                  <h4
                    className="
                      text-lg
                      font-semibold
                      text-[#2D1B12]
                      leading-7
                      mt-2
                    "
                  >

                    Organic Karuppatti Jaggery

                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT CARDS */}
          <div className="grid sm:grid-cols-3 gap-4">

            {/* ADDRESS */}
            <div
              className="
                bg-white
                rounded-3xl
                p-6
                border border-[#E8DDD0]
                shadow-sm
                hover:-translate-y-1
                hover:shadow-lg
                transition duration-300
              "
            >

              <MapPin
                className="
                  w-8 h-8
                  text-[#904100]
                  mb-5
                "
              />

              <h3
                className="
                  text-lg
                  font-semibold
                  text-[#2D1B12]
                  mb-3
                "
              >

                Head Office

              </h3>

              <p
                className="
                  text-[#6B4F3B]
                  leading-7
                  text-sm
                "
              >

                Thanjavur, Tamil Nadu, India

              </p>
            </div>

            {/* PHONE */}
            <div
              className="
                bg-white
                rounded-3xl
                p-6
                border border-[#E8DDD0]
                shadow-sm
                hover:-translate-y-1
                hover:shadow-lg
                transition duration-300
              "
            >

              <Phone
                className="
                  w-8 h-8
                  text-[#904100]
                  mb-5
                "
              />

              <h3
                className="
                  text-lg
                  font-semibold
                  text-[#2D1B12]
                  mb-3
                "
              >

                Call Us

              </h3>

              <p
                className="
                  text-[#6B4F3B]
                  text-sm
                "
              >

                +91 98765 43210

              </p>
            </div>

            {/* EMAIL */}
            <div
              className="
                bg-white
                rounded-3xl
                p-6
                border border-[#E8DDD0]
                shadow-sm
                hover:-translate-y-1
                hover:shadow-lg
                transition duration-300
              "
            >

              <Mail
                className="
                  w-8 h-8
                  text-[#904100]
                  mb-5
                "
              />

              <h3
                className="
                  text-lg
                  font-semibold
                  text-[#2D1B12]
                  mb-3
                "
              >

                Email

              </h3>

              <p
                className="
                  text-[#6B4F3B]
                  text-sm
                  break-all
                "
              >

                support@panaimaram.com

              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;