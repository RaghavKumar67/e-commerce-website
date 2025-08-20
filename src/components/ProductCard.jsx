import React from "react";
import { FaShoppingCart } from "react-icons/fa";
export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-contain rounded-lg"
      />

      {/* Rating */}
      <div className="flex text-yellow-500 mt-2">
        {"★".repeat(product.rating)}{" "}
        {"☆".repeat(5 - product.rating)}
      </div>

      {/* Product Info */}
      <h3 className="font-semibold mt-2">{product.name}</h3>
      {/* Price Section */}
        <div className="flex items-center gap-2 mt-1">
        <div className="text-sm text-gray-500 line-through">
            ${product.oldPrice}
        </div>
        <div className="text-lg font-bold text-pink-600">
            ${product.price}
        </div>
        </div>


      {/* Add to Cart */}
     <button
        onClick={() => onAddToCart(product)}
        className="mt-4 w-full flex items-center justify-center gap-2 
             bg-purple-600 text-white py-2.5 px-4 rounded-full font-medium
             hover:bg-purple-700 hover:shadow-md hover:scale-105
             transition-transform duration-200"
        >
        <FaShoppingCart className="text-sm" />
        Add To Cart
        </button>
    </div>
  );
}
