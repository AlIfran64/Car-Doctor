import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

export default async function ServiceDetailsPage({ params }) {
  const p = await params;
  const res = await fetch(`http://localhost:3000/api/service/${p.id}`, { cache: 'no-store' });
  const data = await res.json();


  if (!data) {
    notFound();
  }

  return (
    <div className='w-11/12 mx-auto min-h-screen'>
      <div className="bg-[url('/assets/images/checkout/checkout.png')] bg-cover bg-center h-[300px] w-full rounded-lg relative">

        {/* Overlay */}
        <div className='bg-black/60 bg-opacity-50 h-full w-full rounded-lg flex items-center '>
          <div className='w-full'>
            <h1 className="text-white text-4xl font-bold mx-24">
              Service Details
            </h1>

            <div className='flex justify-center absolute bottom-0 left-1/2 transform -translate-x-1/2'>
              <div
                className='bg-[#FF3811] inline-block py-2 px-8'
                style={{
                  clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
                }}>
                <p className='text-white'>Home/Service Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex gap-5 my-32'>

        {/* left */}
        <div className='w-3/4'>
          <div className='w-full h-[400px] relative'>
            <Image
              src={data.img}
              alt="service image"
              fill
              className="object-cover rounded"
            />
          </div>
          <h1 className='text-4xl font-bold my-12'>{data.title}</h1>
          <p className='text-justify text-[#737373]'>{data.description}</p>

          <div className='my-7 grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {
              data.facility.map((item, index) => (
                <div key={index} className='bg-[#F3F3F3] p-10 rounded-lg border-t-3 border-[#FF3811]'>
                  <h1 className='text-xl font-bold'>{item.name}</h1>
                  <p className='text-[#737373] mt-3'>{item.details}</p>
                </div>
              ))
            }
          </div>
          <p className='text-justify text-[#737373]'>{data.description}</p>

          <h1 className='text-4xl font-bold mt-12 mb-7'>3 Simple Steps to Process</h1>
          <p className='text-[#737373] text-justify '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>

          {/* cards */}

          <div className='flex items-center gap-4 mt-7'>

            {/* card-1 */}
            <div className='border border-[#E8E8E8] rounded-lg p-9'>
              <div className='flex justify-center'>
                <div className='p-3 rounded-full bg-[#FF38111A]'>
                  <div className='p-3 rounded-full bg-[#FF3811]'>
                    <h1 className='text-xl font-bold text-white'>01</h1>
                  </div>
                </div>
              </div>

              <h1 className='text-center text-xl font-bold my-5'>Step One</h1>
              <p className='text-center '>It uses a dictionary of over 200 .</p>
            </div>

            {/* card-2 */}
            <div className='border border-[#E8E8E8] rounded-lg p-9'>
              <div className='flex justify-center'>
                <div className='p-3 rounded-full bg-[#FF38111A]'>
                  <div className='p-3 rounded-full bg-[#FF3811]'>
                    <h1 className='text-xl font-bold text-white'>02</h1>
                  </div>
                </div>
              </div>

              <h1 className='text-center text-xl font-bold my-5'>Step Two</h1>
              <p className='text-center '>It uses a dictionary of over 200 .</p>
            </div>

            {/* card-3 */}
            <div className='border border-[#E8E8E8] rounded-lg p-9'>
              <div className='flex justify-center'>
                <div className='p-3 rounded-full bg-[#FF38111A]'>
                  <div className='p-3 rounded-full bg-[#FF3811]'>
                    <h1 className='text-xl font-bold text-white'>03</h1>
                  </div>
                </div>
              </div>

              <h1 className='text-center text-xl font-bold my-5'>Step Three</h1>
              <p className='text-center '>It uses a dictionary of over 200 .</p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className='w-1/4'>

          {/* Services */}
          <div className='p-8 rounded-lg bg-[#F3F3F3]'>
            <h1 className='text-2xl font-bold mb-5'>Services</h1>
            <div className='bg-[#FFFFFF] hover:bg-[#FF3811] p-4 rounded-lg flex items-center justify-between mb-5 group'>
              <p className='font-semibold group-hover:text-white'>Engine Repair</p>
              <FaArrowRight className='cursor-pointer group-hover:text-white' />
            </div>
            <div className='bg-[#FFFFFF] hover:bg-[#FF3811] p-4 rounded-lg flex items-center justify-between mb-5 group'>
              <p className='font-semibold group-hover:text-white'>Automatic Services</p>
              <FaArrowRight className='cursor-pointer group-hover:text-white' />
            </div>
            <div className='bg-[#FFFFFF] hover:bg-[#FF3811] p-4 rounded-lg flex items-center justify-between mb-5 group'>
              <p className='font-semibold group-hover:text-white'>Engine Oil Change</p>
              <FaArrowRight className='cursor-pointer group-hover:text-white' />
            </div>
            <div className='bg-[#FFFFFF] hover:bg-[#FF3811] p-4 rounded-lg flex items-center justify-between group'>
              <p className='font-semibold group-hover:text-white'>Battery Charge</p>
              <FaArrowRight className='cursor-pointer group-hover:text-white' />
            </div>
          </div>

          {/* Download */}
          <div className='bg-[#151515] p-8 rounded-lg my-7'>
            <h1 className='text-2xl font-bold mb-5 text-white'>Download</h1>

            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-3'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M24.375 17.8125V14.5312C24.375 13.4124 23.9305 12.3393 23.1394 11.5481C22.3482 10.757 21.2751 10.3125 20.1562 10.3125H18.2812C17.9083 10.3125 17.5506 10.1643 17.2869 9.90062C17.0232 9.6369 16.875 9.27921 16.875 8.90625V7.03125C16.875 5.91237 16.4305 4.83931 15.6394 4.04814C14.8482 3.25697 13.7751 2.8125 12.6562 2.8125H10.3125M11.25 20.625V21.5625M15 17.8125V21.5625M18.75 15V21.5625M13.125 2.8125H7.03125C6.255 2.8125 5.625 3.4425 5.625 4.21875V25.7812C5.625 26.5575 6.255 27.1875 7.03125 27.1875H22.9688C23.745 27.1875 24.375 26.5575 24.375 25.7812V14.0625C24.375 11.0788 23.1897 8.21733 21.08 6.10755C18.9702 3.99776 16.1087 2.8125 13.125 2.8125V2.8125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h1 className='text-white text-lg font-semibold'>Our Brochure</h1>
                  <p className='text-[#A2A2A2]'>Download</p>
                </div>
              </div>
              <div>
                <button className='bg-[#FF3811] p-4 rounded-lg text-white cursor-pointer'><FaArrowRight /></button>
              </div>
            </div>

            <div className='flex justify-between items-center mt-5'>
              <div className='flex items-center gap-3'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M24.375 17.8125V14.5312C24.375 13.4124 23.9305 12.3393 23.1394 11.5481C22.3482 10.757 21.2751 10.3125 20.1562 10.3125H18.2812C17.9083 10.3125 17.5506 10.1643 17.2869 9.90062C17.0232 9.6369 16.875 9.27921 16.875 8.90625V7.03125C16.875 5.91237 16.4305 4.83931 15.6394 4.04814C14.8482 3.25697 13.7751 2.8125 12.6562 2.8125H10.3125M11.25 20.625V21.5625M15 17.8125V21.5625M18.75 15V21.5625M13.125 2.8125H7.03125C6.255 2.8125 5.625 3.4425 5.625 4.21875V25.7812C5.625 26.5575 6.255 27.1875 7.03125 27.1875H22.9688C23.745 27.1875 24.375 26.5575 24.375 25.7812V14.0625C24.375 11.0788 23.1897 8.21733 21.08 6.10755C18.9702 3.99776 16.1087 2.8125 13.125 2.8125V2.8125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h1 className='text-white text-lg font-semibold'>Company Details</h1>
                  <p className='text-[#A2A2A2]'>Download</p>
                </div>
              </div>
              <div>
                <button className='bg-[#FF3811] p-4 rounded-lg text-white cursor-pointer'><FaArrowRight /></button>
              </div>
            </div>
          </div>

          {/* Special Offer */}
          <div className='bg-[#151515] p-8 rounded-lg'>
            <div className='flex justify-center'>
              <div>
                <Image src={"/assets/icons/footer_logo.png"} width={150} height={150} alt='footer logo'></Image>
              </div>
            </div>

            <h1 className='text-xl font-bold text-center text-white my-5'>Need Help? We Are Here
              To Help You</h1>

            <div className='bg-white p-2 rounded-lg pb-8 mb-5'>
              <h1 className='text-xl font-bold text-center'><span className='text-[#FF3811]'>Car Doctor</span> Special</h1>
              <p className='text-center font-bold my-2'><span className='text-[#737373]'>Save up to</span> <span className='text-[#FF3811]'>60% off</span></p>

              <div className='flex justify-center relative'>
                <div className='bg-[#FF3811] p-4 rounded-lg absolute'>
                  <p className='text-white text-xl font-semibold'>Get A Quote</p>
                </div>
              </div>
            </div>
          </div>

          {/* Price */}
          <div className='mt-7'>
            <h1 className='text-black text-4xl font-bold'>Price: ${data.price}</h1>

            <Link href={`/checkout/${data._id}`}>
              <div className='bg-[#FF3811] hover:bg-[#f33e1a] cursor-pointer  rounded-lg py-4 mt-4'>
                <p className='text-center text-white font-semibold'>Proceed Checkout</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
