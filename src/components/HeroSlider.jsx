import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function HeroSlider({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-[600px]">
            {/* Full-width background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-center">
  {/* Keep container aligned left, not centered */}
  <div className="max-w-7xl mx-auto w-full">
    <div className="px-6 md:px-4">
      <h2 className="text-3xl md:text-7xl font-bold max-w-xl text-black">
        {slide.title}
      </h2>
      <p className="mt-4 text-lg md:text-xl max-w-lg text-black">
        {slide.subtitle}
      </p>
      <Link
  to="/category"
  className="mt-6 inline-block bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-full font-medium"
>
  {slide.buttonText}
</Link>
    </div>
  </div>
</div>

          </div>
        ))}
      </Slider>
    </div>
  );
}
