import React from "react";
import { categories } from "@/Data/category";
import Link from "next/link";
const page = () => {
  
  return (
    <div className="min-h-screen bg-pink-50 p-4">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-black">Categories</h2>
        <button className="text-sm text-red-400">See All</button>
      </header>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Link href={category.link} key={category.id} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
              <img
                src={category.image}
                alt={category.name}
                className="w-8 h-8"
              />
            </div>
            <p className="text-sm mt-2 text-black">{category.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
