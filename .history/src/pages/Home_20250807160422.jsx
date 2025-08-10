import React from 'react';

const Home = () => {
  const celebrationItems = [
    "Birthday Gifts",
    "Send Rakhi Online",
    "30 Mins Gifts",
    "Anniversary Gifts",
    "Wedding Gifts",
    "House Warming",
    "Balloon Decor",
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-80 bg-gradient-to-br from-pink-200 via-rose-100 to-orange-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src="/pngegg (1).png"
              alt="Delicious buns and roses"
              className="w-full max-w-md h-auto rounded-3xl transform hover:scale-105 transition duration-500"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-rose-700 leading-tight mb-4">
              Welcome to <span className="text-orange-500">Buns and Roses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Where warm, fluffy buns meet elegant, fragrant blooms. A perfect blend of comfort and charm.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300">
              Explore Our Collection
            </button>
          </div>
        </div>
      </div>

      {/* Celebration Section */}
      <section className="py-12 bg-white px-4">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-4">
            Surprises for Every Celebration
          </h2>
          <p className="text-gray-600 text-lg">
            Thoughtful gifts for every special moment
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {celebrationItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-rose-50 to-orange-100 p-6 rounded-xl shadow-md text-center hover:shadow-xl transition hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-300 flex items-center justify-center text-white text-xl font-bold">
                🎁
              </div>
              <h3 className="text-md font-semibold text-gray-800">{item}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
