"use client";
import Like from "@/app/components/Like";
import { likeState } from "@/app/state/atoms/Likestate";
import React from "react";
import { useRecoilValue } from "recoil";

const page = () => {
  const likeItem = useRecoilValue(likeState);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-pink-400 transition-all to-fuchsia-50 font-primary p-4 mb-10">
        <header className="flex justify-between items-center mb-6">
          <div className="text-xl font-bold text-white">Diva Fusion</div>
        </header>
        <h2 className="text-2xl font-semibold mb-4 text-white">Wishlist</h2>
        {likeItem && likeItem.length > 0 ? (
          likeItem.map((props) => <Like props={props} key={props.id} />)
        ) : (
          <div className="flex items-center justify-center font-secondary font-bold border-white py-3 bg-slate-100 opacity-75 rounded-full border-2">
            No liked items found.
          </div>
        )}
      </div>
    </>
  );
};

export default page;
