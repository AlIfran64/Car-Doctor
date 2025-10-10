"use client";
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {

  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {
        isVisible && (
          <button
            onClick={scrollToTop}
            className='fixed bottom-6 right-6 p-3 rounded-full bg-[#FF3811] text-white shadow-lg hover:bg-[#e2330f] transition cursor-pointer'>
            <FaArrowUp size={20} />
          </button>
        )
      }
    </>
  )
}
