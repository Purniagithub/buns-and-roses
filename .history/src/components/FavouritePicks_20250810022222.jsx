// src/components/FavouritePicks.jsx
import React from "react";

const FavouritePicks = () => {
  const picks = [
    { id: 1, img: "/pngegg (10).png", title: "Chocolate Cake" },
    { id: 2, img: "/pngegg (11).png", title: "Rose Bouquet" },
    { id: 3, img: "https://source.unsplash.com/400x600/?cupcake", title: "Cupcakes" },
    { id: 4, img: "https://source.unsplash.com/400x400/?macarons", title: "Macarons" },
    { id: 5, img: "https://source.unsplash.com/400x450/?bread", title: "Fresh Bread" },
    { id: 6, img: "https://source.unsplash.com/400x350/?cookies", title: "Cookies" },
  ];

  return (
    <section className="py-12 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-800 mb-8">
          Your Favourite Picks
        </h2>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {picks.map((item) => (
            <div
              key={item.id}
              className="relative break-inside-avoid overflow-hidden rounded-xl shadow-md hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto object-cover"
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
