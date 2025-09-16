import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <div className='w-11/12 mx-auto my-25 flex justify-between items-start gap-15'>

      {/* Left side images */}
      <div className="relative w-1/2">
        {/* Main image */}
        <div className="relative w-[460px] h-[380px] rounded-lg overflow-hidden">
          <Image
            src="/assets/images/about_us/person.jpg"
            alt="person"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlay image */}
        <div className="absolute top-55 left-60 w-[327px] h-[260px] rounded-lg border-[10px] border-white overflow-hidden">
          <Image
            src="/assets/images/about_us/parts.jpg"
            alt="parts"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* right */}
      <div className='w-1/2'>
        <h1 className='text-xl font-bold text-[#FF3811] mb-5'>About Us</h1>
        <h2 className='text-5xl font-bold mb-7 leading-15'>We are qualified <br /> & of experience <br /> in this field</h2>
        <p className='text-base text-[#737373] mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        <p className='text-base text-[#737373] mb-7'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

        <button className='py-2 px-4 bg-[#FF3811] rounded-sm text-white cursor-pointer'>
          Get More Info
        </button>
      </div>
    </div>
  )
}
