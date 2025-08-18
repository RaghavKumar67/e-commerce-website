import React, { useState } from "react";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import AllCategoriesDropdown from "./AllCategoriesDropdown";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* --- Top Bar --- */}
      <div className="bg-purple-50 border-b border-purple-200 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-2 gap-2 sm:gap-0">
          {/* Left Links */}
          <div className="flex gap-4 sm:gap-6 text-gray-800 text-center sm:text-left">
            <a href="#" className="hover:text-purple-600">
              Account
            </a>
            <a href="#" className="hover:text-purple-600">
              Track Order
            </a>
            <a href="#" className="hover:text-purple-600">
              Support
            </a>
          </div>
          {/* Right Contact Info */}
          <div className="text-gray-800 text-center sm:text-right">
            Need help?{" "}
            <span className="text-pink-600 font-semibold">+ 00645 4568</span>
          </div>
        </div>
      </div>

      {/* --- Middle Section --- */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Left: Logo */}
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="text-purple-600">Shop</span>
              <span className="text-yellow-500">Cart</span>
            </h1>
          </div>

          {/* Middle: Search Button (hidden on mobile) */}
          <div className="hidden sm:flex flex-grow justify-end">
            <button className="bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500">
              <FaSearch />
            </button>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6 text-gray-700">
            <div className="relative cursor-pointer">
              <FaHeart className="text-xl sm:text-2xl" />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 rounded-full">
                2
              </span>
            </div>

            <div className="relative cursor-pointer">
              <FaShoppingCart className="text-xl sm:text-2xl" />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 rounded-full">
                2
              </span>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="sm:hidden text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Button */}
          <div className="hidden sm:block flex-shrink-0">
            <button className="bg-yellow-400 text-black px-4 sm:px-5 py-2 rounded-full hover:bg-yellow-500 font-medium">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* --- Purple Navigation Bar (Desktop only) --- */}
      <div className="bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-white">
          {/* All Categories Dropdown (desktop only) */}
          <div className="hidden md:block">
            <AllCategoriesDropdown />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 font-medium">
            <a href="#" className="hover:text-yellow-300">
              Home
            </a>
            <a href="#" className="hover:text-yellow-300">
              Shop +
            </a>
            <a href="#" className="hover:text-yellow-300">
              Pages +
            </a>
            <a href="#" className="hover:text-yellow-300">
              About
            </a>
            <a href="#" className="hover:text-yellow-300">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* --- Mobile Slide Menu --- */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-purple-700 text-white transform ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4">
          {/* ✅ Only All Categories in Mobile */}
          <AllCategoriesDropdown />
        </div>
      </div>

      {/* Overlay when menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
}
