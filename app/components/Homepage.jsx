import React from "react";
import Product from "./Product";

import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

import { Kurti } from "@/Data/kurti";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 to-fuchsia-50 p-4 pb-10 font-primary ">
      <header className="flex justify-between items-center mb-6">
        <div className="text-xl font-bold text-white">Diva Fusion</div>
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

      <div className="bg-slate-700 rounded-xl p-4 shadow-lg mb-6 relative overflow-hidden ">
        {/* <video src="./Small-waves.mp4" width="600" height="400" loop={true} autoplay="true"  className=" absolute top-0 left-0"/> */}
        <h2 className="text-lg font-bold mb-2 text-white z-10">Trending Now</h2>
        <p className="text-xs mb-4 text-white z-10 font-secondary font-normal">
          Discount 60% for the first transaction.
        </p>
        <Image
          width={350}
          height={150}
          loading="lazy"
          src="/banner.jpg"
          alt="Trending"
          className="w-full h-full opacity-25 absolute top-0 left-0"
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
          <h3 className="text-lg font-bold ">Category</h3>
          <Link href="/Category" className="text-sm text-red-900">
            See All
          </Link>
        </div>
        <div className="flex justify-between">
          <Link
            href="/Cloths-dress/Saree"
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center shadow-lg">
              <Image src="/saree.png" width={100} height={100} Loading="lazy" alt="Skin Care" className="w-6 h-6" />
            </div>
            <p className="text-xs mt-2 text-black">Saree</p>
          </Link>
          <Link
            href="/Cloths-dress/Kurti"
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center shadow-lg">
              <Image src="/dress.png" width={100} height={100} Loading="lazy" alt="Make Up" className="w-6 h-6" />
            </div>
            <p className="text-xs mt-2 text-black">Kurti</p>
          </Link>
          <Link
            href="/Cloths-dress/Jwellery"
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center shadow-lg">
              <Image src="/necklace.png" width={100} height={100} Loading="lazy" alt="Fashion" className="w-6 h-6" />
            </div>
            <p className="text-xs mt-2 text-black">Jwellery</p>
          </Link>
          <Link
            href="/Cloths-dress/Silk"
            className="flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center shadow-lg">
              <Image src="/silk.png" width={100} height={100} Loading="lazy" alt="Shoes" className="w-6 h-6" />
            </div>
            <p className="text-xs mt-2 text-black">Silk</p>
          </Link>
        </div>
      </div>

      <div>
        <Link
          href="/recomended"
          className="text-lg font-bold mb-4 text-black flex items-center  "
        >
          <div>Recommended for you</div>
          <FaArrowRightLong className="text-red-500 ml-2 animate-pulse" />
        </Link>
        <div className="flex space-x-4 overflow-x-scroll p-2">
          {Kurti.map((fn) => (
            <Product props={fn} key={fn.id} />
          ))}
          <div className="bg-red-50 p-4 rounded-xl w-96 shadow-xl flex items-center justify-center">
            <Link
              href="/recomended"
              className=" p-2 rounded-lg w-32 text-red-400 flex items-center justify-center"
            >
              View all{" "}
              <FaArrowRightLong className="text-red-500 ml-2 animate-pulse " />
            </Link>
          </div>
          {/* <Recomended/> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
