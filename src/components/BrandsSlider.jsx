import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import homeData from "../data/homeData";

export default function BrandsSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Our Brands</h2>
      <Slider {...settings}>
        {homeData.brands.map((brand) => (
          <div key={brand.id} className="px-1">
            <div className="flex items-center justify-center h-24">
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-16 object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
