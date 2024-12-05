import React from 'react'
import Image from 'next/image'
import Logo from '../../public/assets/logo_Asset-1.png';


function Footer() {
  return (
   <>
  <footer className="bg-[#023A15] text-white py-10">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h1 className="text-4xl font-cormorantGaramond mb-4"><div className="w-24">
          <Image src={Logo} alt="logo" />
        </div></h1>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-4xl font-cormorantGaramond mb-4">Get In Touch</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center">
              <span className="mr-2">📍</span> 140 Hope Street, Plano
            </li>
            <li className="flex items-center">
              <span className="mr-2">📧</span> chloro@mail.com
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span> +1 234 567 890
            </li>
            <li className="flex items-center">
              <span className="mr-2">⏰</span> 09.00 AM - 17.00 PM
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-4xl font-cormorantGaramond mb-4">Quicklinks</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-4xl font-cormorantGaramond mb-4">Location</h2>
          <div className="w-full h-40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.7969236018246!2d-122.40641708468999!3d37.785927979756024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbd9c3627%3A0xa9f1c74f500e7b7d!2s140%20Hope%20St%2C%20Plano!5e0!3m2!1sen!2sus!4v1618471254706!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-600 mt-10 pt-4 text-center flex flex-row items-center justify-between px-44 ">
        <p className="text-sm">Copyright © 2021 ASK Project</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-gray-300">
            🌐
          </a>
          <a href="#" className="hover:text-gray-300">
            🐦
          </a>
          <a href="#" className="hover:text-gray-300">
            🔗
          </a>
          <a href="#" className="hover:text-gray-300">
            🎥
          </a>
        </div>
      </div>
    </footer>

   </>
  )
}

export default Footer