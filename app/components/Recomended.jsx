"use client";
import React, { useEffect, useState } from "react";
import Mainproduct from "@/app/components/Mainproduct"; // Ensure this path is correct
import { sarees } from "@/Data/saree";
import { Silk } from "@/Data/silk";

// Import data

// Combine and shuffle data
const combinedData = [...sarees, ...Silk];

const shuffleArray = (array) => {
  const shuffledArray = array.slice(); // Create a copy to avoid mutating the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const recomended = () => {
  const [shuffledData, setShuffledData] = useState([]);

  useEffect(() => {
    // Shuffle data on component mount and set it to state
    setShuffledData(shuffleArray(combinedData));
  }, []);
  return (
    <div className="mb-20 p-1">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {shuffledData?.map((props) => (
          <Mainproduct key={props.id} props={props} />
        ))}
      </div>
    </div>
  );
};

export default recomended;
