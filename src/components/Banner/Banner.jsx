"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";

const images = [
  "/assets/images/banner/1.jpg",
  "/assets/images/banner/2.jpg",
  "/assets/images/banner/3.jpg",
  "/assets/images/banner/4.jpg",
  "/assets/images/banner/5.jpg",
  "/assets/images/banner/6.jpg",

]

export default function Banner() {

  const [currentSlide, setCurrentSlide] = useState(0);


  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-11/12 mx-auto h-[400px] md:h-[500px] lg:h-[550px] rounded-lg relative overflow-hidden">

      {/* Banner Image */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="banner"
          fill
          className={`object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          priority
        />
      ))}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0) 100%)",
        }}
      ></div>

      {/* Banner Text */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-16 lg:px-24 text-white">

        <h1 className="text-2xl lg:text-6xl font-bold lg:leading-tight">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>

        <p className="mt-2 sm:mt-4 text-xs sm:text-lg font-light leading-6 sm:leading-7 lg:leading-8">
          There are many variations of passages of available, but <br />
          the majority have suffered alteration in some form
        </p>

        <div className="flex flex-col sm:flex-row mt-4 sm:mt-6 space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="px-3 py-1.5 lg:px-6 lg:py-3 bg-[#FF3811] rounded-sm text-white cursor-pointer border border-[#FF3811] font-semibold hover:bg-[#e63600] transition">
            Discover More
          </button>
          <button className="px-3 py-1.5 lg:px-6 lg:py-3 rounded-sm text-white font-semibold border border-white cursor-pointer hover:bg-white hover:text-black hover:border-white transition">
            Latest Project
          </button>
        </div>

        <div className="space-x-4 flex justify-center lg:justify-end items-center lg:absolute bottom-15 right-20 mt-3 lg:mt-0">
          <button
            onClick={prevSlide}
            className="bg-[#FFFFFF33] p-2 lg:p-4 rounded-full text-white cursor-pointer"><GoArrowLeft /></button>
          <button
            onClick={nextSlide}
            className="bg-[#FF3811] p-2 lg:p-4 rounded-full text-white cursor-pointer"><GoArrowLeft className="transform rotate-180" /></button>
        </div>

      </div>
    </div>
  );
}
