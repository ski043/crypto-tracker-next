import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const index = ({ data }) => {
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <Navbar />
      <Banner />
      {data.map((item) => (
        <h2 key={item.id}>{item.id}</h2>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const res = await fetch(url);
  const data = await res.json();
  return { props: { data } };
}

export default index;
