import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  // Get data passed from Checkout
  const { cart, total, form } = location.state || {};

  // State for payment details
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
  });

  // ✅ State for popup
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setPaymentDetails({ ...paymentDetails, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();

    // Simulate payment success
    setShowPopup(true);
    clearCart();

    // Auto-close popup and redirect after 3s
    setTimeout(() => {
      setShowPopup(false);
      navigate("/"); // back to home
    }, 3000);
  };

  if (!cart || cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-xl font-bold">No order found!</h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Payment</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - Payment Form */}
        <form
          onSubmit={handlePayment}
          className="md:col-span-2 bg-white shadow-md rounded-lg p-6"
        >
          <h2 className="text-xl font-semibold mb-4">Choose Payment Method</h2>

          {form.paymentMethod === "card" && (
            <div className="space-y-4">
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleChange}
                placeholder="Card Number"
                required
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                name="expiry"
                value={paymentDetails.expiry}
                onChange={handleChange}
                placeholder="Expiry Date (MM/YY)"
                required
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleChange}
                placeholder="CVV"
                required
                className="w-full border rounded p-2"
              />
            </div>
          )}

          {form.paymentMethod === "upi" && (
            <div className="space-y-4">
              <input
                type="text"
                name="upiId"
                value={paymentDetails.upiId}
                onChange={handleChange}
                placeholder="UPI ID (e.g. user@upi)"
                required
                className="w-full border rounded p-2"
              />
            </div>
          )}

          {form.paymentMethod === "cod" && (
            <p className="text-gray-600">
              You chose <strong>Cash on Delivery</strong>. Pay when you receive
              the order.
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Confirm Payment
          </button>
        </form>

        {/* Right - Order Summary */}
        <div className="bg-gray-100 rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
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
            <span>₹{total}</span>
          </div>
        </div>
      </div>

      {/* ✅ Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-sm">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              🎉 Order Placed Successfully!
            </h2>
            <p className="text-gray-700">
              Thank you, {form.fullName}. Redirecting to home...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
