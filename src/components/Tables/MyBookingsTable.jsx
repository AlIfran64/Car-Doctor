"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DeleteBookingBtn from '@/app/my-bookings/components/DeleteBookingBtn';


export default function MyBookingsTable({ data }) {

  return (
    <div>
      <div className="bg-[url('/assets/images/checkout/checkout.png')] bg-cover bg-center h-[300px] w-full rounded-lg relative">

        {/* Overlay */}
        <div className='bg-black/60 bg-opacity-50 h-full w-full rounded-lg flex items-center '>
          <div className='w-full'>
            <h1 className="text-white text-4xl font-bold mx-24">
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

      <div className="my-32">

        <table className="table w-full">
          <thead className='bg-[#F3F3F3]'>
            <tr >
              <th>Service Image</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Booking Date</th>
              <th>Phone</th>
              <th>Address</th>
              <th className='text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className='border-b border-gray-300'>
                <th>
                  <Image className='rounded' src={item.serviceImage} width={150} height={150} alt='img'></Image>
                </th>
                <td>{item.serviceName}</td>
                <td>{item.servicePrice}</td>
                <td>{item.date}</td>
                <td>{item.phone}</td>
                <td>{item.address}</td>
                <td>
                  <div className="flex justify-center items-center space-x-3">
                    <Link href={`/my-bookings/${item._id}`}>
                      <button className="px-4 py-2 bg-gray-600 text-white font-semibold rounded cursor-pointer">Edit</button>
                    </Link>

                    {/* Delete */}
                    <DeleteBookingBtn id={item._id}></DeleteBookingBtn>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
}
