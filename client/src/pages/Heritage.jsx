import React from "react";

import panaimaram from "../assets/images/panaimaram.jpg";
import about from "../assets/images/about.jpg";
import healthbenefits from "../assets/images/healthbenefits.jpg";

import {
  Leaf,
  HeartPulse,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const varieties = [
  {
    title: "Karuppatti",
    desc: "Traditional palm jaggery rich in minerals and natural sweetness.",
  },

  {
    title: "Palm Candy",
    desc: "Natural crystal sweetener used in Siddha and Ayurveda.",
  },

  {
    title: "Nungu",
    desc: "Refreshing summer fruit from the Palmyra tree.",
  },

  {
    title: "Palm Leaf Crafts",
    desc: "Eco-friendly handcrafted traditional Tamil products.",
  },
];

const benefits = [
  "Rich in Iron & Minerals",
  "Improves Digestion",
  "Natural Energy Booster",
  "Low Glycemic Sweetener",
  "Chemical Free & Organic",
  "Supports Healthy Lifestyle",
];

const Heritage = () => {
  return (
    <section className="bg-[#F5F1EB] text-[#2D1B12] overflow-hidden">

      {/* HERO IMAGE */}
      <div className="w-full bg-[#F5F1EB]">

        <img
          src={panaimaram}
          alt="Panai Maram"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ABOUT SECTION */}
      <div className="px-4 sm:px-6 lg:px-20 py-16 lg:py-24 bg-white">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-[#F3E4D2] text-[#904100] px-4 py-2 rounded-full text-sm font-medium mb-6">

              <Leaf className="w-4 h-4" />

              About Panai Maram
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#904100] leading-tight">
              Deeply Rooted in Tamil Culture
            </h2>

            <p className="mt-8 text-[#5C4033] leading-8 text-lg">
              The Palmyra tree, known as “Panai Maram” in Tamil,
              is one of the most valuable trees in Tamil Nadu.
              It is called “Karpaga Virutcham” because every
              part of the tree is useful.
            </p>

            <p className="mt-6 text-[#6B4F3B] leading-8">
              For generations, Tamil communities have depended
              on the Palmyra tree for food, shelter, crafts,
              medicine, and livelihood. Palm leaves were used
              for writing ancient Tamil manuscripts, while palm
              jaggery and palm candy became important traditional
              health foods.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="overflow-hidden rounded-[32px] shadow-xl bg-[#F5F1EB]">

            <img
              src={about}
              alt="Tamil Culture"
              className="
                w-full
                h-auto
                object-contain
              "
            />
          </div>
        </div>
      </div>

      {/* VARIETIES */}
      <div className="px-4 sm:px-6 lg:px-20 py-16 lg:py-24">

        <div className="text-center max-w-4xl mx-auto mb-16">

          <h2 className="text-4xl lg:text-5xl font-bold text-[#904100]">
            Traditional Varieties
          </h2>

          <p className="mt-6 text-[#6B4F3B] leading-8 text-lg">
            Panai Maram offers a wide range of natural products
            deeply connected with Tamil traditional lifestyles.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {varieties.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                p-8
                border border-[#E8DDD0]
                hover:-translate-y-1
                hover:shadow-lg
                transition duration-300
              "
            >

              <div className="w-14 h-14 rounded-2xl bg-[#F3E4D2] flex items-center justify-center mb-6">

                <Sparkles className="w-7 h-7 text-[#904100]" />
              </div>

              <h3 className="text-2xl font-semibold text-[#904100] mb-4">
                {item.title}
              </h3>

              <p className="text-[#6B4F3B] leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* HEALTH BENEFITS */}
      <div className="bg-white px-4 sm:px-6 lg:px-20 py-16 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-[32px] shadow-xl bg-[#F5F1EB]">

            <img
              src={healthbenefits}
              alt="Health Benefits"
              className="
                w-full
                h-auto
                object-contain
              "
            />
          </div>

          {/* CONTENT */}
          <div>

            <div className="inline-flex items-center gap-2 bg-[#F3E4D2] text-[#904100] px-4 py-2 rounded-full text-sm font-medium mb-6">

              <HeartPulse className="w-4 h-4" />

              Health Benefits
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-[#904100] leading-tight">
              Natural Wellness from Tradition
            </h2>

            <p className="mt-8 text-[#6B4F3B] leading-8 text-lg">
              Palm-based foods are naturally rich in nutrients
              and have been used in traditional Tamil medicine
              and healthy diets for generations.
            </p>

            {/* BENEFITS */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="
                    flex items-center gap-4
                    bg-[#F9F5F0]
                    rounded-2xl
                    px-5 py-4
                    border border-[#EFE2D3]
                  "
                >

                  <ShieldCheck className="w-5 h-5 text-[#904100]" />

                  <p className="font-medium text-[#2D1B12]">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CULTURE SECTION */}
      <div className="px-4 sm:px-6 lg:px-20 py-16 lg:py-24">

        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 bg-[#F3E4D2] text-[#904100] px-4 py-2 rounded-full text-sm font-medium mb-6">

            <Users className="w-4 h-4" />

            Tamil Tradition
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-[#904100] leading-tight">
            A Symbol of Tamil Identity
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#5C4033]">
            Panai Maram is more than a tree — it is a cultural
            identity of Tamil Nadu. It has supported village
            economies, inspired literature, and sustained
            rural families for centuries.
          </p>

          <p className="mt-6 text-[#6B4F3B] leading-8 max-w-4xl mx-auto">
            From traditional palm climbers to handcrafted
            artisans, the Palmyra ecosystem continues to
            preserve Tamil heritage and sustainable living.
          </p>

          {/* TAMIL QUOTE */}
          <div
            className="
              mt-16
              bg-white
              rounded-[32px]
              p-10
              border border-[#E8DDD0]
              shadow-sm
            "
          >

            <h3 className="text-3xl lg:text-5xl font-bold text-[#904100] leading-relaxed">

              “பனைமரம் தமிழரின்

              <span className="block">
                வாழ்வும் வளமும்.”
              </span>
            </h3>

            <p className="mt-6 text-[#6B4F3B] text-lg">
              Panai Maram is the pride, livelihood,
              and prosperity of Tamil people.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;