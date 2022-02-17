import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row items-center justify-evenly w-full h-full ml-8 bg-gray-800">
      <div className="flex flex-col items-start justify-center basis-1/2 ml-8 pl-8">
        <p className="font-medium bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent pb-4">
          Aquascape Auction
        </p>

        <h1 className="font-bold text-7xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent leading-tight">
          SHOW YOUR ART TO THE WORLD
        </h1>

        <p className="font-medium bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent mt-4">
          Start with the Platform we built for your precious Art and Buy and
          Sell Aquascape from the talented artist.
        </p>

        <div className="flex flex-row p-4 mt-4">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-full text-sm lg:px-10 lg:py-3.5 sm:px-5 sm:py-2 text-center mr-6 mb-2 "
          >
            Get Started
          </button>

          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-light text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-800 rounded-md group-hover:bg-opacity-0">
              How it works
            </span>
          </button>
        </div>
      </div>
      <div className="basis-1/2 flex items-center justify-center p-16 ml-16">
        <Image
          className="flex"
          src="/banner.png"
          alt="Banner Auction"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default HomePage;
