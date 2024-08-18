"use client";
import React from "react";
import { useRecoilState } from "recoil";
import { likeState } from "../state/atoms/Likestate";
import { cartState } from "../state/atoms/Cartstate";

const Like = ({ props }) => {
  const [likestate, setLikeState] = useRecoilState(likeState);
  const [cartstate, setCartState] = useRecoilState(cartState);

  const handleMoveToCart = () => {
    // Check if the product already exists in the cart
    const existingProduct = cartstate.find((item) => item.id === props.id);

    if (existingProduct) {
      // If the product exists, update the quantity (if applicable)
      const updatedCart = cartstate.map((item) =>
        item.id === props.id
          ? { ...item, quantity: item.quantity + 1 } // Assuming you have a quantity field
          : item
      );
      setCartState(updatedCart);
    } else {
      // If the product does not exist, add it to the cart
      setCartState([...cartstate, { ...props, quantity: 1 }]); // Assuming you add a quantity field
    }

    // Remove the product from the liked items
    setLikeState(likestate.filter((item) => item.id !== props.id));
  };

  const handleRemove = () => {
    setLikeState(likestate.filter((item) => item.id !== props.id));
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow mb-4 flex flex-col md:flex-row  justify-between">
      <div className="flex items-center">
        <img
          src={props.image}
          alt={props.title}
          className="w-16 h-16 rounded-xl object-cover"
        />
        <div className="flex flex-col justify-center flex-1 ml-4">
          <span className="text-base font-semibold text-black">
            {props.title}
          </span>
          <span className="text-base font-semibold text-black mt-2">
            ₹ {props.price}
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-5 md:flex-row md:items-center md:space-x-4 mt-4 md:mt-0">
        <button
          onClick={handleRemove}
          className=" text-white px-10 py-2 rounded-full shadow hover:bg-blue-600"
        >
          <svg
            className="w-6 h-6 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <button
          onClick={handleMoveToCart}
          className="bg-blue-500 text-white px-3 py-2 rounded-full shadow hover:bg-blue-600"
        >
          Move to Cart
        </button>
      </div>
    </div>
  );
};

export default Like;
