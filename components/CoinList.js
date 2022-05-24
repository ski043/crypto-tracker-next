import React from "react";
import Image from "next/image";

const CoinList = ({
  name,
  image,
  symbol,
  current_price,
  price_change_percentage_24h,
  market_cap,
}) => {
  return (
    <>
      <div className="w-full flex my-8 px-4 items-center">
        <div className="basis-1/2 flex items-center">
          <Image src={image} alt="logo" width={55} height={52} />
          <div className="ml-4">
            <h3 className="font-semibold text-xl">{symbol.toUpperCase()}</h3>
            <h3 className="font-normal ">{name}</h3>
          </div>
        </div>
        <div className="basis-1/6">
          <h3>{current_price.toLocaleString()} €</h3>
        </div>
        <div className="basis-1/6">
          {price_change_percentage_24h >= 0 ? (
            <h3 className="text-green-500">
              +{price_change_percentage_24h.toFixed(2)} %
            </h3>
          ) : (
            <h3 className="text-red-500">
              {price_change_percentage_24h.toFixed(2)} %
            </h3>
          )}
        </div>
        <div className="basis-1/6">
          <h3>{market_cap.toLocaleString()} €</h3>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-300"></div>
    </>
  );
};

export default CoinList;
