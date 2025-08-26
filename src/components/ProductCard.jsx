import React from "react";
import { FaShoppingCart, FaHeart, FaExpand } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom"; 

export default function ProductCard({ product, onAddToCart }) {
  const { addToWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleWishlistClick = () => {
    addToWishlist(product);   
    navigate("/wishlist");    
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 group relative overflow-hidden">
      {/* Product Image */}
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-contain rounded-lg"
        />

        {/* Hover Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition">
          {/* Favorite Button */}
          <button
            onClick={handleWishlistClick} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-yellow-400 hover:text-white transition"
          >
            <FaHeart size={16} />
          </button>

          
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-purple-600 hover:text-white transition">
            <FaExpand size={16} />
          </button>
        </div>
      </div>

     
      <div className="flex text-yellow-500 mt-2">
        {"★".repeat(product.rating)}{" "}
        {"☆".repeat(5 - product.rating)}
      </div>

      
      <h3 className="font-semibold mt-2">{product.name}</h3>

     
      <div className="flex items-center gap-2 mt-1">
        <div className="text-sm text-gray-500 line-through">
          ${product.oldPrice}
        </div>
        <div className="text-lg font-bold text-pink-600">
          ${product.price}
        </div>
      </div>

      
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
