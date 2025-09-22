import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link

const categories = [
  { id: 1, name: "Dresses", img: "/assets/category-img/dresses.webp" },
  { id: 2, name: "Leather Bags", img: "/assets/category-img/bags.webp" },
  { id: 3, name: "Sweaters", img: "/assets/category-img/sweaters.webp" },
  { id: 4, name: "Shoes", img: "/assets/category-img/shoes.webp" },
  { id: 5, name: "Gifts", img: "/assets/category-img/gift.webp" },
  { id: 6, name: "Sneakers", img: "/assets/category-img/sneakers.webp" },
  { id: 7, name: "Watch", img: "/assets/category-img/watch.webp" },
  { id: 8, name: "Rings", img: "/assets/category-img/ring.webp" },
  { id: 9, name: "Cap", img: "/assets/category-img/cap.webp" },
  { id: 10, name: "Glass", img: "/assets/category-img/glass.webp" },
  { id: 11, name: "Baby Shop", img: "/assets/category-img/baby.webp" },
  { id: 12, name: "Leather Bags", img: "/assets/category-img/bags.webp" },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Our Categories</h2>
        <Link
          to="/category" // ✅ goes to /category
          className="text-blue-900 font-semibold hover:underline"
        >
          View All
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to="/category" // ✅ every card goes to /category
            className="bg-pink-50 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition"
          >
            <div className="w-20 h-20 flex items-center justify-center mb-4">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-gray-800 font-medium text-center">{cat.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
