import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onAddToCart }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">New Arrivals</h2>
        <a href="#" className="text-pink-500 hover:underline">View All</a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
