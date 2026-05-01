import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaPaw, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1a3c2e] border-t border-[#2d5c43] text-[#c5d9c8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-[#c8a03a] flex items-center justify-center shrink-0">
              <FaPaw className="text-[#1a3c2e] text-lg" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-[#f5e6c0] text-lg font-bold tracking-wide">
                QurbaniHat
              </span>
              <span className="text-[#8fbc9a] text-[10px] uppercase tracking-widest font-medium mt-0.5">
                Livestock Booking
              </span>
            </div>
          </div>
          <p className="text-sm text-[#8fbc9a] leading-relaxed">
            QurbaniHat is your trusted platform for booking healthy and verified livestock for Qurbani. We connect buyers with reliable sellers across Bangladesh, ensuring a seamless and blessed experience.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[#f5e6c0] font-semibold text-base tracking-wide border-b border-[#2d5c43] pb-2">
            Contact Us
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#c8a03a] shrink-0" />
              <span>+880 1700-000000</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#c8a03a] shrink-0" />
              <span>support@qurbanihat.com</span>
            </li>
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#c8a03a] shrink-0 mt-0.5" />
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[#f5e6c0] font-semibold text-base tracking-wide border-b border-[#2d5c43] pb-2">
            Follow Us
          </h3>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-[#2d5c43] flex items-center justify-center hover:bg-[#c8a03a] hover:text-[#1a3c2e] text-[#c8a03a] transition-colors">
              <FaFacebook className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#2d5c43] flex items-center justify-center hover:bg-[#c8a03a] hover:text-[#1a3c2e] text-[#c8a03a] transition-colors">
              <FaInstagram className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#2d5c43] flex items-center justify-center hover:bg-[#c8a03a] hover:text-[#1a3c2e] text-[#c8a03a] transition-colors">
              <FaWhatsapp className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#2d5c43] flex items-center justify-center hover:bg-[#c8a03a] hover:text-[#1a3c2e] text-[#c8a03a] transition-colors">
              <FaYoutube className="text-lg" />
            </a>
          </div>
          <p className="text-sm text-[#8fbc9a]">
            Stay connected for updates on new arrivals, Qurbani tips, and seasonal offers.
          </p>
        </div>

      </div>

      <div className="border-t border-[#2d5c43] py-4 text-center text-xs text-[#8fbc9a] px-4">
        © {new Date().getFullYear()} QurbaniHat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;