import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-purple-800 py-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">Calder Johnson</h1>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="text-white hover:text-gray-300">About Me</a>
          </li>
          <li>
            <a href="#portfolio" className="text-white hover:text-gray-300">Portfolio</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar