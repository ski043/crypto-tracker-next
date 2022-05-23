import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const id = ({ coin }) => {
  const text = coin.description.en;
  const description = text.split(".")[0];
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="flex">
        <div className="basis-1/4  flex flex-col px-8 border-r-2 border-gray-300">
          <div className="w-full flex justify-center">
            <Image src={coin.image.large} alt="" width={200} height={200} />
          </div>
          <p className="pt-8 text-gray-600 text-lg">{description}.</p>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold">
              Rank:
              <span className="text-teal-500"> #{coin.market_cap_rank}</span>
            </h3>
            <h3 className="text-2xl font-semibold mt-3">
              Current price:{" "}
              <span className="text-teal-500">
                {coin.market_data.current_price.eur} €
              </span>
            </h3>
            <h3 className="text-2xl font-semibold mt-3">
              Cap:{" "}
              <span className="text-teal-500">
                {coin.market_data.market_cap.eur} €
              </span>
            </h3>
          </div>
        </div>
        <div className="basis-3/4 ">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#5eead4"
                fill="#14b8a6"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();
  const url = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=30`
  );
  const chart = await url.json();
  return {
    props: { coin: data }, // will be passed to the page component as props
  };
}

export default id;
