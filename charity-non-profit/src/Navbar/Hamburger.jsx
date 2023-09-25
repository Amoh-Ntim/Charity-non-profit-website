import { useState } from "react";

const HamburgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

      const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex justify-between">
      <div className="flex">
           {/* logo */}
           <img  src="/VGF Logo File  (1) 1.png" alt="My Image" />
        </div>
      <div className="relative">
        <button
          className="text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          &#9776; {/* Hamburger icon */}
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 right-0 mt-12 bg-white p-4 border border-gray-300 shadow-md">
            {/* Menu items go here */}
            <ul>
            <li><a href="#" className="text-black-500 hover:text-green-700">Services</a></li>
            <li><a href="#" className="text-black-500 hover:text-green-700">Pricing</a></li>
            <li><a href="#" className="text-black-500 hover:text-green-700">Features</a></li>
            <li><a href="#" className="text-black-500 hover:text-green-700">AboutUs</a></li>
            <li><a href="#" className="text-black-500 hover:text-green-700">Login</a></li>
            <li><a href="#" className="text-black-500 hover:text-green-700">Register</a></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default HamburgerMenu