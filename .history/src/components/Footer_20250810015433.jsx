// src/components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-pink-700">Buns & Roses</h2>
          <p className="mt-3 text-sm text-gray-600">
            Freshly baked treats & delightful blooms – crafted with love to make every moment special.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-pink-600">Home</a></li>
            <li><a href="/about" className="hover:text-pink-600">About</a></li>
            <li><a href="/menu" className="hover:text-pink-600">Menu</a></li>
            <li><a href="/contact" className="hover:text-pink-600">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-pink-600">FAQs</a></li>
            <li><a href="/orders" className="hover:text-pink-600">Track Orders</a></li>
            <li><a href="/privacy" className="hover:text-pink-600">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-pink-600">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <p className="text-sm">📍 123 Sweet Lane, Dessert City</p>
          <p className="text-sm">📞 +91 9876543210</p>
          <p className="text-sm">✉️ hello@bunsandroses.com</p>
          <div className="flex gap-4 mt-3 text-pink-600 text-lg">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-pink-200 text-center py-3 text-sm">
        © {new Date().getFullYear()} Buns & Roses. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
