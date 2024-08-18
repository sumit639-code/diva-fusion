"Use Client";
import React from "react";

const ProductPage = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-pink-50 p-4">
      <header className="flex justify-between items-center mb-6">
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
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <div className="text-xl font-bold text-black">Product Details</div>
      </header>

      <div className="bg-white rounded-xl p-4 shadow mb-4">
        <img
          src="path-to-dress-image"
          alt="Product"
          className="w-full rounded-xl mb-4"
        />
        <h2 className="text-2xl font-bold text-black mb-2">
          White Dress | Cotton
        </h2>
        <p className="text-gray-700 mb-4">
          This elegant white dress is made from premium cotton, offering a
          comfortable and stylish fit for any occasion.
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-semibold text-black">₹ 999</span>
          <button className="px-4 py-2 bg-gray-200 rounded-lg text-black">
            Add to Cart
          </button>
        </div>
      </div>

      <button className="w-full mt-4 bg-red-400 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500">
        View Cart
      </button>
    </div>
  );
};

export default ProductPage;
