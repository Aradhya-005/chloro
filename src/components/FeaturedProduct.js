"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Line from "../../public/assets/Asset-4_2.png";

const images = [
  {
    id: 1,
    title: "Eye Treatment",
    src: "/assets/lifting-anti-wrinkle-collagen-patches-under-eyes-RB522JG.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    title: "Skin Serum",
    src: "/assets/composition-of-a-brown-glass-dropper-bottle-with-a-NWSPPKG.jpg",
    alt: "Image 2",
  },
  {
    id: 3,
    title: "Coco oil",
    src: "/assets/top-view-of-coconut-oil-in-bottle-on-coconut-half-VTN4936.jpg",
    alt: "Image 3",
  },
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
    ];
    groups.push(group);
  }

  return groups;
};

function FeaturedProduct() {
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
      <div className="flex flex-row bg-[#023A15] h-[600px] pl-24 pr-9 pt-36 pb-40 gap-28">
        <div className="flex-[3] text-white flex flex-col justify-center p-4 max-w-[350px]">
          <div>
            <h1 className="text-[50px] tracking-wider font-light font-cormorantGaramond">
              Featured <span>Product</span>
            </h1>
            <div
              style={{
                backgroundImage: `url(${Line})`,
                width: "300px",
                height: "auto",
                zIndex: "10",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                marginTop: "-10px", // Adjust this as needed
              }}
              className="mt-2"
            />
          </div>
          <p className="mt-4 mb-6">
          Discover our top-quality skincare products designed to rejuvenate and refresh.

          </p>
          <button className="px-6 py-4 bg-white text-black uppercase max-w-40 rounded-full font-bold text-[15px]">
            Shop now
          </button>
        </div>

        {/* Carousel */}
        <div className="flex-[7] relative overflow-hidden h-[500px]">
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
                    className="relative w-[330px] h-[330px] flex-shrink"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="cover"
                      style={{ borderRadius: "300px 300px 0px 0px" }}
                      className="rounded-lg"
                    />
                    
                  </div>
                   
           
                ))}
                 
              </div>
            ))}
          </div>

          {/* Bottom dots */}
          <div className="absolute left-1/2 transform -translate-x-1/2  flex space-x-2 bottom-28">
            {" "}
            {/* Adjusted position */}
            {imageGroups.map((_, dotIndex) => (
              <div
                key={dotIndex}
                onClick={() => setCurrentIndex(dotIndex)}
                className={`w-2 h-2 rounded-full cursor-pointer ${
                  currentIndex === dotIndex ? "bg-white" : "bg-[#3c6b4c]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProduct;
