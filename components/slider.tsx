"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';

const images = [
  "/images/hero image.jpg",
  "/images/hero-image3.jpg",
  "/images/hero-image4.jpg",
  "/images/hero-image2.jpg",
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-4 mb-10 p-4">
      <div className="relative w-full h-[400px] sm:h-[500px]">
    
        <Image
          src={images[currentIndex]}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />

        
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 rounded-lg"></div>


        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl sm:text-5xl font-extrabold mb-2 sm:mb-4">
            Looking for Top-Notch Digital Services?
          </h1>
          <p className="text-white text-base sm:text-lg max-w-md leading-relaxed mb-4 sm:mb-6">
            Elevate your business with our cutting-edge digital solutions. From custom website development to dynamic e-commerce platforms, we deliver excellence at every step.
          </p>
          
          <button
            type="button"
            className="flex justify-center items-center px-6 py-2 sm:px-8 sm:py-3 text-white font-bold bg-blue-800 rounded-md mt-4 hover:bg-gray-600 sm:text-lg text-sm transition-colors duration-300">
                <Link href="/about">
            Learn More 
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
