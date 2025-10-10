"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function SocialLogin() {

  const session = useSession();

  const router = useRouter();

  const handleSocialLogin = (providerName) => {
    signIn(providerName);
  }

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
      toast.success("Login successful!");
    }
  }, [session?.status])

  return (
    <div className='flex items-center justify-center gap-5'>
      <div onClick={() => handleSocialLogin("google")} className='bg-[#F5F5F8] p-3 rounded-full cursor-pointer'>
        <FaGoogle></FaGoogle>
      </div>

      <div onClick={() => handleSocialLogin("github")} className='bg-[#F5F5F8] p-3 rounded-full cursor-pointer'>
        <FaGithub></FaGithub>
      </div>
    </div>
  )
}
