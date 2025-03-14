import React, { useEffect, useState } from "react";
import img from "../../assets/L&F/aaa.png";
import img2 from "../../assets/L&F/bbb.png";
import img3 from "../../assets/L&F/ccc.png";
import img4 from "../../assets/L&F/ddd.png";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="w-full">
      <div className="carousel w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]">
        {[img, img3, img2, img4].map((image, index) => (
          <div
            key={index}
            className={`carousel-item relative w-full ${
              currentSlide === index + 1 ? "block" : "hidden"
            }`}
          >
            <img
              src={image}
              className="w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button
                onClick={() => setCurrentSlide(index === 0 ? totalSlides : index)}
                className="btn btn-circle btn-sm sm:btn-md md:btn-lg"
              >
                ❮
              </button>
              <button
                onClick={() => setCurrentSlide(index === totalSlides - 1 ? 1 : index + 2)}
                className="btn btn-circle btn-sm sm:btn-md md:btn-lg"
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
