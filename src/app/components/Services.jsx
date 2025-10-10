import dbConnect, { collectionNameObj } from '@/library/dbConnect';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowLeft } from 'react-icons/go';

export default async function Services() {
  const servicesCollection = await dbConnect(collectionNameObj.servicesCollection);
  const data = await servicesCollection.find().toArray();

  return (
    <div id='services' className='w-11/12 mx-auto my-16 lg:my-25'>
      {/* Heading */}
      <h1 className='text-[#FF3811] text-lg sm:text-xl font-bold text-center mb-2 sm:mb-5'>Service</h1>
      <p className='text-3xl sm:text-5xl font-bold mb-3 sm:mb-5 text-center'>Our Service Area</p>
      <p className='text-sm sm:text-base font-normal text-[#737373] text-center'>
        The majority have suffered alteration in some form, by injected humour, or randomised <br className='hidden sm:block' /> words which don't look even slightly believable.
      </p>

      {/* Cards */}
      <div className='mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {data.map((item) => (
          <div key={item._id} className='border border-[#E8E8E8] rounded-lg p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300'>
            <div className="w-full h-[200px] sm:h-[208px] relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h1 className='mt-4 text-lg sm:text-2xl font-bold'>{item.title}</h1>
            <div className='flex items-center justify-between mt-2'>
              <p className='text-base sm:text-xl text-[#FF3811] font-semibold'>Price: {item.price}</p>
              <Link href={`/Services/${item._id}`}>
                <div className="p-1 rounded-full hover:bg-[#FF3811] cursor-pointer group">
                  <GoArrowLeft
                    className="transform rotate-180 text-[#FF3811] font-semibold group-hover:text-white"
                    size={25}
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className='flex justify-center mt-6 sm:mt-10'>
        <button className='border-2 border-[#FF3811] px-4 sm:px-5 py-2 sm:py-3 text-[#FF3811] rounded font-semibold cursor-pointer hover:bg-[#FF3811] hover:text-white transition-colors duration-300'>
          More Services
        </button>
      </div>
    </div>
  );
}
