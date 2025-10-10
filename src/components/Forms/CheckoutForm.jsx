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
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const amount = form.amount.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const checkoutPayload = {
      customerName: name,
      email,
      date,
      amount,
      phone,
      address,
      service: data?._id,
      serviceName: data?.title,
      serviceImage: data?.img,
      servicePrice: data?.price
    }

    console.log(checkoutPayload);

    const res = await fetch('http://localhost:3000/api/service', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(checkoutPayload)
    })
    const postedResponse = await res.json();
    console.log(postedResponse);

    if (postedResponse.acknowledged) {
      toast.success('Order Placed Successfully');
    }


    form.reset();


  }

  return (

    <div className='my-32 bg-[#F3F3F3] rounded-lg p-24'>

      <h1 className='text-3xl text-center font-bold mb-20'>Service: {data?.title}</h1>

      <form onSubmit={handleCheckout} className='grid grid-cols-1 lg:grid-cols-2 gap-6'>

        {/* name */}
        <input
          className='bg-white p-3.5 rounded-lg cursor-not-allowed'
          type="text"
          placeholder='Your Name'
          name='name'
          defaultValue={session?.user?.name}
          readOnly />

        {/* email */}
        <input
          className='bg-white p-3.5 rounded-lg cursor-not-allowed'
          type="email"
          placeholder='Email'
          name='email'
          defaultValue={session?.user?.email}
          readOnly />

        {/* due amount */}
        <input
          className='bg-white p-3.5 rounded-lg cursor-not-allowed'
          type="number"
          placeholder='Due Amount'
          name='amount'
          defaultValue={data?.price}
          readOnly />

        {/* date */}
        <input
          className='bg-white p-3.5 rounded-lg'
          type="date"
          placeholder=''
          name='date' />

        {/* phone */}
        <input
          className='bg-white p-3.5 rounded-lg'
          type="text"
          placeholder='Phone'
          name='phone' />

        {/* address */}
        <input
          className='bg-white p-3.5 rounded-lg'
          type="text"
          placeholder='Your Address'
          name='address' />

        <button className='bg-[#FF3811] hover:bg-[#da4628] text-white px-6 py-2 rounded-lg col-span-2 cursor-pointer font-semibold' type='submit'>Order Confirm</button>
      </form>
    </div>



  )
}
