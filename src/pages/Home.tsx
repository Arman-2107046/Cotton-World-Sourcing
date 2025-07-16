// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { motion } from "framer-motion";

// Home page component
const Home = () => {
  // const businessAreas = [
  //   {
  //     title: "Knitwear",
  //     description:
  //       "Specializing in t-shirts, sweatshirts, leggings, babywear, and sportswear made from high-quality knit fabrics.",
  //     image: "images/backgrounds/bg1.png",
  //   },
  //   {
  //     title: "Woven Garments",
  //     description:
  //       "Offering shirts, trousers, jackets, uniforms, and fashion dresses made from structured woven fabrics.",
  //     image: "images/backgrounds/bg1.png",
  //   },
  //   {
  //     title: "Denim",
  //     description:
  //       "Expertise in denim jeans, jackets, skirts, and overalls with various washes, treatments, and finishes.",
  //     image: "images/backgrounds/bg1.png",
  //   },
  //   {
  //     title: "Kidswear",
  //     description:
  //       "Comfortable and colorful clothing for babies, toddlers, and children including rompers, sets, and schoolwear.",
  //     image: "images/backgrounds/bg1.png",
  //   },
  // ];

  return (
    <div className="bg-slate-100">
      {/* HERO SECTION WITH SEQUENTIAL BG  */}

      <Navbar />

      <section className="relative h-[90vh] overflow-hidden text-[#60646C] bg-slate-200 font-calistoga">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-[0.4]"
          style={{
            backgroundImage: "url('/bg-images/hero-img1.jpg')",
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate/70 to-gray/90" />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1
            className="space-y-1 text-4xl font-bold sm:text-6xl lg:text-7xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div>CRAFTED WITH </div>
            <div>PRECISION</div>
            <div>IN EVERY THREAD</div>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#60646C]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Trusted Apparel Exporter{" "}
          </motion.p>

          <motion.a
            href="#about"
            className="relative inline-flex items-center gap-3 px-8 py-3 mt-10 text-sm font-semibold tracking-wider text-[#211F26] uppercase transition duration-300 border-2 border-white rounded-full hover:bg-white hover:text-black group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span>Discover More</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
