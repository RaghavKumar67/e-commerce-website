import React from "react";
import HeroSlider from "../components/HeroSlider";
import homeData from "../data/homeData";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Slider - FULL WIDTH */}
      <section className="w-full">
        <HeroSlider slides={homeData.heroSlides} />
      </section>

      {/* Style Offers Section - constrained width */}
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
      <h2 className="text-2xl md:text-4xl font-bold  max-w-xl leading-snug">
        Make your New Styles with Our Products
      </h2>
    </div>
    <button className="mt-6 inline-flex items-center px-5 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full shadow-md transition w-auto self-start">
      Shop Now <span className="ml-2">➜</span>
    </button>
  </div>
</section>


      {/* Product Categories */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Shop by Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {homeData.categories.map((category) => (
            <div
              key={category.id}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Our Brands</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 items-center">
          {homeData.brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4 bg-white shadow rounded-lg"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
