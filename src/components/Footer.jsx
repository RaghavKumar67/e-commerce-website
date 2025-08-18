import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm">
      {/* --- Top Section --- */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">
            <span className="text-purple-500">Shop</span>
            <span className="text-yellow-400">Cart</span>
          </h2>
          <p className="mb-4">
            We bring you the best products at the best prices. ShopCart is your
            trusted online marketplace.
          </p>
          <p>© 2025 ShopCart. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Customer Service
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-400">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <p className="mb-2">123 Market Street, New Delhi, India</p>
          <p className="mb-2">Email: support@shopcart.com</p>
          <p className="mb-2">Phone: +91 9876543210</p>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-3 sm:gap-0">
          <p>© 2025</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-400">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
