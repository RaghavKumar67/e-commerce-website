import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();

  // Calculate total
  const getCartTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // State for form inputs
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "cod", // default cash on delivery
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit -> redirect to Payment Page
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Navigate to Payment Page with order data
    navigate("/payment", {
      state: { cart, total: getCartTotal(), form },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Form */}
        <form
          onSubmit={handleSubmit}
          className="md:col-span-2 bg-white shadow-md rounded-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <div className="space-y-4">
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full border rounded p-2"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border rounded p-2"
            />
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Address"
              required
              className="w-full border rounded p-2"
            />
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              required
              className="w-full border rounded p-2"
            />
            <input
              type="text"
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              required
              className="w-full border rounded p-2"
            />

            <div>
              <label className="block font-medium mb-2">Payment Method</label>
              <select
                name="paymentMethod"
                value={form.paymentMethod}
                onChange={handleChange}
                className="w-full border rounded p-2"
              >
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700"
          >
            Continue to Payment
          </button>
        </form>

        {/* Right - Order Summary */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold text-lg mt-4">
                <span>Total:</span>
                <span>₹{getCartTotal()}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
