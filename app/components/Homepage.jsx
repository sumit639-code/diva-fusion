import React from "react";
import Product from "./product";
import { Data } from "@/Data/data";
import Link from "next/link";
import Recomended from "./Recomended";
import { FaArrowRightLong } from "react-icons/fa6";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-pink-50 p-4 mb-10">
      <header className="flex justify-between items-center mb-6">
        <div className="text-xl font-bold text-black">Diva Fusion</div>
        <div className="flex space-x-4">
          <button>
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0018 14.158V11a8.001 8.001 0 00-7-7.938V3a2 2 0 10-4 0v.062A8.001 8.001 0 002 11v3.159c0 .414-.17.823-.472 1.122L0 17h5"
              ></path>
            </svg>
          </button>
          
        </div>
      </header>

      <div className="flex items-center mb-6">
        <div className="flex-1 flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z"
            ></path>
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="ml-2 w-full bg-transparent border-none focus:outline-none text-black"
          />
        </div>
        <button className="ml-4">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 12h4l-5-7-5 7h4v8z"
            ></path>
          </svg>
        </button>
      </div>

      <div className="bg-black rounded-xl p-4 shadow-sm mb-6 relative overflow-hidden">
        <h2 className="text-lg font-bold mb-2 text-white z-10">Trending Now</h2>
        <p className="text-sm mb-4 text-white z-10">
          Discount 60% for the first transaction.
        </p>
        <img
          src="./banner.jpg"
          alt="Trending"
          className="w-full h-full opacity-40 absolute top-0 left-0"
        />
        <div className="flex justify-between items-center">
          <Link
            href="/recomended"
            className="bg-red-400 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 z-10"
          >
            Order Now
          </Link>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-black">Category</h3>
          <button className="text-sm text-red-400">See All</button>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
              <img src="./saree.png" alt="Skin Care" className="w-6 h-6" />
            </div>
            <p className="text-xs mt-2 text-black">Saree</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
              <img src="./dress.png" alt="Make Up" className="w-6 h-6" />
            </div>
            <p className="text-xs mt-2 text-black">Kurti</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
              <img src="./necklace.png" alt="Fashion" className="w-6 h-6" />
            </div>
            <p className="text-xs mt-2 text-black">Jwellery</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
              <img src="./silk.png" alt="Shoes" className="w-6 h-6" />
            </div>
            <p className="text-xs mt-2 text-black">Silk</p>
          </div>
        </div>
      </div>

      <div>
        <Link
          href="/recomended"
          className="text-lg font-bold mb-4 text-black flex items-center "
        >
          <div>Recommended for you</div>
          <FaArrowRightLong className="ml-2" />
        </Link>
        <div className="flex space-x-4 overflow-x-scroll">
          {Data.map((fn) => (
            <Product props={fn} key={fn.id} />
          ))}
          {/* <Recomended/> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
