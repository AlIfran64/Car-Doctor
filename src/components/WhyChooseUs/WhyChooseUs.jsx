import Image from 'next/image';
import React from 'react';

export default function WhyChooseUs() {
  return (
    <div className='w-11/12 mx-auto my-16 lg:my-25'>
      {/* Header */}
      <h1 className='text-[#FF3811] text-xl font-bold text-center mb-5'>Core Features</h1>
      <p className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 text-center'>Why Choose Us</p>
      <p className='text-base font-normal text-[#737373] text-center'>
        The majority have suffered alteration in some form, by injected humour, or randomised <br />
        words which don't look even slightly believable.
      </p>

      {/* Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-6 lg:mt-12'>

        {/* Expert Team */}
        <div className='border border-[#E8E8E8] p-5 rounded-lg flex flex-col items-center cursor-pointer group transition hover:bg-[#FF3811]'>
          {/* Image container */}
          <div className='w-16 h-16 relative'>
            <Image
              src={"/assets/icons/group.svg"}
              alt="Expert Team"
              fill
              className='object-contain transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'
            />
          </div>

          {/* Text */}
          <p className='text-lg font-bold mt-5 text-center transition group-hover:text-white'>
            Expert Team
          </p>
        </div>


        {/* Timely Delivery */}
        <div className='border border-[#E8E8E8] p-5 rounded-lg flex flex-col items-center cursor-pointer group transition hover:bg-[#FF3811]'>
          <div className='w-16 h-16 relative'>
            <Image
              src={"/assets/icons/watch.png"}
              alt="Timely Delivery"
              fill
              className='object-contain transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'
            />
          </div>
          <p className='text-lg font-bold mt-5 text-center transition group-hover:text-white'>Timely Delivery</p>
        </div>

        {/* 24/7 Support */}
        <div className='border border-[#E8E8E8] p-5 rounded-lg flex flex-col items-center cursor-pointer group transition hover:bg-[#FF3811]'>
          <div className='w-16 h-16 relative'>
            <Image
              src={"/assets/icons/person.svg"}
              alt="24/7 Support"
              fill
              className='object-contain transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'
            />
          </div>
          <p className='text-lg font-bold mt-5 text-center transition group-hover:text-white'>24/7 Support</p>
        </div>

        {/* Best Equipment */}
        <div className='border border-[#E8E8E8] p-5 rounded-lg flex flex-col items-center cursor-pointer group transition hover:bg-[#FF3811]'>
          <div className='w-16 h-16 relative'>
            <Image
              src={"/assets/icons/Wrench.svg"}
              alt="Best Equipment"
              fill
              className='object-contain transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'
            />
          </div>
          <p className='text-lg font-bold mt-5 text-center transition group-hover:text-white'>Best Equipment</p>
        </div>

        {/* 100% Guaranty */}
        <div className='border border-[#E8E8E8] p-5 rounded-lg flex flex-col items-center cursor-pointer group transition hover:bg-[#FF3811]'>
          <div className='w-16 h-16 relative'>
            <Image
              src={"/assets/icons/check.svg"}
              alt="100% Guaranty"
              fill
              className='object-contain transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'
            />
          </div>
          <p className='text-lg font-bold mt-5 text-center transition group-hover:text-white'>100% Guaranty</p>
        </div>

        {/* Timely Delivery */}
        <div className='border border-[#E8E8E8] p-5 rounded-lg flex flex-col items-center cursor-pointer group transition hover:bg-[#FF3811]'>
          <div className='w-16 h-16 relative'>
            <Image
              src={"/assets/icons/deliveryt.svg"}
              alt="Timely Delivery"
              fill
              className='object-contain transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'
            />
          </div>
          <p className='text-lg font-bold mt-5 text-center transition group-hover:text-white'>Timely Delivery</p>
        </div>
      </div>
    </div>
  );
}
