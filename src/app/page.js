import HeroSection from "@/components/HeroSection";
import Navbar from "../components/Navbar";
import Content from "@/components/Content";
import FeaturedProduct from "@/components/FeaturedProduct";
import Services from "@/components/Services";
export default function Home() {
  return (
    <>
   <Navbar/>
  
   <HeroSection/>
   <Content/>
   <FeaturedProduct/>
   <Services/>
    </>
  );
}
