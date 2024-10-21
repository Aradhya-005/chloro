"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Line from '../../public/assets/Asset-4_2.png';

const images = [
  { id: 1, src: '/assets/lifting-anti-wrinkle-collagen-patches-under-eyes-RB522JG.jpg', alt: 'Image 1' },
  { id: 2, src: '/assets/composition-of-a-brown-glass-dropper-bottle-with-a-NWSPPKG.jpg', alt: 'Image 2' },
  { id: 3, src: '/assets/top-view-of-coconut-oil-in-bottle-on-coconut-half-VTN4936.jpg', alt: 'Image 3' },
];

function FeaturedProduct() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Automatically move to the next slide in an infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => setIsTransitioning(false), 500); // Reset after animation duration
    }
  }, [currentIndex]);

  return (
    <>
      <div className="flex flex-row bg-[#023A15] h-[600px] pl-24 pr-9 py-40">
        <div className="flex-[3] text-white flex flex-col justify-center p-4">
          <div>
            <h1 className="text-[50px] tracking-wider font-light font-cormorantGaramond">
              Our <span>Product</span>
            </h1>
            <div
              style={{
                backgroundImage: `url(${Line})`,
                width: '300px',
                height: 'auto',
                zIndex:'10',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                marginTop: '-10px', // Adjust this as needed
              }}
              className="mt-2"
            />
          </div>
          <p className="mt-4 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
          <button className="px-6 py-4 bg-white text-black uppercase max-w-40 rounded-full font-bold text-[15px]">Shop now</button>
        </div>

        {/* Carousel */}
        <div className="flex-[7] relative overflow-hidden h-[400px]">
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              isTransitioning ? 'transition-all' : ''
            }`}
            style={{
              transform: `translateX(-${currentIndex * 33.33}%)`,
            }}
          >
            {images.map((image) => (
              <div key={image.id} className="w-1/3 flex-shrink-0 p-2">
                <Image
                  width={300}
                  height={400}
                  src={image.src}
                  alt={image.alt}
                  style={{ borderRadius: '300px 300px 0px 0px' }}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Bottom dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, dotIndex) => (
              <div
                key={dotIndex}
                onClick={() => setCurrentIndex(dotIndex)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentIndex === dotIndex ? 'bg-blue-500' : 'bg-gray-300'
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
