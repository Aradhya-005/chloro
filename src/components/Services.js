import Image from "next/image";
import Link from "next/link";
import Asset_1 from "../../public/assets/asset_3.png";
import Asset_2 from "../../public/assets/asset_2.png";
import WomenBath from "../../public/assets/woman-taking-a-bath-massage-soap-treat-yourself-sp-ZZG446W-2 (1).jpg";
// Sample data for services with direct image URLs
const servicesData = [
  {
    id: 1,
    img: "/assets/woman-relaxing-with-a-facial-mask-at-the-spa-FT2XZH6.jpg",
    title: "Face Scrub",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
  },
  {
    id: 2,
    img: "/assets/facial-massage-beauty-treatment-CV8BDTP.jpg",
    title: "Face Massage",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
  },
  {
    id: 3,
    img: "/assets/massage-therapist-massaging-woman-AWN6QAT.jpg",
    title: "Body Massage",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
  },
  {
    id: 4,
    img: "/assets/close-up-of-cosmetic-botox-injection-RGZTDV3.jpg",
    title: "Botox Filler",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
  },
  {
    id: 5,
    img: "/assets/pedicure-LDJ5TEU.jpg",
    title: "Pedicure",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
  },
  {
    id: 6,
    img: "/assets/facial-beauty-treatment-in-spa-CSVTMH2.jpg",
    title: "Face Cleanser",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "/",
  },
];

function Services() {
  return (
    <>
      <section className="bg-[#FDF5F3] py-40 ">
        <div className="flex flex-col items-center mb-8 ">
          <h1 className="text-[60px] font-light text-center text-[#023A15] tracking-wider mb-4 font-cormorantGaramond">
            Our Service
          </h1>
          <p className="text-center mb-8 text-[20px] max-w-[630px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center ">
          {servicesData.map((service) => (
            <div key={service.id} className="flex flex-col items-center ">
              <Image
                src={service.img}
                alt={service.title}
                className="mb-4 "
                width={410}
                height={280}
                style={{ borderRadius: "300px 300px 0px 0px" }}
              />
              <div className="shadow-lg rounded-lg bg-white p-8 w-full max-w-[360px] -mt-14 justify-center items-center">
                {" "}
                {/* Smaller width for the text box */}
                <h1 className="text-3xl  font-cormorantGaramond font-thin text-center text-[#023A15]">
                  {service.title}
                </h1>
                <p className="text-center mb-4 text-[18px] py-6">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="text-[#319E48] text-[16px] underline  uppercase font-semibold  "
                >
                  Learn more &#8594;
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* our story */}
        <div className="relative flex bg-cover px-44 pt-[200px]">
          {/* Main Image */}
          <Image
            src={WomenBath}
            alt="women taking bath"
            className="rounded-t-full w-[800px] h-[850px] object-cover relative"
          />

          {/* Div positioned over the image */}
          <div className="absolute w-[520px] h-[480px] bg-[#023A15] top-72 left-[908px] shadow-lg text-white">
          <div className="p-20 ">
          <h1 className="text-[60px] font-cormorantGaramond font-light tracking-wider">Our Story</h1>
            <p className="mt-7 font-[25px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              accumsan arcu est, at lobortis nulla porta eu. Aenean vel dolor
              enim. Etiam aliquam mauris eros.
            </p>
          <button className="uppercase bg-white px-8 py-4 text-[#023A15] font-semibold rounded-full mt-10 ">Read More</button>
          </div>
          </div>

          {/* Div positioned below the green div */}
          <div className="absolute w-[520px] h-[180px] bg-transparent bottom-20 left-[908px] px-24 shadow-lg">
            yfyuf
          </div>

          {/* Image at the top-left corner of the main image (Asset_1) */}
          <div
            className="absolute top-80 left-24 z-10 w-[370px] h-[230px] bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url(${Asset_1.src})`,
            }}
          />

          {/* Image at the bottom-right corner of the green div (Asset_2) */}
          <div
            className="absolute bottom-60 right-52 w-[220px] h-[180px] bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url(${Asset_2.src})`,
            }}
          />
        </div>
      </section>
    </>
  );
}

export default Services;
