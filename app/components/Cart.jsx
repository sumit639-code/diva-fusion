import React from "react";
import { cartState } from "../state/atoms/Cartstate.js";
import { useRecoilState } from "recoil";

const Cart = ({ props }) => {
  const [cartItems, setCartItems] = useRecoilState(cartState);

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 1) } // Ensure quantity does not go below 1
          : item
      )
    );
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow mb-4 flex items-center justify-between">
      <img src={props.image} alt="Dress" className="w-16 h-16 rounded-xl" />
      <div className="flex flex-col justify-center flex-1 ml-4">
        <span className="text-lg font-semibold text-black">{props.title}</span>
        <div className="flex items-center mt-2">
          <button
            onClick={() => handleDecreaseQuantity(props.id)}
            className="px-2 py-1 border rounded-l-lg bg-gray-200 text-black"
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-100 text-black">
            {props.quantity}
          </span>
          <button
            onClick={() => handleIncreaseQuantity(props.id)}
            className="px-2 py-1 border rounded-r-lg bg-gray-200 text-black"
          >
            +
          </button>
        </div>
        <span className="text-lg font-semibold text-black mt-2">
          ₹ {props.price} {/* Total price for this item */}
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
