import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ props }) => {
  // console.log(props);

  return (
    <div>
      <Link href={`/${props.id}`}>
        <div className="bg-white p-4 rounded-xl shadow-xl w-48">
          <Image
            src={props.image}
            width={150}
            height={150}
            alt="White Dress"
            loading="lazy"
            className="w-full h-32 object-contain rounded-xl mb-4"
          />
          <h4 className="text-sm font-bold text-black">{props.title}</h4>
          <p className="text-red-400 font-semibold">₹ {props.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
