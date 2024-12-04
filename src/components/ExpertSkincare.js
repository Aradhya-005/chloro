import Image from "next/image";
import FirstImg from "../../public/assets/brown-D9SR4HS-1536x768.jpg";
import SecondImg from "../../public/assets/woman-holding-grapefruit-HV8L8KM-1536x768.jpg";

function ExpertSkincare() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-center  gap-11 px-44 bg-[#FDF5F3] py-40">
  <div className="images-part md:w-1/2 flex flex-col justify-center items-center">
    <div className="first-img mb-5">
      <Image
        className="rounded-[0px_300px_300px_0px]"
        src={FirstImg}
        width={600}
        height={260}
        alt=""
      />
    </div>
    <div className="second-img">
      <Image
        className="rounded-[300px_0px_0px_300px]"
        src={SecondImg}
        width={600}
        height={260}
        alt=""
      />
    </div>
  </div>
  <div className="details-part md:w-1/2 flex flex-col justify-center items-start text-center md:text-left">
    <h2 className="text-[60px] font-thin text-[#023A15] tracking-wider mb-4 font-cormorantGaramond">
      Expert Skincare For Your Beautiful Skin
    </h2>
    <p className=" mb-8 text-[18px] max-w-[480px] text-[#567C49] ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan arcu est, at lobortis nulla porta eu. Aenean vel dolor enim. Etiam aliquam mauris eros, eget ornare diam volutpat eu. Fusce auctor pretium tellus vitae bibendum.
    </p>
    <p className="mb-2 text-[18px] text-[#567C49]">Donec non vestibulum mauris.</p>
    <p className="mb-2 text-[18px] text-[#567C49]">Maecenas arcu eros.</p>
    <p className="mb-2 text-[18px] text-[#567C49]">Sed pulvinar lorem.</p>
    <p className="mb-2 text-[18px] text-[#567C49]">Nullam ut mauris tellus.</p>
    <p className="mb-6 text-[18px] text-[#567C49]">Nunc vitae convallis justo.</p>
    <button className="mt-4 px-6 py-2 bg-[#023A15] text-white rounded-md hover:bg-[#035723]">
      Learn More
    </button>
  </div>
</section>

    </>
  );
}

export default ExpertSkincare;
