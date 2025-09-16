import Image from 'next/image'
import React from 'react'

export default function ContactCard() {
  return (
    <div className='w-11/12 mx-auto my-16 lg:my-25 bg-black rounded-lg p-15 flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0'>

      {/* left */}
      <div className='flex items-center gap-3'>
        <div>
          <Image src={"/assets/icons/timetable.svg"} width={40} height={40} alt='time table icon' />
        </div>
        <div>
          <p className='text-white'>We are open monday-friday</p>
          <p className='text-white text-2xl font-bold'>7:00 am - 9:00 pm</p>
        </div>
      </div>

      {/* middle */}
      <div className='flex items-center gap-3'>
        <div>
          <Image src={"/assets/icons/phone.svg"} width={40} height={40} alt='time table icon' />
        </div>
        <div>
          <p className='text-white'>Have a question?</p>
          <p className='text-white text-2xl font-bold'>+2546 251 2658</p>
        </div>
      </div>

      {/* right */}
      <div className='flex items-center gap-3'>
        <div>
          <Image src={"/assets/icons/location.svg"} width={40} height={40} alt='time table icon' />
        </div>
        <div>
          <p className='text-white'>Need a repair? our address</p>
          <p className='text-white text-2xl font-bold'>Liza Street, New York</p>
        </div>
      </div>
    </div>
  )
}
