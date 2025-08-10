import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const celebrationItems = [
    { title: "Birthday Gifts", image: "/image 3.webp" },
    { title: "Send Rakhi Online", image: "/pngegg (3).png" },
    { title: "30 Mins Gifts", image: "/pngegg (4).png" },
    { title: "Anniversary Gifts", image: "/pngegg (7).png" },
    { title: "Wedding Gifts", image: "/pngegg.png" },
    { title: "House Warming", image: "/pngegg (9).png" },
    { title: "Balloon Decor", image: "pngegg (2).png" },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

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
              Where warm, fluffy buns meet elegant, fragrant blooms. A perfect
              blend of comfort and charm.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300">
              Explore Our Collection
            </button>
          </div>
        </div>
      </div>

      {/* Celebration Section with Slider */}
      <section className="py-12 bg-white px-4">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-4">
            Surprises for Every Celebration
          </h2>
          <p className="text-gray-600 text-lg">
            Thoughtful gifts for every special moment
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Slider {...sliderSettings}>
            {celebrationItems.map((item, index) => (
              <div key={index} className="px-2">
                <div className="bg-gradient-to-tr from-rose-50 to-orange-100 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition hover:scale-105">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-md font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Home;
