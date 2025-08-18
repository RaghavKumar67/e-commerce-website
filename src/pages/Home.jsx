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
      <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {homeData.styleOffers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col items-center text-center bg-white p-6 shadow rounded-lg"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-24 h-24 mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">{offer.title}</h3>
            <p className="text-gray-500 text-sm">{offer.discount}</p>
          </div>
        ))}
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
