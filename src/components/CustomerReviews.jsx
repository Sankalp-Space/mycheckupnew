import React from "react";
import { Play, Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    age: 34,
    city: "Mumbai",
    quote:
      "The home collection service was so convenient. Reports came within 24 hours!",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "/review1.jpg",
  },
  {
    name: "Rajesh Kumar",
    age: 42,
    city: "Delhi",
    quote: "Professional staff and accurate results. Highly recommended!",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "/review2.jpg",
  },
  {
    name: "Anita Desai",
    age: 29,
    city: "Bangalore",
    quote: "Best diagnostic service I’ve used. Very professional and caring.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    poster: "/review3.jpg",
  },
];

export default function CustomerReviews() {
  return (
    <section className="relative bg-gradient-to-b from-[#F3FAFF] to-white py-12 md:py-24 px-4 md:px-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#0B2B4C] px-4">
        What Our Customers Say
      </h2>
      <p className="text-center text-gray-500 mt-3 max-w-xl mx-auto text-sm md:text-base px-4">
        Real stories from people who trust MYCheckup for their health
      </p>

      <div className="mt-8 md:mt-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
        {/* Featured Video */}
        <div className="lg:col-span-2 relative rounded-xl md:rounded-2xl overflow-hidden shadow-md">
          <video
            src={reviews[0].video}
            className="w-full h-64 md:h-96 object-contain"
            poster={reviews[0].poster}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <button className="absolute inset-0 flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 text-blue-600 fill-blue-600" />
            </span>
          </button>

          <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 text-white">
            <div className="flex gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-xs md:text-sm italic">"{reviews[0].quote}"</p>
            <p className="mt-1 md:mt-2 text-xs md:text-sm font-semibold">
              {reviews[0].name}, {reviews[0].age}
            </p>
            <p className="text-[10px] md:text-xs opacity-80">{reviews[0].city}</p>
          </div>
        </div>

        {/* Side Reviews */}
        <div className="flex flex-col gap-4 md:gap-8">
          {reviews.slice(1).map((review, i) => (
            <div
              key={i}
              className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-md"
            >
              <video
                src={review.video}
                className="w-full h-48 md:h-52 object-cover"
                poster={review.poster}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <button className="absolute inset-0 flex items-center justify-center">
                <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-blue-600 fill-blue-600" />
                </span>
              </button>

              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 text-white">
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3 h-3 md:w-3.5 md:h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-xs md:text-sm italic">"{review.quote}"</p>
                <p className="mt-1 md:mt-2 text-xs md:text-sm font-semibold">
                  {review.name}, {review.age}
                </p>
                <p className="text-[10px] md:text-xs opacity-80">{review.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
