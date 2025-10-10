"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

export default function BookingUpdateForm({ data }) {

  const { data: session } = useSession();
  const router = useRouter();

  // Handle Checkout
  const handleCheckout = async (e) => {
    e.preventDefault();

    const form = e.target;
    const date = form.date.value;
    const amount = form.amount.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const checkoutPayload = {

      date,
      amount,
      phone,
      address,

    }

    console.log(checkoutPayload);

    const res = await fetch(`http://localhost:3000/api/my-bookings/${data._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(checkoutPayload)
    })
    const postedResponse = await res.json();
    console.log(postedResponse);

    if (postedResponse.acknowledged) {
      toast.success('Booking Updated Successfully');
      router.push("/my-bookings")
    }


    form.reset();


  }

  return (

    <div className='my-32 bg-[#F3F3F3] rounded-lg p-24'>

      <h1 className='text-3xl text-center font-bold mb-20'>Service: {data?.serviceName}</h1>

      <form onSubmit={handleCheckout} className='grid grid-cols-1 lg:grid-cols-2 gap-6'>

        {/* name */}
        <input
          className='bg-white p-3.5 rounded-lg cursor-not-allowed text-gray-400'
          type="text"
          placeholder='Your Name'
          name='name'
          defaultValue={session?.user?.name}
          readOnly />

        {/* email */}
        <input
          className='bg-white p-3.5 rounded-lg cursor-not-allowed text-gray-400'
          type="email"
          placeholder='Email'
          name='email'
          defaultValue={session?.user?.email}
          readOnly />

        {/* due amount */}
        <input
          className='bg-white p-3.5 rounded-lg cursor-not-allowed text-gray-400'
          type="number"
          placeholder='Due Amount'
          name='amount'
          defaultValue={data?.servicePrice}
          readOnly />

        {/* date */}
        <input
          className='bg-white p-3.5 rounded-lg'
          type="date"
          placeholder=''
          name='date'
          defaultValue={data?.date} />

        {/* phone */}
        <input
          className='bg-white p-3.5 rounded-lg'
          type="text"
          placeholder='Phone'
          name='phone'
          defaultValue={data?.phone} />

        {/* address */}
        <input
          className='bg-white p-3.5 rounded-lg'
          type="text"
          placeholder='Your Address'
          name='address'
          defaultValue={data?.address} />

        <button className='bg-[#FF3811] hover:bg-[#da4628] text-white px-6 py-2 rounded-lg col-span-2 cursor-pointer font-semibold' type='submit'>Update Booking</button>
      </form>
    </div>



  )
}
