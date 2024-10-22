"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import facialMessage from '../../public/assets/lifting-anti-wrinkle-collagen-patches-under-eyes-RB522JG.jpg';

const reviewsList = [
  { id: 1, name: 'John Doe', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus.' },
  { id: 2, name: 'Jane Smith', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus.' },
  { id: 3, name: 'Michael Johnson', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus.' },
  { id: 4, name: 'Emily Davis', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus.' },
  { id: 5, name: 'Sarah Brown', review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis erat posuere, tincidunt sem at, sagittis dolor. Sed malesuada orci erat, ut interdum lorem rhoncus eu. Donec justo urna, mattis non maximus.' }
];

export default function Review() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsList.length); // Auto-slides every 3 seconds
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Function to handle manual navigation when clicking on dots
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className='flex flex-row h-[100vh] p-11 w-full bg-[#023A15]'>
      <div className='max-w-[500px]'>
        <h1 className="text-white text-4xl font-bold">Good Review From Our</h1>
        <h1 className="text-white text-4xl font-bold mb-4">Customer</h1>

        {/* Carousel of Reviews */}
        <div className="p-6 rounded-md w-full max-w-md mt-6">
          <div className="h-[100px] flex items-center justify-center">
            <p className="text-lg text-white ">{`${reviewsList[currentIndex].review}`}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-white items-center">{`- ${reviewsList[currentIndex].name}`}</p>
          </div>
        </div>

        {/* Dots for manual navigation */}
        <div className="flex justify-center space-x-2 mt-4">
          {reviewsList.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="ml-16">
        <Image
          src={facialMessage}
          width={630}
          className='rounded-t-full'
          height={501}
          alt='facial eye message'
        />
      </div>
    </section>
  );
}
