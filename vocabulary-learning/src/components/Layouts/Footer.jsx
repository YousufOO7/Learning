import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Information</h2>
          <p>123 Main Street</p>
          <p>City, State, ZIP</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold mb-4">Copyright</h2>
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
      {/* Bottom Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>Designed with ❤️ using React, Tailwind, and DaisyUI</p>
      </div>
    </footer>
  );
};

export default Footer;
