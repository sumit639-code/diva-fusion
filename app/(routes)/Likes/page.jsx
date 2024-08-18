"use client";
import Like from "@/app/components/Like";
import { likeState } from "@/app/state/atoms/Likestate";
import React from "react";
import { useRecoilValue } from "recoil";

const page = () => {
  const likeItem = useRecoilValue(likeState);
  return (
    <>
      <div className="min-h-screen bg-pink-50 p-4 mb-10">
        <header className="flex justify-between items-center mb-6">
          <div className="text-xl font-bold text-black">Diva Fusion</div>
        </header>
        <h2 className="text-2xl font-semibold mb-4 text-black">Wishlist</h2>
        {likeItem && likeItem.length > 0 ? (
          likeItem.map((props) => <Like props={props} key={props.id} />)
        ) : (
          <div className="flex items-center justify-center">
            No liked items found.
          </div>
        )}
      </div>
    </>
  );
};

export default page;
