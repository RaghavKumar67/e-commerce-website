import React from "react";
import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-6 py-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span>{item.name}</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-800">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footer buttons */}
          <div className="flex justify-between px-6 py-4 bg-gray-50">
            <button
              onClick={clearWishlist}
              className="text-red-600 hover:underline"
            >
              Clear Wishlist
            </button>
            <button className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition">
              View Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
