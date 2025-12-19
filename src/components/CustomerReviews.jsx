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
    featured: true,
  },
  {
    name: "Rajesh Kumar",
    age: 42,
    city: "Delhi",
    quote: "Professional staff and accurate results. Highly recommended!",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    name: "Anita Desai",
    age: 29,
    city: "Bangalore",
    quote: "Best diagnostic service I’ve used. Very professional and caring.",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

export default function CustomerReviews() {
  return (
    <section className="relative bg-gradient-to-b from-[#F3FAFF] to-white py-24 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B2B4C]">
        What Our Customers Say
      </h2>
      <p className="text-center text-gray-500 mt-3 max-w-xl mx-auto">
        Real stories from people who trust MYCheckup for their health
      </p>

      <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Featured Video */}
        <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-xl">
          <video
            src={reviews[0].video}
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1551076805-e1869033e561"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <button className="absolute inset-0 flex items-center justify-center">
            <span className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
              <Play className="w-8 h-8 text-blue-600 fill-blue-600" />
            </span>
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="italic text-lg max-w-xl">“{reviews[0].quote}”</p>
            <p className="mt-3 font-semibold">
              {reviews[0].name}, {reviews[0].age}
            </p>
            <p className="text-sm opacity-80">{reviews[0].city}</p>
          </div>
        </div>

        {/* Side Reviews */}
        <div className="flex flex-col gap-8">
          {reviews.slice(1).map((review, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              <video
                src={review.video}
                className="w-full h-52 object-cover"
                poster="https://images.unsplash.com/photo-1551076805-e1869033e561"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <button className="absolute inset-0 flex items-center justify-center">
                <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                  <Play className="w-6 h-6 text-blue-600 fill-blue-600" />
                </span>
              </button>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm italic">“{review.quote}”</p>
                <p className="mt-2 text-sm font-semibold">
                  {review.name}, {review.age}
                </p>
                <p className="text-xs opacity-80">{review.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
