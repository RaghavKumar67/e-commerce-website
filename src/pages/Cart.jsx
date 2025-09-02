import React from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">My Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-purple-100">
              <tr>
                <th className="px-6 py-3">Product</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">Total</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  {/* Product */}
                  <td className="px-6 py-4 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <span>{item.name}</span>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4 font-medium text-gray-800">
                    ${item.price.toFixed(2)}
                  </td>

                  {/* Quantity */}
                  <td className="px-6 py-4">
                    <div className="flex items-center border rounded-lg w-fit">
                      <button
                        onClick={() =>
                          item.quantity > 1 &&
                          removeFromCart(item.id, "decrease")
                        }
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-l-lg"
                      >
                        -
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button
                        onClick={() => removeFromCart(item.id, "increase")}
                        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-r-lg"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  {/* Total */}
                  <td className="px-6 py-4 font-semibold text-purple-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>

                  {/* Remove */}
                  <td className="px-6 py-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
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
          <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
            <button
              onClick={() => alert("Cart cleared (TODO: implement clearCart)")}
              className="text-red-600 hover:underline"
            >
              Clear Cart
            </button>
            <button
              onClick={() => (window.location.href = "/checkout")}
              className="bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-purple-700 transition"
            >
              Proceed to Checkout →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
