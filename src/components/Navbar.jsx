import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-orange-600">Buns & Roses</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-orange-600">Home</Link>
        <Link to="/about" className="text-gray-700 hover:text-orange-600">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
