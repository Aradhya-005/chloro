"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import facialMessage from '../../public/assets/lifting-anti-wrinkle-collagen-patches-under-eyes-RB522JG.jpg';
import Asset_4 from '../../public/assets/Asset-4_2.png';
import Asset_2 from '../../public/assets/asset_2.png'

const reviewsList = [
  { 
    id: 1, 
    name: 'John Doe', 
    review: 'The skincare treatment has significantly reduced my wrinkles. My skin feels rejuvenated and smoother. I appreciate the use of eco-friendly products, which make me feel good about the treatment. I’ve seen great results, and I’m more confident in my skin now. Highly recommended.' 
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    review: 'I love the eco-friendly treatments! My skin feels fresh and healthy, and I’ve noticed fewer blemishes. The natural ingredients really make a difference. The team is knowledgeable and created a personalized plan for my skin. I’m very happy with the results and highly recommend this service!' 
  },
  { 
    id: 3, 
    name: 'Michael Johnson', 
    review: 'The personalized skincare plan has made a real difference in my skin. I’ve seen improvement in texture and complexion. The treatments are gentle yet effective. The team’s expertise helped me target problem areas, and I’m impressed with the results. I definitely recommend this service for skin concerns.' 
  },
  { 
    id: 4, 
    name: 'Emily Davis', 
    review: 'I’m so impressed with the results! My skin looks radiant and youthful. The treatments have softened fine lines and improved my overall complexion. The eco-friendly products used are gentle, and the team provides excellent care. I feel more confident and recommend it to anyone looking for effective skincare.' 
  },
  { 
    id: 5, 
    name: 'Sarah Brown', 
    review: 'I’ve noticed a huge improvement in my skin! The treatments are professional and effective. My skin feels nourished, and I’ve seen a reduction in redness. The personalized plan worked wonders for my skin. I highly recommend this service to anyone looking for a positive change in their skincare routine.' 
  }
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
    <section className='flex flex-row h-screen bg-[#023A15] justify-center items-center'>
  <div className='text-left max-w-xl relative py-40'> {/* Added padding here */}
    {/* Background Image */}
    <div
      className='absolute inset-0 bg-no-repeat bg-cover z-0'
      style={{
        backgroundImage: `url(${Asset_4.src})`,
        backgroundSize: 'contain', // or 'cover' depending on your preference
        top: '50%', // Center vertically
        left: '25%', // Center horizontally
        transform: 'translate(-50%, -50%) scale(0.7)' // Center the image and scale
      }}
    />
    {/* Text */}
    <h1 className="text-white text-[60px] font-cormorantGaramond font-extralight tracking-widest relative z-10">
      Review From Our <span className='relative z-10'>Customer</span>
    </h1>

    {/* Carousel of Reviews */}
    <div className="max-w-md mt-6 py-12">
      <div className="h-[100px] flex items-center justify-center">
        <p className="text-[17px] leading-[30px] text-white">{reviewsList[currentIndex].review}</p>
      </div>
      <div className="mt-14">
        <p className="text-white items-center font-cormorantGaramond font-light text-[30px]">{reviewsList[currentIndex].name}</p>
      </div>
    </div>

    {/* Dots for manual navigation */}
    <div className="flex justify-left space-x-2 mt-1">
      {reviewsList.map((_, index) => (
        <div
          key={index}
          className={`w-[9px] h-[9px] rounded-full cursor-pointer ${currentIndex === index ? "bg-white" : "bg-[#3c6b4c]"}`}
          onClick={() => handleDotClick(index)}
        />
      ))}
    </div>
  </div>

  {/* Image Section */}
  <div className="ml-16 relative">
    {/* Background Image */}
    <div
      className='absolute inset-0 bg-no-repeat bg-cover z-0'
      style={{
        backgroundImage: `url(${Asset_2.src})`,
        backgroundSize: 'contain', // or 'cover' depending on your preference
        bottom: '-90px', // Position at the bottom
        right: '40px', // Position at the right
        transform: 'translate(50%, 50%) scale(0.4)', // Adjust positioning and scale
      }}
    ></div>

    {/* Main Image */}
    <Image
      src={facialMessage}
      width={600}
      className='rounded-t-full'
      height={501}
      alt='facial eye message'
    />
  </div>
</section>

  );
}
