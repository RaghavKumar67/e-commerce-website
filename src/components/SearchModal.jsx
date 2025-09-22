import React, { useState } from "react";
import products from "../data/products"; // adjust the path if needed
import { Link } from "react-router-dom";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");

  // Filter products based on query
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null; // don't render modal if closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative bg-white w-full max-w-md mx-auto rounded-lg shadow-lg z-10 p-6">
        <h2 className="text-lg font-semibold mb-4">Search Products</h2>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
        />

        {/* Results */}
        <div className="max-h-60 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md"
                onClick={onClose}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{p.name}</p>
                  <p className="text-sm text-gray-500">${p.price}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No products found</p>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}
