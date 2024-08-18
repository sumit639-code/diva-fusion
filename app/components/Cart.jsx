import React from "react";
import { cartState } from "../state/atoms/Cartstate";
import { useRecoilState } from "recoil";

const Cart = ({ props }) => {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  // console.log(props);

  return (
    <div className="bg-white rounded-xl p-4 shadow mb-4 flex items-center justify-between">
      <img src={props.image} alt="Dress" className="w-16 h-16 rounded-xl" />
      <div className="flex flex-col justify-center flex-1 ml-4">
        <span className="text-lg font-semibold text-black">{props.title}</span>
        <div className="flex items-center mt-2">
          <button className="px-2 py-1 border rounded-l-lg bg-gray-200 text-black">
            -
          </button>
          <span className="px-4 py-1 bg-gray-100 text-black">
            {props.quantity}
          </span>
          <button className="px-2 py-1 border rounded-r-lg bg-gray-200 text-black">
            +
          </button>
        </div>
        <span className="text-lg font-semibold text-black mt-2">
          ₹ {props.price}
        </span>
      </div>
      <button onClick={() => handleRemove(props.id)} className="cursor-pointer">
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
  );
};

export default Cart;
