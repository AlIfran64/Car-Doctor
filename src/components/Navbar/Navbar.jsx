"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  console.log(session);

  return (
    <div>
      {/* Desktop */}
      <div className="w-11/12 mx-auto py-5 hidden lg:flex justify-between items-center">
        {/* Left */}
        <div>
          <Image src={"/assets/logo.svg"} width={80} height={80} alt="logo" />
        </div>

        {/* Middle */}
        <div className="space-x-10 text-base font-semibold">
          <Link className="hover:text-[#FF3811]" href={"/"}>Home</Link>
          <Link className="hover:text-[#FF3811]" href={"/#services"}>Services</Link>
          <Link className="hover:text-[#FF3811]" href={"/my-bookings"}>My Bookings</Link>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-3">
          {/* Shopping cart */}
          <div>
            <svg
              className="cursor-pointer hover:text-[#FF3811]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6516 3.34835C13.9484 2.64509 12.9945 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34833 3.34835C8.64507 4.05161 8.24998 5.00544 8.24998 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.24998C4.09219 21.7502 3.93613 21.7171 3.79193 21.6531C3.64774 21.589 3.51863 21.4953 3.41301 21.3781C3.30738 21.2608 3.2276 21.1227 3.17884 20.9726C3.13008 20.8226 3.11343 20.6639 3.12999 20.507L4.39399 8.507C4.42314 8.23056 4.55361 7.9747 4.76024 7.78876C4.96686 7.60281 5.23501 7.49995 5.51298 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Search */}
          <div>
            <svg
              className="cursor-pointer hover:text-[#FF3811]"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3964 3.78941 12.4887 2.99921 10.4995 2.99921C8.51029 2.99921 6.60256 3.78941 5.19599 5.19599C3.78941 6.60256 2.99921 8.51029 2.99921 10.4995C2.99921 12.4887 3.78941 14.3964 5.19599 15.803C6.60256 17.2096 8.51029 17.9998 10.4995 17.9998C12.4887 17.9998 14.3964 17.2096 15.803 15.803Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Conditional btn */}
          {status == "authenticated" ?
            (<button onClick={() => signOut()} className="text-[#FF3811] font-semibold text-lg px-4 py-2 border-2 border-[#FF3811] rounded-lg hover:text-white hover:bg-[#FF3811] cursor-pointer">
              Logout
            </button>)
            :
            (<Link href={"/login"}>
              <button className="text-[#FF3811] font-semibold text-lg px-4 py-2 border-2 border-[#FF3811] rounded-lg hover:text-white hover:bg-[#FF3811] cursor-pointer">
                Login
              </button>
            </Link>)
          }


          {/* <button className="text-[#FF3811] font-semibold text-lg px-4 py-2 border-2 border-[#FF3811] rounded-lg hover:text-white hover:bg-[#FF3811] cursor-pointer">
            Appointment
          </button> */}
        </div>
      </div>

      {/* Mobile */}
      <div className="w-11/12 mx-auto py-5 flex lg:hidden justify-between items-center">
        {/* Left */}
        <div>
          <Image src={"/assets/logo.svg"} width={50} height={50} alt="logo" />
        </div>

        {/* Right */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-end space-x-3">
            {/* Shopping cart */}
            <div>
              <svg
                className="cursor-pointer hover:text-[#FF3811]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.75 10.5V6C15.75 5.00544 15.3549 4.05161 14.6516 3.34835C13.9484 2.64509 12.9945 2.25 12 2.25C11.0054 2.25 10.0516 2.64509 9.34833 3.34835C8.64507 4.05161 8.24998 5.00544 8.24998 6V10.5M19.606 8.507L20.869 20.507C20.939 21.172 20.419 21.75 19.75 21.75H4.24998C4.09219 21.7502 3.93613 21.7171 3.79193 21.6531C3.64774 21.589 3.51863 21.4953 3.41301 21.3781C3.30738 21.2608 3.2276 21.1227 3.17884 20.9726C3.13008 20.8226 3.11343 20.6639 3.12999 20.507L4.39399 8.507C4.42314 8.23056 4.55361 7.9747 4.76024 7.78876C4.96686 7.60281 5.23501 7.49995 5.51298 7.5H18.487C19.063 7.5 19.546 7.935 19.606 8.507Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Search */}
            <div>
              <svg
                className="cursor-pointer hover:text-[#FF3811]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15.803 15.803M15.803 15.803C17.2096 14.3964 17.9998 12.4887 17.9998 10.4995C17.9998 8.51029 17.2096 6.60256 15.803 5.19599C14.3964 3.78941 12.4887 2.99921 10.4995 2.99921C8.51029 2.99921 6.60256 3.78941 5.19599 5.19599C3.78941 6.60256 2.99921 8.51029 2.99921 10.4995C2.99921 12.4887 3.78941 14.3964 5.19599 15.803C6.60256 17.2096 8.51029 17.9998 10.4995 17.9998C12.4887 17.9998 14.3964 17.2096 15.803 15.803Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Hamburger and cancel function */}
          {menuOpen ? (
            <div className="z-50">
              <div className="absolute top-0 right-0 h-screen w-50 bg-white shadow-lg p-5 space-y-3 text-base font-semibold">

                {/* Cancel btn */}
                <div className="flex justify-end">
                  <RxCross2
                    onClick={() => setMenuOpen(false)}
                    size={28}
                    className="cursor-pointer"
                  />
                </div>

                {/* Navigation */}
                <div className="flex flex-col text-center space-y-3">
                  <Link href={"/"} onClick={() => setMenuOpen(false)}>Home</Link>
                  <Link href={"/#services"} onClick={() => setMenuOpen(false)}>Services</Link>
                  <Link href={"/my-bookings"} onClick={() => setMenuOpen(false)}>My Bookings</Link>
                </div>

                {/* other btn */}
                {/* <div className="flex justify-center">


                  <button className="text-[#FF3811] font-semibold text-base px-4 py-1.5 border-2 border-[#FF3811] rounded-lg hover:text-white hover:bg-[#FF3811] cursor-pointer transition">
                    Appointment
                  </button>
                </div> */}

                <div className="flex justify-center">
                  {/* Conditional btn */}
                  {status == "authenticated" ?
                    (<button onClick={() => signOut()} className="text-[#FF3811] font-semibold text-base px-4 py-1.5 border-2 border-[#FF3811] rounded-lg hover:text-white hover:bg-[#FF3811] cursor-pointer transition">
                      Logout
                    </button>)
                    :
                    (<Link href={"/login"}>
                      <button className="text-[#FF3811] font-semibold text-base px-4 py-1.5 border-2 border-[#FF3811] rounded-lg hover:text-white hover:bg-[#FF3811] cursor-pointer transition">
                        Login
                      </button>
                    </Link>)
                  }
                </div>
              </div>
            </div>
          ) : (
            <GiHamburgerMenu
              onClick={() => setMenuOpen(true)}
              size={25}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}
