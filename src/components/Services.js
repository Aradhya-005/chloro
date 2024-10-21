import Image from "next/image";
import Link from "next/link";
import Asset_1 from '../../public/assets/Asset-9_2.png'
import Asset_2 from '../../public/assets/Asset-8_2.png'
import WomenBath from '../../public/assets/woman-taking-a-bath-massage-soap-treat-yourself-sp-ZZG446W-2 (1).jpg'
// Sample data for services with direct image URLs
const servicesData = [
  {
    id: 1,
    img: '/assets/woman-relaxing-with-a-facial-mask-at-the-spa-FT2XZH6.jpg',
    title: "Face Scrub",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/"
  },
  {
    id: 2,
    img: '/assets/facial-massage-beauty-treatment-CV8BDTP.jpg',
    title: "Face Massage",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/"
  },
  {
    id: 3,
    img: '/assets/massage-therapist-massaging-woman-AWN6QAT.jpg',
    title: "Body Massage",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/"
  },
  {
    id: 4,
    img: '/assets/close-up-of-cosmetic-botox-injection-RGZTDV3.jpg',
    title: "Botox Filler",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/"
  },
  {
    id: 5,
    img: '/assets/pedicure-LDJ5TEU.jpg',
    title: "Pedicure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/"
  },
  {
    id: 6,
    img: '/assets/facial-beauty-treatment-in-spa-CSVTMH2.jpg',
    title: "Face Cleanser",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/"
  }
];

function Services() {
  return (
    <>
    <section className="bg-[#FDF5F3] py-40">
    <div className="flex flex-col items-center mb-8 ">
        <h1 className="text-[60px] font-light text-center text-[#023A15] tracking-wider mb-4 font-cormorantGaramond">Our Service</h1>
        <p className="text-center mb-8 text-[20px] max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center ">
        {servicesData.map(service => (
          <div key={service.id} className="flex flex-col items-center ">
            <Image 
              src={service.img} 
              alt={service.title} 
              className="mb-4 " 
              width={410} 
              height={280} 
              style={{ borderRadius: '300px 300px 0px 0px' }}
            />
            <div className="shadow-lg rounded-lg bg-white p-8 w-full max-w-[360px] -mt-14 justify-center items-center"> {/* Smaller width for the text box */}
              <h1 className="text-3xl  font-cormorantGaramond font-thin text-center text-[#023A15]">{service.title}</h1>
              <p className="text-center mb-4 text-[18px] py-6">{service.description}</p>
              <Link href={service.link} className="text-[#319E48] text-[16px] underline  uppercase font-semibold  ">Learn more &#8594;</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="flex flex-row bg-contain object-cover">
       <Image src={WomenBath} alt="women taking bath" className=""  style={{ borderRadius: '500px 500px 0px 0px', backgroundPosition:'center', width:'400px', height:'600px' }}/>
       <div className="w-96 h-96 bg-[#023A15]"></div>
        
    </section>
    
    </>
  );
}

export default Services;
