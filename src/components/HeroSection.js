import HeroCarousel from "./HeroCarousel";
import HeroBackgroundImage from '../../public/assets/Artboard-2overlay_.png'

function HeroSection() {
  return (
    <>
      <section className="flex flex-row bg-[#023A15] h-screen pl-44 pt-28 " style={{backgroundImage:`url(${HeroBackgroundImage})`}}>
        <div className="text-[#FFFFFF] text-[75px] tracking-wider">
          <h1 className="font-cormorantGaramond font-light">
            A whole <span className="italic font-montserrat font-light hover:text-black">new</span>
          </h1>
          <h1 className="font-cormorantGaramond font-light">
            <span className="italic font-montserrat font-thin hover:text-black">world</span>, a whole
          </h1>
          <h1 className="font-cormorantGaramond font-light">
            <span className="italic font-montserrat font-light hover:text-black">new look</span>
          </h1>

          

        </div>
        <HeroCarousel/>
      </section>
    </>
  );
}

export default HeroSection;
