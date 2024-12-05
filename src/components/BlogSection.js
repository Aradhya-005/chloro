import React from "react";
import Link from "next/link";
import Image from "next/image";
const servicesData = [
  {
    id: 1,
    img: "/assets/allef-vinicius-_H4iwsvqKMI-unsplash.jpg",
    description: "A photographer shows the beauty of their transition",
    link: "/",
  },
  {
    id: 2,
    img: "/assets/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg",
    description: "Natural look: The evolution of breast implants",
    link: "/",
  },
  {
    id: 3,
    img: "/assets/jess-harper-sunday-TZBLq6MDfxc-unsplash.jpg",
    description: "Russian prosecutor seeks to ban Dolce & Gabbana",
    link: "/",
  },
];

function BlogSection() {
  return (
    <>
      <section className="bg-[#FDF5F3] py-32 ">
        <div className="flex flex-col items-center mb-8 ">
          <h1 className="text-[60px] font-light text-center text-[#023A15] tracking-wider mb-4 font-cormorantGaramond">
            Blog and News
          </h1>
          <p className="text-center mb-8 text-[18px] max-w-[650px] text-[#023A15] py-4 tracking-wide leading-8">
          Discover insightful articles, the latest updates from our community. Stay informed and explore topics that
            matter most to you.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center pb-44">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center bg-[#023A15] max-w-[420px] group"
            >
              <div className="relative w-full h-0 pb-[calc(226px+40px)]">
                <Image
                  src={service.img}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg p-5 transition-transform duration-500 ease-in-out hover:rotate-3 cursor-pointer group-hover:scale-105"
                />
                
              </div>
              <div className="text-left p-5">
                <p className="text-[28px] font-cormorantGaramond font-thin text-white">
                  {service.description}
                </p>
              </div>
              <div className="p-5 w-full text-left">
                <Link
                  href={service.link}
                  className="text-[#f7f8f7] text-[15px] underline uppercase font-semibold underline-offset-4 hover:text-[#319E48] hover:underline"
                >
                  Read more &#8594;
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-[1200px] my-0 mx-auto py-11">
          <h1 className="text-[50px] font-light text-center text-[#023A15] tracking-wider mb-8 font-cormorantGaramond">
            Get the latest updates about our products and services
          </h1>
          <form className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-[400px] p-4 border bg-transparent border-[#023A15] rounded-[100px_100px_100px_100px] "
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#023A15] text-white text-lg  rounded-[100px_100px_100px_100px] hover:bg-[#276A37] transition duration-300 "
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default BlogSection;
