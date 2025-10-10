import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#151515] py-10 lg:py-30'>

      <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-4 lg:place-items-center items-start space-y-5 lg:space-y-0'>

        {/* left */}
        <div >
          <Image src={"/assets/icons/footer_logo.png"} width={80} height={80} alt='footer_img' />
          <p className='text-[#E8E8E8] my-5 text-justify'>Car Doctor provides trusted auto repair and maintenance services with expert technicians and modern equipment. Your car’s health is our priority.
          </p>

          {/* Social icons */}
          <div className='flex justify-start items-center gap-2'>

            {/* google */}
            <Link href={"https://www.google.com"}>
              <div className='p-2 bg-neutral-800 rounded-full cursor-pointer'>
                <Image src={"/assets/icons/google.png"} width={20} height={20} alt='google' />
              </div>
            </Link>

            {/* twitter */}
            <Link href={"https://www.twitter.com"}>
              <div className='p-2 bg-neutral-800 rounded-full cursor-pointer'>
                <Image src={"/assets/icons/twitter.png"} width={20} height={20} alt='twitter' />
              </div>
            </Link>

            {/* Instagram*/}
            <Link href={"https://www.instagram.com"}>
              <div className='p-2 bg-neutral-800 rounded-full cursor-pointer'>
                <Image src={"/assets/icons/instagram.png"} width={20} height={20} alt='instagram' />
              </div>
            </Link>

            {/* Linkedin */}
            <Link href={"https://www.linkedin.com"}>
              <div className='p-2 bg-neutral-800 rounded-full cursor-pointer'>
                <Image src={"/assets/icons/linkedin.png"} width={20} height={20} alt='linkedin' />
              </div>
            </Link>

          </div>
        </div>


        {/* About */}
        <div>
          <h1 className='text-white text-xl font-bold mb-5'>About</h1>
          <div className='flex flex-col'>
            <Link href={"/"} className='text-[#E8E8E8]'>Home</Link>
            <Link href={"/service"} className='text-[#E8E8E8] my-2'>Service</Link>
            <Link href={"/contact"} className='text-[#E8E8E8]'>Contact</Link>
          </div>
        </div>

        {/* Company*/}
        <div>
          <h1 className='text-white text-xl font-bold mb-5'>Company</h1>
          <p className='text-[#E8E8E8] mb-2 cursor-pointer'>Why Car Doctor</p>
          <p className='text-[#E8E8E8] cursor-pointer'>About</p>
        </div>

        {/* Support*/}
        <div>
          <h1 className='text-white text-xl font-bold mb-5'>Support</h1>
          <p className='text-[#E8E8E8] cursor-pointer'>Support Center</p>
          <p className='text-[#E8E8E8] my-2 cursor-pointer'>Feedback</p>
          <p className='text-[#E8E8E8] cursor-pointer'>Accessibility</p>
        </div>
      </div>
    </div>
  )
}
