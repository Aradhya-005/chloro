"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  { id: 1, src: "/assets/clientlogo_1@4x.png", alt: "Image 1" },
  { id: 2, src: "/assets/clientlogo_2@4x.png", alt: "Image 2" },
  { id: 3, src: "/assets/clientlogo_3@4x.png", alt: "Image 3" },
  { id: 4, src: "/assets/clientlogo_4@4x.png", alt: "Image 4" },
  { id: 5, src: "/assets/clientlogo_5@4x.png", alt: "Image 5" },
  { id: 6, src: "/assets/clientlogo_6@4x.png", alt: "Image 6" },
  { id: 7, src: "/assets/clientlogo_7@4x.png", alt: "Image 7" },
];

// Function to generate slides
const getImageGroups = (imageArray) => {
  const groups = [];
  const length = imageArray.length;

  for (let i = 0; i < length; i++) {
    const group = [
      imageArray[i],
      imageArray[(i + 1) % length],
      imageArray[(i + 2) % length],
      imageArray[(i + 3) % length],
    ];
    groups.push(group);
  }

  return groups;
};

function BrandsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageGroups = getImageGroups(images);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageGroups.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [imageGroups.length]);

  return (
    <>
      <div className="flex flex-col bg-[#023A15] h-[600px]  gap-5 -mt-24">
       <div className="py-36">

       <div className="text-white flex flex-col justify-center items-center ">
          <div className="py-20 flex items-center justify-center h-full">
            <h1 className="text-[50px] font-thin text-white tracking-wider  font-cormorantGaramond leading-tight">
              Our Products Also Available At
            </h1>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden ">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {imageGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="min-w-full flex justify-center gap-10"
              >
                {group.map((image) => (
                  <div
                    key={image.id}
                    className="relative w-[330px] h-[100px] flex-shrink"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      style={{ borderRadius: "300px 300px 0px 0px" }}
                      className="rounded-lg opacity-50"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
       </div>
      </div>
    </>
  );
}

export default BrandsCarousel;
