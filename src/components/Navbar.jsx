import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "#" },
    { label: "Flowers", href: "#" },
    { label: "Bakery", href: "#" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-pink-50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-rose-600">
          Buns<span className="text-orange-500">&</span>Roses
        </div>

        {/* Search Bar - only on md+ */}
        <div className="hidden md:flex flex-1 mx-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-rose-500 transition">
            <FiHeart size={22} />
          </button>
          <button className="text-gray-600 hover:text-orange-500 transition">
            <FiShoppingCart size={22} />
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-700 hover:text-rose-600 transition"
            >
              <FiUser size={22} />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg py-2 z-10">
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-rose-100 text-gray-700">
                  Login
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm hover:bg-rose-100 text-gray-700">
                  Sign Up
                </button>
              </div>
            )}
          </div>

          {/* Toggle Button (always visible) */}
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Toggle Dropdown Menu (all screen sizes) */}
      {isMenuOpen && (
        <div className="w-full bg-white shadow-md md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block text-gray-700 text-base px-4 py-2 rounded hover:bg-rose-100 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Desktop Menu as dropdown (same links, visible only if menu is toggled) */}
      {isMenuOpen && (
        <div className="hidden md:block bg-white shadow-md px-4 pb-4">
          <ul className="flex justify-center space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-rose-600 font-medium transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
