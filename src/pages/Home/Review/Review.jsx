import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="bg-gray-50 py-20 px-6 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <div className="text-center py-6">
          <h2 className="text-3xl font-extrabold text-blue-400 drop-shadow-lg">
            What Our Users Say
          </h2>
          <p className="text-lg text-blue-300 py-2 ">
            Review Section
          </p>
        </div>
        <Swiper
          spaceBetween={50}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="relative bg-white p-10 rounded-3xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                {/* Elegant Floating Shadow Effect */}
                <div className="absolute -top-5 -left-5 w-full h-full bg-white rounded-3xl opacity-10 blur-lg"></div>

                <img
                  src={review.image}
                  alt={review.name}
                  className="w-24 h-24 rounded-full mx-auto border-4 border-gray-300 shadow-md mb-5"
                />
                <p className="text-lg italic text-gray-600">{review.review}</p>
                <h4 className="mt-5 font-semibold text-blue-900 text-xl">
                  {review.name}
                </h4>
                <p className="text-gray-500 text-sm">{review.profession}</p>
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-500"
                      fill="yellow"
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
