// src/components/RelationshipSection.jsx
import React from "react";

const RelationshipSection = () => {
  return (
    <section className="relative bg-pink-500 rounded-3xl max-w-6xl mx-auto px-6 py-12 my-12 flex flex-col md:flex-row items-center overflow-hidden">
      {/* Left text */}
      <div className="md:w-1/2 text-white text-center md:text-left z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
          Enriching Relationships <span className="inline-block ml-2">❤️</span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold">
          Through Thoughtful <span className="inline-block ml-2">🎁</span> Gifts
        </h3>
      </div>

      {/* Right image */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
        <img
          src="/image 15.jpg"
          alt="Couple celebrating with flowers and wine"
          className="rounded-2xl max-h-64 md:max-h-80 object-cover shadow-lg"
        />
      </div>

      {/* Optional overlay shape (like your banner's pink shape) */}
      <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 bg-pink-700 rounded-bl-full opacity-70 hidden md:block"></div>
    </section>
  );
};

export default RelationshipSection;
