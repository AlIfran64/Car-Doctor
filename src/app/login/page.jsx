import Image from 'next/image'
import React from 'react'
import LoginForm from './components/LoginForm'

export default function Login() {
  return (
    <div className='mt-10 mb-20'>
      <div className='w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-center gap-10'>

        {/* left */}
        <div className='w-1/2 hidden lg:block'>
          <Image src={"/assets/images/login/login.svg"} width={600} height={500} alt='login'></Image>
        </div>

        {/* right */}
        <div className='w-1/2 hidden lg:block'>
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  )
}
