import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand */}
          <div>
            <h4 className="text-lg text-grey-700 font-semibold mb-4">VISION<span className="text-black">X</span></h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Committed to making a difference through social initiatives and community support programs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#about" className="hover:text-gray-900 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-900 transition-colors">Services</a>
              </li>
              <li>
                <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              Email: <a href="mailto:rawatsahil863@gmail.com" className="hover:text-gray-900">rawatsahil863@gmail.com</a>
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Phone: <a href="tel:+919646715446" className="hover:text-gray-900">+91 9646715446</a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 text-center text-gray-500 text-sm border-t border-gray-200">
          &copy; {new Date().getFullYear()} VISIONX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
