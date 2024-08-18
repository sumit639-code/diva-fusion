"use client";
import { combined } from "@/Data/combinedata";
import React, { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";
const ProductPage = ({ params }) => {
  const [product, setProduct] = useState(null);
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
          <button className="w-full bg-red-400 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500 flex items-center justify-center space-x-3">
            <div>Add to cart</div>
            <IoCartOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
