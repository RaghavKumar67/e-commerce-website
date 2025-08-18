import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaChevronRight } from "react-icons/fa";

export default function AllCategoriesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const categories = [
    { name: "Dresses", icon: "👗" },
    { name: "Bags", icon: "👜" },
    { name: "Sweaters", icon: "🧥" },
    { name: "Boots", icon: "👢" },
    { name: "Gifts", icon: "🎁" },
    { name: "Sneakers", icon: "👟" },
    { name: "Watches", icon: "⌚" },
    { name: "Gold Ring", icon: "💍" },
    { name: "Cap", icon: "🧢" },
    { name: "Sunglasses", icon: "🕶" },
    { name: "Baby Shop", icon: "🍼" }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-purple-700 md:hover:rounded-full transition w-full md:w-auto"
      >
        <FaBars />
        All Categories
      </button>

      {/* Dropdown */}
      <div
        className={`absolute md:top-full left-0 bg-white shadow-lg rounded-md md:w-60 w-full mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ zIndex: 50 }}
      >
        <div className="max-h-[300px] md:max-h-[500px] overflow-y-auto">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-4 py-3 hover:bg-purple-100 cursor-pointer text-gray-800 hover:text-purple-600 text-sm sm:text-base"
            >
              <span className="flex items-center">
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </span>
              <FaChevronRight size={12} className="text-gray-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
