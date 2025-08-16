import RelationshipSection from "../components/RelationshipSec tion";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <div
  className="min-h-[70vh] flex items-center bg-cover bg-center relative"
  style={{ backgroundImage: "url('/image 2.jpg')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Hero Content */}
  <div className="relative z-10 max-w-2xl px-6 md:px-12 text-left">
    <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide border-b-4 border-orange-400 inline-block pb-2 drop-shadow-lg">
      #Gift With Feelings
    </h1>
    <p className="mt-4 text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow">
      Make every gift memorable with a touch of warmth and beauty.
    </p>
  </div>
</div>


      {/* About Content */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
  <h2 className="text-4xl font-bold text-orange-600 mb-2 relative inline-block">
    About Us
    <span className="block w-16 h-1 bg-orange-500 mx-auto mt-2 rounded"></span>
  </h2>
  <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
    At <span className="font-semibold text-orange-700">Buns and Roses</span>, we blend the warmth of 
    freshly baked buns with the charm of handcrafted floral arrangements. 
    Our mission is to make every day feel like a <span className="font-medium italic">celebration</span>.
  </p>
  <br/><br/>
  <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
  We understand that every relationship carries a unique feeling, and gifts are the perfect way to express those emotions. Whether it's a special occasion like Valentine’s Day, New Year’s, Diwali, or a personal milestone like birthdays and anniversaries, we offer a curated collection to help you say what your heart feels.
  we offer a wide range of gifts, hampers, personalized products, cakes, and flowers, designed to make every moment unforgettable. 
  </p>
</section>
<section className="relative bg-pink-500 rounded-3xl max-w-7xl h-auto md:h-64 mx-auto px-6 py-12 my-6 flex flex-col md:flex-row items-center overflow-hidden shadow-lg">
  {/* Left text */}
  <div className="md:w-1/2 text-black text-center md:text-left z-10">
    <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
      Mission
    </h2>
    <p className="text-lg md:text-xl font-medium leading-relaxed">
      Offering a wide range of thoughtful gifting options 
      for every celebration and self-care moment — with fast delivery and 
      exceptional customer service.
    </p>
  </div>

  {/* Right image */}
  <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
    <img
      src="/image 15.jpg"
      alt="Couple celebrating with flowers and wine"
      className="rounded-2xl w-full max-w-sm md:max-w-md object-cover shadow-xl"
    />
  </div>

  {/* Decorative overlay shape */}
  <div className="pointer-events-none absolute top-0 right-0 w-48 h-48 bg-pink-700 rounded-bl-full opacity-70 hidden md:block"></div>
</section>

{/* Newsletter Section */}
<section className="bg-orange-50 py-4  px-6 mt-10 mb-4 rounded-xl shadow-md max-w-8xl mx-auto text-center">
  <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">
    Subscribe to Our Newsletter
  </h2>
  <p className="text-lg text-gray-700 mb-2">
    Get the latest updates on gifts, offers, and special celebrations straight to your inbox.
  </p>

  {/* Form */}
  <form className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-2xl mx-auto">
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full sm:flex-1 px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-orange-500 outline-none"
      required
    />
    <button
      type="submit"
      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300"
    >
      Subscribe
    </button>
  </form>

  {/* Small note */}
  <p className="text-sm text-gray-500 mt-2">
    We respect your privacy. Unsubscribe anytime.
  </p>
</section>


    </>
  );
};

export default About;
