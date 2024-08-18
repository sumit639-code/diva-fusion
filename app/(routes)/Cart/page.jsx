import React from "react";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-pink-50 p-4">
      <header className="flex justify-between items-center mb-6">
        <div className="text-xl font-bold text-black">Diva Fusion</div>
      </header>

      <h2 className="text-2xl font-semibold mb-4 text-black">Cart</h2>

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
          <div className="flex items-center mt-2">
            <button className="px-2 py-1 border rounded-l-lg bg-gray-200 text-black">
              -
            </button>
            <span className="px-4 py-1 bg-gray-100 text-black">1</span>
            <button className="px-2 py-1 border rounded-r-lg bg-gray-200 text-black">
              +
            </button>
          </div>
          <span className="text-lg font-semibold text-black mt-2">₹ 999</span>
        </div>
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
          <div className="flex items-center mt-2">
            <button className="px-2 py-1 border rounded-l-lg bg-gray-200 text-black">
              -
            </button>
            <span className="px-4 py-1 bg-gray-100 text-black">1</span>
            <button className="px-2 py-1 border rounded-r-lg bg-gray-200 text-black">
              +
            </button>
          </div>
          <span className="text-lg font-semibold text-black mt-2">₹ 999</span>
        </div>
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

      <div className="flex justify-between items-center font-bold text-lg text-black">
        <span>Total</span>
        <span>₹ 999</span>
      </div>

      <button className="w-full mt-4 bg-red-400 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500">
        Order Now
      </button>
    </div>
  );
};

export default CartPage;
