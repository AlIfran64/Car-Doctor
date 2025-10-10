"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function DeleteBookingBtn({ id }) {

  const router = useRouter();

  const handleDelete = async (id) => {
    const res = await fetch(`https://car-doctor-eta-three.vercel.app/api/service/${id}`, {
      method: 'DELETE'
    });
    const data = await res.json();
    router.refresh();
  }

  return (

    <button onClick={() => handleDelete(id)}

      className="px-4 py-2 bg-red-600 text-white font-semibold rounded cursor-pointer"
    >
      Delete
    </button>

  )
}
