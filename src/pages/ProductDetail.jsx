import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { toast } from "react-hot-toast"; // ✅ use react-hot-toast

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="p-10 text-center">Product not found.</div>;
  }

  // Handle Add to Cart
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart 🛒`, {
      duration: 2000,
    });
  };

  // Handle Buy Now
  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/checkout");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md h-auto object-contain rounded-lg shadow-md"
        />
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

        {/* Rating */}
        <div className="flex text-yellow-500 mb-2">
          {"★".repeat(product.rating)}{" "}
          {"☆".repeat(5 - product.rating)}
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-gray-500 line-through text-lg">
            ${product.oldPrice}
          </span>
          <span className="text-2xl font-bold text-pink-600">
            ${product.price}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-6">
          {product.description || "No description available for this product."}
        </p>

        {/* Quantity Counter */}
        <div className="flex items-center mb-6">
          <button
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-l-lg"
          >
            -
          </button>
          <span className="px-6 py-2">{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-r-lg"
          >
            +
          </button>
        </div>

        

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition"
          >
            <FaShoppingCart /> Add to Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
          >
             Buy Now
          </button>

          <button
            onClick={() => {
              addToWishlist(product);
              toast.success(`${product.name} added to wishlist ❤️`, {
                duration: 2000,
              });
            }}
            className="flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition"
          >
            <FaHeart /> Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}
