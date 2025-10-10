import Image from 'next/image'
import React from 'react'
import RegisterForm from './components/RegisterForm'

export default function Register() {
  return (
    <div className='mt-10 mb-20'>
      <div className='w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-10'>

        {/* left image */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <Image
            src="/assets/images/login/login.svg"
            width={600}
            height={500}
            alt='register'
            className="w-full max-w-[600px] h-auto"
          />
        </div>

        {/* right form */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
