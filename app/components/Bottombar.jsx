import Image from "next/image";
import React from "react";
import { GoHome } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { cartItemCount } from "../state/selectors/cartcount.js";
import { cartState } from "../state/atoms/Cartstate.js";
import { likeState } from "../state/atoms/Likestate.js";
import { likeItemCount } from "../state/selectors/likecount.js";

const Bottombar = () => {
  const cartItem = useRecoilValue(cartState);
  const itemCount = useRecoilValue(cartItemCount);
  const likeItem = useRecoilValue(likeState);
  const likeCount = useRecoilValue(likeItemCount);
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-pink-600 bg-opacity-20 backdrop-blur-lg p-4 flex justify-around items-center rounded-t-xl shadow-lg">
      <Link href="/" className="text-black">
        <GoHome size={25} />
      </Link>
      <Link href="/Category" className="text-black">
        <BiCategory size={25} />
      </Link>
      <Link href="/Likes" className="text-black relative">
        {likeItem.length === 0 ? null : (
          <span className="absolute -top-1 -right-2 bg-[#cd3a21] w-4 h-4 flex items-center justify-center rounded-full text-white text-xs transition-all duration-400">
            {likeCount}
          </span>
        )}
        <FaRegHeart size={22} />
      </Link>
      <Link href="/Cart" className="text-black">
        {cartItem.length === 0 ? null : (
          <span className="absolute top-0 right-0 mt-3 mr-10 bg-[#cd3a21] w-4 h-4 flex items-center justify-center rounded-full text-white text-xs transition-all duration-400">
            {itemCount}
          </span>
        )}

        <IoCartOutline size={25} />
      </Link>
    </nav>
  );
};

export default Bottombar;
