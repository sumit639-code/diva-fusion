import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen bg-pink-50 p-4">
        <header className="flex justify-between items-center mb-6">
          <div className="text-xl font-bold text-black">Diva Fusion</div>
        </header>

        <h2 className="text-2xl font-semibold mb-4 text-black">Wishlist</h2>

        <div className="bg-white rounded-xl p-4 shadow mb-4 flex items-center justify-between">
          <img
            src="path-to-dress-image"
            alt="Dress"
            className="w-16 h-16 rounded-xl"
          />
          <div className="flex flex-col justify-center flex-1 ml-4">
            <span className="text-lg font-semibold text-black">
              White Dress | Cotton
            </span>
            <span className="text-lg font-semibold text-black mt-2">₹ 999</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-600">
              Move to Cart
            </button>
            <button>
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
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow mb-4 flex items-center justify-between">
          <img
            src="path-to-dress-image"
            alt="Dress"
            className="w-16 h-16 rounded-xl"
          />
          <div className="flex flex-col justify-center flex-1 ml-4">
            <span className="text-lg font-semibold text-black">
              White Dress | Cotton
            </span>
            <span className="text-lg font-semibold text-black mt-2">₹ 999</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-600">
              Move to Cart
            </button>
            <button>
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
          </div>
        </div>

        <button className="w-full mt-4 bg-red-400 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500">
          Move All to Cart
        </button>
      </div>
    </>
  );
};

export default page;
