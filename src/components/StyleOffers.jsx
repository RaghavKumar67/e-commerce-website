
import React from "react";

export default function StyleOffers() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Offer Box */}
      <div className="bg-gradient-to-r from-yellow-200 to-orange-100 rounded-2xl p-10 flex flex-col justify-between">
        <div className="pt-6">
          <p className="text-sm font-semibold text-gray-700">NEW STYLE</p>
          <h2 className="text-2xl md:text-4xl font-bold max-w-xl leading-snug">
            Get 65% Offer & Make New Fusion.
          </h2>
        </div>
        <button className="mt-6 inline-flex items-center px-5 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full shadow-md transition w-auto self-start">
          Shop Now <span className="ml-2">➜</span>
        </button>
      </div>

      {/* Right Offer Box */}
      <div className="bg-pink-200 rounded-2xl p-10 flex flex-col justify-between">
        <div className="pt-6">
          <p className="text-sm font-semibold text-gray-700">MEGA OFFER</p>
          <h2 className="text-2xl md:text-4xl font-bold max-w-xl leading-snug">
            Make your New Styles with Our Products
          </h2>
        </div>
        <button className="mt-6 inline-flex items-center px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-md transition w-auto self-start">
          Shop Now <span className="ml-2">➜</span>
        </button>
      </div>
    </section>
  );
}
