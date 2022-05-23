import Link from "next/link";
import React from "react";
import Banner from "../components/Banner";
import CoinList from "../components/CoinList";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

const index = ({ data }) => {
  return (
    <div className="w-full min-h-screen bg-gray-200">
      <Navbar />
      <Banner />
      <div className="container mx-auto px-6">
        <div className="flex bg-teal-500 text-white text-lg font-normal p-4 rounded-lg mt-16">
          <h3 className="basis-1/2">Coin</h3>
          <h3 className="basis-1/6">Price</h3>
          <h3 className="basis-1/6">24H Change</h3>
          <h3 className="basis-1/6">Market Cap</h3>
        </div>
        {data.map((item) => (
          <Link href={`/coin/${item.id}`} key={item.id}>
            <a>
              <CoinList {...item} />
            </a>
          </Link>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export async function getServerSideProps() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=30&page=1&sparkline=false";
  const res = await fetch(url);
  const data = await res.json();
  return { props: { data } };
}

export default index;
