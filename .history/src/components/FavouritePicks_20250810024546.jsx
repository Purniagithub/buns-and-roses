// src/components/FavouritePicks.jsx
import React from "react";

const FavouritePicks = () => {
  const picks = [
    { id: 1, img: "/pngegg (10).png", title: "Chocolate Cake" },
    { id: 2, img: "/pngegg (11).png", title: "Rose Bouquet" },
    { id: 3, img: "/pngegg (12).png", title: "Plants" },
    { id: 4, img: "/pngegg 13.webp", title: "Photo Gifts" },
    { id: 5, img: "/pngegg (13).png", title: "Hampers" },
    { id: 6, img: "/pngegg (14).png", title: "Birthday Flowers" },
  ];

  return (
    <section className="py-12 mb-4 bg-pink-300">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-800 mb-8">
          Your Favourite Picks
        </h2>

        {/* Evenly spaced grid instead of masonry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {picks.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FavouritePicks;
