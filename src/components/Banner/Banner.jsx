import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="w-11/12 mx-auto h-[400px] md:h-[500px] lg:h-[550px] rounded-lg relative overflow-hidden">

      {/* Banner Image */}
      <Image
        src="/assets/images/banner/5.jpg"
        alt="banner"
        fill
        className="object-cover"
        priority
      />

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

      </div>
    </div>
  );
}
