import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import homeData from "../data/homeData";
import Categories from "../components/Categories";
import BrandsSlider from "../components/BrandsSlider";
import StyleOffers from "../components/StyleOffers";

import ProductList from "../components/ProductList";
import products from "../data/products";
export default function Home() {

  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    // Check if product already exists in cart
    const existing = cart.find((p) => p.id === product.id);
    if (existing) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    // Redirect to cart page
    navigate("/cart");
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
