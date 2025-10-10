"use client"
import React from 'react'
import { signIn } from "next-auth/react"
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import SocialLogin from './SocialLogin';


export default function LoginForm() {

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.ok) {
        toast.success("Login successful!");
        form.reset();
        router.push("/");
      } else {
        toast.error(res?.error || "Invalid email or password!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again!");
    }
  }

  return (
    <div className='border border-[#D0D0D0] p-15 rounded-lg'>
      <h1 className='text-3xl font-bold text-center mb-8'>Login</h1>

      <form onSubmit={handleSubmit} className='w-full space-y-5'>

        {/* Email */}
        <label className='form-control w-full'>
          <div className='label w-full mb-1'>
            <span className='label-text font-bold'>Email</span>
          </div>
          <input type="text" placeholder='Your email' className='input input-bordered w-full mb-8' name='email' />
        </label>

        {/* Password */}
        <label className='form-control w-full'>
          <div className='label w-full mb-1'>
            <span className='label-text font-bold'>Password</span>
          </div>
          <input type="password" placeholder='Your password' className='input input-bordered w-full mb-8' name='password' />
        </label>

        <button className='w-full bg-[#FF3811] hover:bg-[#e14728] text-white font-semibold py-2 rounded-lg cursor-pointer'>Login</button>
      </form>

      <p className='text-center my-8 text-[#444]'>Or Sign in with</p>

      <SocialLogin></SocialLogin>

      <p className='text-center mt-10 text-[#737373]'>Didn't have an account? <Link href={"register"}><span className='text-[#FF3811] font-semibold'>Register</span></Link></p>
    </div>
  )
}
