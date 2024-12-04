"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// List of images
const images = [
  "/assets/woman-in-towel-applying-body-cream-with-hands-loti-XNNXLFD.jpg",
  "/assets/anthony-tran-Sd9A6NVHsd4-unsplash3.jpeg",
  "/assets/kalos-skincare-jyKa0Ynxvow-unsplash.jpeg",
];

// Function to group images by 2 per slide
const getImageGroups = (imageArray) => {
  const groups = [];
  for (let i = 0; i < imageArray.length; i++) {
    const group = [
      imageArray[i],
      imageArray[(i + 1) % imageArray.length], // Loop around to create pairs
    ];
    groups.push(group);
  }
  return groups;
};

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageGroups = getImageGroups(images);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageGroups.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [imageGroups.length]);

  return (
    <>
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Carousel container */}
        <div className="overflow-hidden h-[650px]">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Move slides
            }}
          >
            {imageGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="min-w-full flex mb-4 gap-11 justify-center"
              >
                {group.map((image, imgIndex) => (
                  <div key={imgIndex} className="relative w-[300px] h-[450px]">
                    <Image
                      src={image}
                      alt={`Slide image ${imgIndex + 1}`}
                      layout="fill"
                      objectFit="cover"
                      style={{ borderRadius: "300px 300px 0px 0px" }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {imageGroups.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-[#3c6b4c]"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
