import Image from "next/image";
import React from "react";
import { GoHome } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";

const Bottombar = () => {

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-pink-200 p-4 flex justify-around items-center rounded-t-xl shadow-lg">
      <Link href="/" className="text-black">
        <GoHome size={25} />
      </Link>
      <Link href="/Category" className="text-black">
        <BiCategory size={25} />
      </Link>
      <Link href="/Likes" className="text-black">
        <FaRegHeart size={22} />
      </Link>
      <Link href='/Cart' className="text-black">
        <IoCartOutline size={25} />
      </Link>
    </nav>
  );
};

export default Bottombar;
