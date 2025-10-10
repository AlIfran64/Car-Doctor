import Image from 'next/image';
import React from 'react';

export default function WhyChooseUs() {
  return (
    <div className='w-11/12 mx-auto my-16 lg:my-25'>
      {/* Header */}
      <h1 className='text-[#FF3811] text-lg sm:text-xl font-bold text-center mb-2 sm:mb-5'>Core Features</h1>
      <p className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 text-center'>Why Choose Us</p>
      <p className='text-sm sm:text-base font-normal text-[#737373] text-center'>
        The majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden sm:block' />
        words which don't look even slightly believable.
      </p>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6 lg:mt-12'>

        {[
          { title: "Expert Team", src: "/assets/icons/group.svg" },
          { title: "Timely Delivery", src: "/assets/icons/watch.png" },
          { title: "24/7 Support", src: "/assets/icons/person.svg" },
          { title: "Best Equipment", src: "/assets/icons/Wrench.svg" },
          { title: "100% Guaranty", src: "/assets/icons/check.svg" },
          { title: "Fast Delivery", src: "/assets/icons/deliveryt.svg" },
        ].map((item, index) => (
          <div
            key={index}
            className='border border-[#E8E8E8] p-4 sm:p-5 rounded-lg flex flex-col items-center cursor-pointer group transition hover:bg-[#FF3811]'
          >
            <div className='w-12 h-12 sm:w-16 sm:h-16 relative'>
              <Image
                src={item.src}
                alt={item.title}
                fill
                className='object-contain transition duration-300 group-hover:filter group-hover:brightness-0 group-hover:invert'
              />
            </div>
            <p className='text-sm sm:text-lg font-bold mt-3 sm:mt-5 text-center transition group-hover:text-white'>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
