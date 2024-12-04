import HeroCarousel from "./HeroCarousel";
import Arrow from "../../public/assets/arrow.svg";
import HeroBackgroundImage from "../../public/assets/Artboard-2overlay_.png";
import Asset_6 from "../../public/assets/Asset-6_2.png";
import Asset_4 from "../../public/assets/Asset-4_2.png";
import Image from "next/image";

function HeroSection() {
  return (
    <>
      <section className="relative flex flex-row bg-[#023A15] px-44  h-[90vh] w-full pt-28">
        {/* Background Image Div */}
        <div className="relative max-w-[535px]">
          

          {/* Foreground Text */}
          <div className="relative z-10 text-[#FFFFFF] text-[50px] tracking-wider leading-[80px] group">
            {/* Div for Background Image behind "A whole new" */}
            <div className="relative inline-block">
              {/* Background behind both "A whole new" */}
              <div
                className="absolute top-0 w-full h-full bg-no-repeat bg-contain z-0"
                style={{
                  backgroundImage: `url(${Asset_6.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  transform: "scale(1.4) translateX(10%)", // Makes image larger and shifts left
                }}
              ></div>
              <p className="relative z-10 ">
                A whole{" "}
                <span className="relative group-hover:text-black transition duration-300  italic antialiased font-[400]">
                  new
                </span>
              </p>
            </div>

            <p>
              <span className="group-hover:text-black transition duration-300 italic">
                world
              </span>
              , a whole
            </p>

            {/* Div for "new look" with Background Image */}
            <div className="relative inline-block ">
              <p className="relative z-10">
                <span className="group-hover:text-black transition duration-300 italic">
                  new look
                </span>
              </p>
              <div
                className="absolute top-[24px] left-0 w-full h-full bg-no-repeat bg-contain z-0"
                style={{
                  backgroundImage: `url(${Asset_4.src})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  transform: "scale(1.1)", // Scales down the image slightly
                }}
              ></div>
            </div>
            <p className="text-[16px] leading-7 tracking-wide pt-11 pb-8 text-[#FFFFFF82]">
            Discover the power of nature's best ingredients, carefully crafted for your skin. 
            Experience the ultimate glow with our premium, organic skincare solutions.
            </p>
            <button className="flex items-center gap-1 mt-9 px-6 py-5 text-sm  text-green-900 bg-white rounded-full font-extrabold">
              <span className="text-green-900">➤</span>
              DISCOVER MORE
            </button>
          </div>
        </div>

        {/* Hero Carousel */}
        <div className="relative z-10 -right-36 ">
          <HeroCarousel />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
