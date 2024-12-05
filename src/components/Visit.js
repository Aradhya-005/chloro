"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import SerumImg from "../../public/assets/amber-glass-transparent-bottle-with-eucalyptus-lea-4FZTPPK.jpg";
import BrandsCarousel from "./BrandsCarousel";

const images = [
  {
    id: 1,
    src: "/assets/bottles-of-dark-amber-glass-with-essential-oil-mas-3ALP7C3-1024x1024.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "/assets/composition-of-a-brown-glass-dropper-bottle-with-a-NWSPPKG.jpg",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "/assets/bottles-of-dark-amber-glass-with-essential-oil-mas-3ALP7C3-1024x1024.jpg",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "/assets/brown-and-white-glass-with-dropper-on-white-backgr-MMLCL93-1024x1024.jpg",
    alt: "Image 4",
  },
  {
    id: 5,
    src: "/assets/cosmetic-bottle-with-serum-or-hyaluronic-acid-and-YPT8W8X-1024x1024.jpg",
    alt: "Image 5",
  },
];

function Visit() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Generate the current slide images
  const getCurrentSlide = () => {
    const slide = [];
    for (let i = 0; i < 4; i++) {
      slide.push(images[(currentIndex + i) % images.length]);
    }
    return slide;
  };

  return (
    <>
      <section className="relative -mt-16  h-full overflow-hidden justify-center items-center px-44 gap-10">
        {/* Semi-Transparent Overlay */}
        <div className="absolute inset-0 bg-[rgba(2,58,21)] bg-opacity-70 -z-10"></div>

        {/* Content */}
        <div className="relative container mx-auto flex flex-col md:flex-row items-center px-4 h-full">
          {/* Text Content */}
          <div className="w-full md:w-1/2 pr-8 text-center md:text-left z-10">
            <h1 className="text-[60px] font-thin text-white tracking-wider mb-6 font-cormorantGaramond leading-tight">
              Visit Our Store to Buy Beauty Products
            </h1>
            <p className="mb-8 text-[18px] max-w-[480px] text-white leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              lobortis sed sapien in pretium. Donec tincidunt, quam vestibulum
              ultricies egestas, dolor sem laoreet orci, quis finibus justo quam
              at nibh.
            </p>
            <button className="px-6 py-4 bg-white text-black uppercase rounded-full font-bold text-[15px] hover:bg-transparent hover:border hover:border-white hover:text-white transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Image Content */}
          <div className="max-w[100%] ">
            <Image
              width={600}
              height={400}
              className="h-full w-full object-cover rounded-[380px_380px_0_0]"
              src={SerumImg}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section>
        <div className="flex transition-transform duration-700 ease-in-out h-full -mt-24 z-20 gap-2 justify-center">
          {getCurrentSlide().map((image) => (
            <div
              key={image.id}
              className="relative w-[150px] h-[150px] flex-shrink"
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Brands Carousel */}
      <section>
        <BrandsCarousel />
      </section>
    </>
  );
}

export default Visit;
