import React from "react";
import { FiMenu, FiGlobe, FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Logo = () => (
  <div className="flex items-center">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
      alt="Airbnb Logo"
      className="h-8"
    />
  </div>
);

const UserMenu = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 cursor-pointer">
        <FiGlobe className="text-gray-600" size={20} />
      </div>

      <div className="flex items-center space-x-2 border border-gray-300 rounded-full p-2 hover:shadow-md cursor-pointer">
        <FiMenu className="text-gray-600" size={20} />
        <FaUserCircle className="text-gray-600" size={24} />
      </div>
    </div>
  );
};

const SearchBar = () => (
  <div className="flex items-center justify-between bg-white border border-gray-300 rounded-full p-2 shadow-sm hover:shadow-md transition-shadow border-b border-gray-200">
    <div className="px-4">
      <p className="text-s font">Anywhere</p>
    </div>
    <div className="border-l border-gray-300 h-6"></div>
    <div className="px-4">
      <p className="text-s font">Any week</p>
    </div>
    <div className="border-l border-gray-300 h-6"></div>
    <div className="px-4">
      <p className="text-s font text-gray-500">Add guests</p>
    </div>
    <div className="bg-red-500 text-white p-2 rounded-full ml-2">
      <FiSearch size={16} />
    </div>
  </div>
);

const HostComponent = () => (
  <div className="hidden md:flex items-center hover:bg-gray-100 rounded-full py-2 px-4 ">
    <p className="text-sm font-semibold">Airbnb your home</p>
  </div>
);

const Header = () => (
  <header className="max-w-6xl mx-auto flex items-center justify-between py-4 px-3 border-b border-gray-200">
    <Logo />
    <SearchBar />
    <div className="flex items-center">
      <HostComponent />
      <UserMenu />
    </div>
  </header>
);

export default Header;
