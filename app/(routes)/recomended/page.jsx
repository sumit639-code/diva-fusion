"use client";
import React, { useEffect, useState } from "react";
import Mainproduct from "@/app/components/Mainproduct"; // Ensure this path is correct
import { sarees } from "@/Data/saree";
import { Silk } from "@/Data/silk";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import { RiLayoutRowLine } from "react-icons/ri";
import { RiLayoutGridFill } from "react-icons/ri";
import { Kurti } from "@/Data/kurti";
// Import data

// Combine and shuffle data
const combinedData = [...sarees, ...Silk,...Kurti];

const shuffleArray = (array) => {
  const shuffledArray = array.slice(); // Create a copy to avoid mutating the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const page = () => {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    // Shuffle data on component mount and set it to state
    setShuffledData(shuffleArray(combinedData));
  }, []);
  const [layout, setLayout] = useState(2);
  const [color, setColor] = useState({
    col1: "white",
    col2: "black",
  });
  return (
    <div className="mb-20 p-3 bg-gradient-to-b from-pink-300 to-fuchsia-50 font-primary">
      <div className=" flex justify-between">
        <Link href="/Category">
          {" "}
          <FaArrowLeft size={25} className="  text-white" />
        </Link>
        <div className="text-black text-xl">Recomended</div>
        <div className="flex space-x-2">
          {" "}
          <RiLayoutRowLine
            size={25}
            onClick={() => {
              setLayout(1), setColor({ col1: "black", col2: "white" });
            }}
            className={`  text-${color.col1} `}
          />
          <RiLayoutGridFill
            size={25}
            onClick={() => {
              setLayout(2), setColor({ col1: "white", col2: "black" });
            }}
            className={`  text-${color.col2} `}
          />
        </div>
      </div>
      <div
        className={`grid grid-cols-${layout} sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 mt-3`}
      >
        {shuffledData.map((props) => (
          <Mainproduct key={props.id} props={props} />
        ))}
      </div>
    </div>
  );
};

export default page;
