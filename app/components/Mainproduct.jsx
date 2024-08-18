import Link from 'next/link';
import React from 'react';

const Product = ({ props }) => {
  console.log(props.image);
  
  return (
    <Link href={`/${props.id}`} className="p-0">
      <div className="bg-white border-2 border-gray-200 p-4 rounded-md shadow-sm max-w-xs mx-auto h-full sm:max-w-sm md:max-w-md lg:max-w-lg">
        <img
          src={props.image}
          alt="White Dress"
          className="w-full h-44 object-contain  rounded-xl mb-4"
        />
        <h4 className="text-sm font-bold text-gray-800 mb-1">{props.title}</h4>
        <p className="text-red-500 font-semibold text-lg">₹ {props.price}</p>
      </div>
    </Link>
  );
};



export default Product;
