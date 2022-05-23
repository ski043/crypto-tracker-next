import React from "react";
import Navbar from "../../components/Navbar";
import Image from "next/image";

const id = ({ coin }) => {
  const text = coin.description.en;
  const description = text.split(".")[0];
  console.log(description);
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="flex">
        <div className="basis-1/4 bg-green-400 flex flex-col  ">
          <Image src={coin.image.large} alt="" width={200} height={200} />
          <p>{description}</p>
        </div>
        <div className="basis-3/4 bg-red-400"></div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();
  return {
    props: { coin: data }, // will be passed to the page component as props
  };
}

export default id;
