import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
          <div key={index} className="relative w-full h-[500px]">
            {/* Full-width background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-6 md:px-16 bg-black/30">
              <h2 className="text-3xl md:text-5xl font-bold max-w-xl">
                {slide.title}
              </h2>
              <p className="mt-4 text-lg md:text-xl max-w-lg">
                {slide.subtitle}
              </p>
              <button className="mt-6 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-medium">
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
