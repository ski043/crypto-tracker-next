import React from "react";
import Search from "./Search";

const Banner = ({ data }) => {
  return (
    <div className="w-full ">
      <div className="container mx-auto">
        <div className="text-center my-10">
          <h1 className="text-6xl font-bold">Crypto Tracker</h1>
          <p className="text-md font-normal text-gray-600 pt-3">
            Access all information regarding your crypto
          </p>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Banner;
