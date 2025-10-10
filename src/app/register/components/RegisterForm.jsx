"use client"
import { registerUser } from '@/app/actions/auth/registerUser';
import Link from 'next/link';
import React from 'react'
import toast from 'react-hot-toast';

export default function RegisterForm() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (!name || !email || !password) {
      toast.error("Please fill in all fields!");
      return;
    }

    try {
      const res = await registerUser({ name, email, password });

      if (res?.success) {
        toast.success(res.message);
        form.reset();
      } else {
        toast.error(res.message || "Registration failed!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }

  }

  return (
    <div className='border border-[#D0D0D0] p-15 rounded-lg'>
      <h1 className='text-3xl font-bold text-center mb-8'>Register</h1>

      <form onSubmit={handleSubmit} className='w-full space-y-5'>
        {/* Name */}
        <label className='form-control w-full'>
          <div className='label w-full mb-1'>
            <span className='label-text font-bold'>Name</span>
          </div>
          <input type="text" placeholder='Your name' className='input input-bordered w-full mb-8' name='name' />
        </label>

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

        <button className='w-full bg-[#FF3811] hover:bg-[#e14728] text-white font-semibold py-2 rounded-lg cursor-pointer'>Register</button>
      </form>

      <p className='text-center mt-10 text-[#737373]'>Already have an account? <Link href={"login"}><span className='text-[#FF3811] font-semibold'>Login</span></Link></p>
    </div>
  )
}
