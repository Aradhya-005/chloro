import Asset_1 from "../../public/assets/Asset-9_2.png";
import Asset_2 from "../../public/assets/Asset-8_2.png";
import Asset_3 from "../../public/assets/Asset-6_2.png";
import Women from "../../public/assets/stylish-sensual-woman-holding-protea-flower-at-fac-4CXRJ23.jpg";
import OrganicCream from "../../public/assets/jar-of-organic-skin-care-mandarin-gel-in-sunlight-XJEHKYG.jpg";

function Content() {
  return (
    <>
      <div className="flex flex-row items-center justify-center h-[710px] pt-40 pb-32 bg-[#FDF5F3] px-12">
        {/* First column with Asset 1 and Organic Cream */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Background div for Asset 1 */}
          <div
            className=" absolute -top-10 left-5 z-10 w-64 h-[180px] bg-no-repeat  bg-contain"
            style={{
              backgroundImage: `url(${Asset_1.src})`,
              width: "260px", // Set your custom width here
              height: "197px", // Set height explicitly to ensure the image shows
              backgroundSize: "contain", // Ensure the image fits within the container without cutting off
            }}
          />
          {/* Background div for Organic Cream */}
          <div
            className="relative h-[410px] w-[360px] bg-cover bg-no-repeat object-cover p-10px"
            style={{
              backgroundImage: `url(${OrganicCream.src})`,
              borderRadius: "300px 300px 0px 0px",
              backgroundPosition: "-50px 0px",
            }}
          />
        </div>

        {/* Center text column */}
        <div className=" text-center flex-1 flex flex-col justify-center relative">
          <p className=" text-[18px] font-normal tracking-wide">
            Alive every moment.
          </p>
          <h1 className="font-cormorantGaramond text-[45px] tracking-wider text-[#023A15]">
            Beauty is all about
          </h1>

          {/* Image as background for "you." */}
          <div className="relative flex justify-center">
            <div
              className="relative bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url(${Asset_3.src})`,
                width: "260px", // Set a smaller custom width
                height: "100px", // Adjust height as needed
                top: "20px", // Adjust the top position to shift the background image down
              }}
            >
              <h1 className="absolute left-0 right-0 flex items-center justify-center font-cormorantGaramond text-[45px] tracking-wider text-[#023A15]">
                you.
              </h1>
            </div>
          </div>

          <p className="py-9  text-[14px]  font-[25px] leading-9 text-[#023A15] tracking-wide">
          Discover the essence of beauty with our premium products. 
  Embrace a healthier, radiant you every day.

          </p>
        </div>

        {/* Third column with Women and Asset 2 */}
        <div className="relative flex-1 flex items-center justify-center">
          {/* Background div for Women */}
          <div
            className="relative h-[410px] w-[360px] bg-cover bg-no-repeat object-cover p-10px"
            style={{
              backgroundImage: `url(${Women.src})`,
              borderRadius: "300px 300px 0px 0px",
              backgroundPosition: "center center",
            }}
          />
          {/* Background div for Asset 2 */}
          <div
            className="absolute -bottom-[107px] -right-3 z-10 bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url(${Asset_2.src})`,
              width: "260px", // Set your custom width here
              height: "197px", // Set height explicitly to ensure the image shows
              backgroundSize: "contain", // Ensure the image fits within the container without cutting off
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Content;
