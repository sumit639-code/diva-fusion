"use client";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { likeState } from "../state/atoms/Likestate.js";
import Image from "next/image.js";

const Product = ({ props }) => {
  const [likestate, setLikeState] = useRecoilState(likeState);

  // Check if the product is already liked
  const liked = likestate.some((item) => item.id === props.id);

  const handleLikeClick = () => {
    if (!liked) {
      // If the item is being liked, add it to the likeState array
      setLikeState([...likestate, props]);
    } else {
      // If the item is being unliked, remove it from the likeState array
      setLikeState(likestate.filter((item) => item.id !== props.id));
    }
  };

  // console.log(props.image);

  return (
    <div className="p-0 ">
      <div className="bg-white border-2 relative border-gray-200  p-4 rounded-md shadow-sm max-w-xs mx-auto h-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        <Link href={`/${props.id}`}>
          <Image
            src={props.image}
            width={150}
            height={150}
            alt="White Dress"
            className="w-full h-44 object-contain rounded-xl mb-4"
            loading="lazy"
            placeholder="empty"
            style={{objectFit: "contain"}}
          />
          <h4 className="text-sm font-bold text-gray-800 mb-1">
            {props.title}
          </h4>
          <p className="text-red-500 font-semibold text-lg">₹ {props.price}</p>
        </Link>
        <button
          onClick={handleLikeClick}
          className={`mt-4 p-2 rounded-full absolute top-0 right-5 opacity-50 ${
            liked ? "bg-red-500 text-white" : "bg-gray-300 text-gray-700"
          } flex items-center justify-center space-x-2 transition-all active:scale-[0.85]`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill={liked ? "red" : "none"}
            viewBox="0 0 24 24"
            stroke={liked ? "white" : "currentColor"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Product;
