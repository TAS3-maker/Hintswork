import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
import hintsLogo from "../assets/hintsLogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md ">
      <nav className="flex justify-around items-center px-6 py-4 ">

        <div className="flex items-center space-x-10">
          <img
            src={hintsLogo}
            alt="logo"
            className="h-20 w-auto object-contain"
          />
        </div>


        <ul className="hidden md:flex items-center gap-8 text-lg font-medium z-10">
          <li>
            <a href="#" className="text-red-500 hover:text-red-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600 ">How It Works</a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600">Apps</a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600 z-50">Science</a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600">Awards</a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600">Blog</a>
          </li>
          <li>
            <a href="#" className="hover:text-red-600">Contact</a>
          </li>
        </ul>

    
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>


      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li>
              <a href="#" className="text-red-500">Home</a>
            </li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Apps</a></li>
            <li><a href="#">Science</a></li>
            <li><a href="#">Awards</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
