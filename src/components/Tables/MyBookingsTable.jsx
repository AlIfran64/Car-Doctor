"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DeleteBookingBtn from '@/app/my-bookings/components/DeleteBookingBtn';

export default function MyBookingsTable({ data }) {
  return (
    <div className="my-32 w-full">
      {/* Scrollable container for mobile */}
      <div className="overflow-x-auto">
        <table className="table w-full min-w-[700px] border-collapse">
          <thead className='bg-[#F3F3F3]'>
            <tr>
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
                  <div className="w-24 h-24 relative mx-auto">
                    <Image
                      className='rounded object-cover'
                      src={item.serviceImage}
                      fill
                      alt='img'
                    />
                  </div>
                </th>
                <td className="truncate max-w-[150px]">{item.serviceName}</td>
                <td>${item.servicePrice}</td>
                <td>{item.date}</td>
                <td className="truncate max-w-[120px]">{item.phone}</td>
                <td className="truncate max-w-[200px]">{item.address}</td>
                <td>
                  <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-3">
                    <Link href={`/my-bookings/${item._id}`}>
                      <button className="px-4 py-2 bg-gray-600 text-white font-semibold rounded cursor-pointer w-full sm:w-auto">Edit</button>
                    </Link>
                    <DeleteBookingBtn id={item._id} />
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
