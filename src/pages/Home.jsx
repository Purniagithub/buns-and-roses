import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-rose-50 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-rose-600 mb-6">
        Welcome to <span className="text-orange-500">Buns and Roses</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-xl">
        Where warm buns meet beautiful blooms.
      </p>
    </div>
  );
};

export default Home;

