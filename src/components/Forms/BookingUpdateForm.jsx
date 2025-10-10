"use client"
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
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

    const checkoutPayload = { date, amount, phone, address };
    console.log(checkoutPayload);

    try {
      const res = await fetch(`http://localhost:3000/api/my-bookings/${data._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(checkoutPayload),
      });

      const postedResponse = await res.json();
      console.log(postedResponse);

      if (postedResponse.acknowledged) {
        toast.success('Booking Updated Successfully');
        router.push("/my-bookings");
      } else {
        toast.error('Failed to update booking');
      }
    } catch (error) {
      toast.error('Something went wrong!');
      console.error(error);
    }

    form.reset();
  }

  return (
    <div className="my-16 sm:my-24 p-4 sm:p-6 md:p-12 lg:p-24 bg-[#F3F3F3] rounded-lg">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16">
        Service: {data?.serviceName}
      </h1>

      <form onSubmit={handleCheckout} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          defaultValue={session?.user?.name}
          readOnly
          className="bg-white p-3 rounded-lg cursor-not-allowed text-gray-400 w-full"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          defaultValue={session?.user?.email}
          readOnly
          className="bg-white p-3 rounded-lg cursor-not-allowed text-gray-400 w-full"
        />

        {/* Amount */}
        <input
          type="number"
          name="amount"
          placeholder="Due Amount"
          defaultValue={data?.servicePrice}
          readOnly
          className="bg-white p-3 rounded-lg cursor-not-allowed text-gray-400 w-full"
        />

        {/* Date */}
        <input
          type="date"
          name="date"
          defaultValue={data?.date}
          className="bg-white p-3 rounded-lg w-full"
        />

        {/* Phone */}
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          defaultValue={data?.phone}
          className="bg-white p-3 rounded-lg w-full"
        />

        {/* Address */}
        <input
          type="text"
          name="address"
          placeholder="Your Address"
          defaultValue={data?.address}
          className="bg-white p-3 rounded-lg w-full"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#FF3811] hover:bg-[#da4628] text-white px-6 py-3 rounded-lg col-span-1 sm:col-span-2 font-semibold transition-all duration-200"
        >
          Update Booking
        </button>
      </form>
    </div>
  )
}
