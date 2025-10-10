// "use client"
import MyBookingsTable from '@/components/Tables/MyBookingsTable'
import { headers } from 'next/headers';
import React from 'react'

const fetchMyBookings = async () => {
  const res = await fetch('http://localhost:3000/api/service', {
    headers: await headers()
  });
  const d = await res.json();
  return d;
}

export default async function MyBookingsPage() {

  const data = await fetchMyBookings();


  return (
    <div className='w-11/12 mx-auto'>

      <div className="bg-[url('/assets/images/checkout/checkout.png')] bg-cover bg-center h-[300px] w-full rounded-lg relative">

        {/* Banner */}
        <div className="bg-[url('/assets/images/checkout/checkout.png')] bg-cover bg-center h-[300px] w-full rounded-lg relative">
          <div className='bg-black/60 h-full w-full rounded-lg flex items-center'>
            <div className='w-full px-4 lg:px-24'>
              <h1 className="text-white text-3xl sm:text-4xl font-bold text-center lg:text-left">
                My Bookings
              </h1>
              <div className='flex justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2'>
                <div
                  className='bg-[#FF3811] inline-block py-2 px-8'
                  style={{
                    clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                  }}>
                  <p className='text-white'>Home/My Bookings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MyBookingsTable data={data}></MyBookingsTable>
    </div>
  )
}
