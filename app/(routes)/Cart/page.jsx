"use client";
import Cart from "@/app/components/Cart";
import { cartState } from "@/app/state/atoms/Cartstate";
import { cartTotalPrice } from "@/app/state/selectors/totalprice";
import React from "react";
import { useRecoilValue } from "recoil";

const CartPage = () => {
  const totalPrice = useRecoilValue(cartTotalPrice);
  const cartItem = useRecoilValue(cartState);
  return (
    <div className="min-h-screen bg-pink-50 p-4 md:p-14 lg:px-60 pb-20">
      <header className="flex justify-between items-center mb-6">
        <div className="text-xl font-bold text-black">Diva Fusion</div>
      </header>

      <h2 className="text-2xl font-semibold mb-4 text-black">Cart</h2>
      <div>
        {cartItem.length === 0 ? (
          <div>Your cart is empty</div>
        ) : (
          cartItem.map((props) => <Cart key={props.id} props={props} />)
        )}
      </div>

      <div className="flex justify-between items-center font-bold text-lg text-black">
        <span>Total</span>
        <span>₹ {totalPrice.toFixed(2)}</span>
      </div>

      <button className="w-full mt-4 bg-red-400 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500">
        Order Now
      </button>
    </div>
  );
};

export default CartPage;
