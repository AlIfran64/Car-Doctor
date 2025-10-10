"use client"
import { useSession } from 'next-auth/react';
import React from 'react'
import toast from 'react-hot-toast';

export default function CheckoutForm({ data }) {

  const { data: session } = useSession();

  // Handle Checkout
  const handleCheckout = async (e) => {
    e.preventDefault();

    const form = e.target;
    const checkoutPayload = {
      customerName: form.name.value,
      email: form.email.value,
      date: form.date.value,
      amount: form.amount.value,
      phone: form.phone.value,
      address: form.address.value,
      service: data?._id,
      serviceName: data?.title,
      serviceImage: data?.img,
      servicePrice: data?.price
    }

    const res = await fetch('http://localhost:3000/api/service', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(checkoutPayload)
    })

    const postedResponse = await res.json();

    if (postedResponse.acknowledged) {
      toast.success('Order Placed Successfully');
    }

    form.reset();
  }

  return (
    <div className='my-16 px-4 sm:px-6 lg:px-24 py-16 bg-[#F3F3F3] rounded-lg'>
      <h1 className='text-3xl text-center font-bold mb-12 sm:mb-16'>Service: {data?.title}</h1>

      <form onSubmit={handleCheckout} className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Name */}
        <input
          className='bg-white p-3.5 rounded-lg w-full cursor-not-allowed text-gray-400'
          type="text"
          name='name'
          defaultValue={session?.user?.name}
          readOnly
        />

        {/* Email */}
        <input
          className='bg-white p-3.5 rounded-lg w-full cursor-not-allowed text-gray-400'
          type="email"
          name='email'
          defaultValue={session?.user?.email}
          readOnly
        />

        {/* Amount */}
        <input
          className='bg-white p-3.5 rounded-lg w-full cursor-not-allowed text-gray-400'
          type="number"
          name='amount'
          defaultValue={data?.price}
          readOnly
        />

        {/* Date */}
        <input
          className='bg-white p-3.5 rounded-lg w-full'
          type="date"
          name='date'
        />

        {/* Phone */}
        <input
          className='bg-white p-3.5 rounded-lg w-full'
          type="text"
          placeholder='Your Phone'
          name='phone'
        />

        {/* Address */}
        <input
          className='bg-white p-3.5 rounded-lg w-full'
          type="text"
          placeholder='Your Address'
          name='address'
        />

        {/* Submit Button */}
        <button
          className='bg-[#FF3811] hover:bg-[#da4628] text-white px-6 py-3 rounded-lg col-span-1 lg:col-span-2 w-full font-semibold mt-2'
          type='submit'>
          Order Confirm
        </button>
      </form>
    </div>
  )
}
