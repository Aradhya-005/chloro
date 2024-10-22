
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  [
    "/assets/woman-in-towel-applying-body-cream-with-hands-loti-XNNXLFD.jpg",
    "/assets/anthony-tran-Sd9A6NVHsd4-unsplash3.jpeg",
  ],
  [
    "/assets/anthony-tran-Sd9A6NVHsd4-unsplash3.jpeg",
    "/assets/kalos-skincare-jyKa0Ynxvow-unsplash.jpeg",
  ],
  [
     "/assets/kalos-skincare-jyKa0Ynxvow-unsplash.jpeg",
     "/assets/woman-in-towel-applying-body-cream-with-hands-loti-XNNXLFD.jpg",
  ],
  
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto ">
      {/* Carousel container */}
      <div className="overflow-hidden h-[603px]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((group, index) => (
            <div key={index} className="min-w-full flex justify-around mb-4">
              {group.map((image, imgIndex) => (
                <div key={imgIndex} className="w-1/2 p-2">
                  <Image
                    src={image}
                    width={200}
                    height={300}
                    style={{ borderRadius: '300px 300px 0px 0px' }}
                    alt={`Slide image ${imgIndex + 1}`}
                    className="object-cover w-full h-auto rounded-[300px 300px 0px 0px]"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
