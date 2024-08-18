"use client";
import Cart from "@/app/components/Cart";
import { cartState } from "@/app/state/atoms/Cartstate";
import { cartTotalPrice } from "@/app/state/selectors/totalprice";
import Link from "next/link";
import React from "react";
import { useRecoilValue } from "recoil";

const CartPage = () => {
  const totalPrice = useRecoilValue(cartTotalPrice);
  const cartItem = useRecoilValue(cartState);
  function textWp(item) {
    return [item.title, " x ", item.quantity].join("");
  }
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
      <Link
        href={`https://api.whatsapp.com/send?phone=919937686332&text=Hello%20i%20want%20to%20buy%20${cartItem.map(
          textWp
        )}%20,All%20total%20price%20is%20₹${totalPrice}`}
      >
        <button className="w-full mt-4 bg-red-400 text-white py-2 px-4 rounded-lg shadow hover:bg-red-500">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default CartPage;
