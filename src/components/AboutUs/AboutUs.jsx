import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="w-11/12 mx-auto my-16 lg:my-25 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-16">

      {/* Left side images */}
      <div className="relative w-full lg:w-1/2 ">
        {/* Main image */}
        <div className="relative w-[100%] sm:w-[460px] h-[250px] sm:h-[380px] rounded-lg overflow-hidden">
          <Image
            src="/assets/images/about_us/person.jpg"
            alt="person"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay image */}
        <div className="absolute top-40 sm:top-56 left-11 sm:left-60 w-[70%] sm:w-[327px] h-[180px] sm:h-[260px] rounded-lg border-[6px] sm:border-[10px] border-white overflow-hidden">
          <Image
            src="/assets/images/about_us/parts.jpg"
            alt="parts"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right side content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left mt-20 lg:mt-0">
        <h1 className="text-lg sm:text-xl font-bold text-[#FF3811] mb-3">
          About Us
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold mb-5 leading-snug">
          We are qualified <br /> & of experience <br /> in this field
        </h2>
        <p className="text-sm sm:text-base text-[#737373] mb-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.
        </p>
        <p className="text-sm sm:text-base text-[#737373] mb-6">
          The majority have suffered alteration in some form, by injected humour,
          or randomised words which don't look even slightly believable.
        </p>

        <button className="py-2.5 px-5 bg-[#FF3811] rounded-sm text-white cursor-pointer hover:bg-[#e63600] font-semibold transition">
          Get More Info
        </button>
      </div>
    </div>
  );
}
