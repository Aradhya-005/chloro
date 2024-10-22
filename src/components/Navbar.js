import Image from "next/image";
import Logo from '../../public/assets/logo_Asset-1.png';
import Link from "next/link";
import { FaSearch, FaBars, FaChevronDown } from "react-icons/fa"; // Importing icons

function Navbar() {
  return (
    <>
      <nav className="bg-[#023A15] flex flex-row justify-between px-44 py-10 items-center text-white font-medium text-[16px]">
        {/* Logo */}
        <div className="w-24">
          <Image src={Logo} alt="logo" />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-row gap-14">
          <li >
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>

          {/* Services dropdown */}
          <li className="relative group">
            <Link href="#" className="flex items-center gap-2">
              Services <FaChevronDown />
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black py-2 mt-1 w-44 z-10">
              <li className="px-4 py-2 hover:text-[#319E48]">
                <Link href="/services/service1">Service </Link>
              </li>
              <li className="px-4 py-2 hover:text-[#319E48]">
                <Link href="/services/service2">Service details</Link>
              </li>
            </ul>
          </li>

          {/* Pages dropdown */}
          <li className="relative group">
            <Link href="#" className="flex items-center gap-2">
              Pages <FaChevronDown />
            </Link>
            <ul className="absolute hidden group-hover:block bg-white text-black py-2 mt-1 w-44 z-10">
              <li className="px-4 py-2 hover:text-[#319E48]">
                <Link href="/pages/page1">Team</Link>
              </li>
              <li className="px-4 py-2 hover:text-[#319E48]">
                <Link href="/pages/page2">Membership</Link>
              </li>
              <li className="px-4 py-2 hover:text-[#319E48]">
                <Link href="/pages/page2">FAQs Page</Link>
              </li>
              <li className="px-4 py-2 hover:text-[#319E48]">
                <Link href="/pages/page2">Testimonials</Link>
              </li>
              <li className="px-4 py-2 hover:text-[#319E48]">
                <Link href="/pages/page2">Blog</Link>
              </li>
              <li className="px-4 py-2 hover:text-[#319E48]">
                <Link href="/pages/page2">Single Post</Link>
              </li>
              <li className="px-4 py-2 hover:text-[#319E48]">
                <Link href="/pages/page2">404 Page</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex flex-row gap-10">
          <FaSearch className="cursor-pointer text-xl" /> {/* Search Icon */}
          <FaBars className="cursor-pointer text-xl" /> {/* Menu Icon */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
