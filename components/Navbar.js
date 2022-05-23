import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-300">
      <div className="container  px-6 py-4 flex justify-between items-center mx-auto">
        <h1 className="font-bold text-2xl text-teal-500 ">
          Jans Crypto Tracker
        </h1>
        <button className="bg-teal-500 text-white py-3 px-6 rounded-lg">
          EUR
        </button>
      </div>
    </div>
  );
};

export default Navbar;
