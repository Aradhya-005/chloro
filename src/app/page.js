import HeroSection from "@/components/HeroSection";
import Navbar from "../components/Navbar";
import Content from "@/components/Content";
import FeaturedProduct from "@/components/FeaturedProduct";
import Services from "@/components/Services";
import Review from "@/components/Review";
import ExpertSkincare from "@/components/ExpertSkincare";
import VIsitStore from "@/components/VIsitStore";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
 <div className="relative">
  {/* Background Image */}
  <div 
    className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
    style={{ backgroundImage: "url('/assets/beautiful-woman-with-closed-eyes-posing-with-green-ZDTECGT.jpg')" }}
  ></div>

  {/* Semi-Transparent Overlay */}
  <div className="absolute inset-0 bg-[rgba(2,58,21,)] -z-10"></div>

  {/* Website Content */}
  <div className="relative z-10">
    <Navbar />
    <HeroSection />
    <Content />
    <FeaturedProduct />
    <Services />
    <Review />
    <ExpertSkincare />
    <VIsitStore />
    <BlogSection/>
    <Footer/>
  </div>
</div>



   
    </>
  );
}
