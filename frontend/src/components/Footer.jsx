import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 pt-12 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Brand</h4>
            <p className="text-gray-600 text-sm">
              Committed to making a difference through social initiatives and community support programs.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#about" className="hover:text-primary-600 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-600 transition-colors">Services</a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary-600 transition-colors">Features</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-primary-100 transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              Email: <a href="mailto:rawatsahil863@gmail.com" className="hover:text-primary-600">rawatsahil863@gmail.com</a>
            </p>
            <p className="text-gray-600 text-sm mt-1">
              Phone: <a href="tel:+91 9646715446" className="hover:text-primary-600">+91 9646715446</a>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 text-center text-gray-500 text-sm border-t border-gray-200">
          &copy; {new Date().getFullYear()} Brand. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
