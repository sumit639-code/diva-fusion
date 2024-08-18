"use client";
import { cartState } from "@/app/state/atoms/Cartstate";
import { likeState } from "@/app/state/atoms/Likestate";
import { combined } from "@/Data/combinedata";
import React, { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useRecoilState } from "recoil";

const ProductPage = ({ params }) => {
  const [recoil, setRecoil] = useRecoilState(cartState);
  const [product, setProduct] = useState(null);
  const [likestate, setLikeState] = useRecoilState(likeState);
  const { id } = params;

  useEffect(() => {
    const foundProduct = combined.find((item) => item.id == id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Optional: A loading state if product is not found yet
  }

  const handleClick = () => {
    if (product) {
      // Check if product is already in the cart
      const existingProductIndex = recoil.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex > -1) {
        // Product exists in the cart, update its quantity
        const updatedRecoil = [...recoil];
        updatedRecoil[existingProductIndex] = {
          ...updatedRecoil[existingProductIndex],
          quantity: updatedRecoil[existingProductIndex].quantity
            ? updatedRecoil[existingProductIndex].quantity + 1
            : 1,
        };
        setRecoil(updatedRecoil);
      } else {
        // Product does not exist, add it to the cart with quantity 1
        setRecoil([...recoil, { ...product, quantity: 1 }]);
      }
    } else {
      console.error("Invalid product data");
    }
  };

  // Check if the product is already liked
  const liked = likestate.some((item) => item.id === product.id);

  const handleLikeClick = () => {
    if (!liked) {
      // If the item is being liked, add it to the likeState array
      setLikeState([...likestate, product]);
    } else {
      // If the item is being unliked, remove it from the likeState array
      setLikeState(likestate.filter((item) => item.id !== product.id));
    }
  };

  return (
    <div className="flex justify-center p-1">
      <div className="flex flex-col md:flex-row lg:flex-row md:space-x-16 lg:space-x-24 md:p-8 lg:p-12">
        {/* Image Section */}
        <div className="flex-shrink-0 md:w-1/2 lg:w-1/2 p-4">
          <img
            src={product.image}
            alt={product.alt}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 p-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            {product.title}
          </h1>
          <p className="text-gray-700 font-semibold text-sm md:text-base lg:text-lg mb-4">
            {product.description}
          </p>
          <p className="text-red-500 font-semibold text-lg md:text-xl lg:text-2xl mb-4">
            ₹{product.price}
          </p>
          <button
            onClick={handleClick}
            className="w-full bg-red-400 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 flex items-center justify-center space-x-3"
          >
            <div>Add to cart</div>
            <IoCartOutline />
          </button>

          <button
            onClick={handleLikeClick}
            className={`mt-4 p-2 rounded-full absolute top-0 right-5 opacity-50 ${
              liked ? "bg-red-500 text-white" : "bg-gray-300 text-gray-700"
            } flex items-center justify-center space-x-2`}
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
    </div>
  );
};

export default ProductPage;
