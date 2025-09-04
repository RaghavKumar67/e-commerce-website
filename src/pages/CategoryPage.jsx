// src/pages/CategoryPage.jsx
import React, { useState } from "react";
import products from "../data/products"; // ✅ your product list
import ProductCard from "../components/ProductCard";
import { categories } from "../components/AllCategoriesDropdown"; // ✅ categories with icons

export default function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]); // min & max

  // ✅ Extract brands dynamically if available in products.js
  const brands = [
    ...new Set(products.map((p) => (p.brand ? p.brand : null)).filter(Boolean)),
  ];

  // ✅ Filtering logic
  const filteredProducts = products.filter((p) => {
    const inCategory = selectedCategory ? p.category === selectedCategory : true;
    const inBrand = selectedBrand ? p.brand === selectedBrand : true;
    const inPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return inCategory && inBrand && inPrice;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Left Filters */}
      <aside className="bg-white rounded-lg shadow p-4 md:col-span-1">
        <h2 className="font-semibold text-lg mb-4">Filters</h2>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Categories</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat.name}>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="category"
                    value={cat.name}
                    checked={selectedCategory === cat.name}
                    onChange={() => setSelectedCategory(cat.name)}
                  />
                  <span className="flex items-center gap-2">
                    <span>{cat.icon}</span>
                    {cat.name}
                  </span>
                </label>
              </li>
            ))}
            <li>
              <button
                className="text-sm text-blue-600"
                onClick={() => setSelectedCategory("")}
              >
                Clear
              </button>
            </li>
          </ul>
        </div>

        {/* Brands (optional) */}
        {brands.length > 0 && (
          <div className="mb-6">
            <h3 className="font-medium mb-2">Brands</h3>
            <ul className="space-y-2">
              {brands.map((brand) => (
                <li key={brand}>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="brand"
                      value={brand}
                      checked={selectedBrand === brand}
                      onChange={() => setSelectedBrand(brand)}
                    />
                    <span>{brand}</span>
                  </label>
                </li>
              ))}
              <li>
                <button
                  className="text-sm text-blue-600"
                  onClick={() => setSelectedBrand("")}
                >
                  Clear
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Price Range</h3>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full"
          />
          <p className="text-sm text-gray-600 mt-1">
            ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>
      </aside>

      {/* Right Products */}
      <section className="md:col-span-3">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} results
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
