import React from "react";
import HeroSlider from "../components/HeroSlider";
import homeData from "../data/homeData";
import Categories from "../components/Categories";
import BrandsSlider from "../components/BrandsSlider";
import StyleOffers from "../components/StyleOffers";

import ProductList from "../components/ProductList";
import products from "../data/products";

export default function Home() {

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };
  
  return (
    <div className="home-page">
      
      <section className="w-full">
        <HeroSlider slides={homeData.heroSlides} />
      </section>

        {/* Style Offers - grey gradient */}
      
        <StyleOffers />
      

      {/* Categories - plain white */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100">
      <Categories />
      </section>

      {/* Product List - grey gradient */}
      
        <ProductList products={products} onAddToCart={handleAddToCart} />
      

      {/* Brands - plain white */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100">
      <BrandsSlider />
      </section>
    </div>
  );
}
