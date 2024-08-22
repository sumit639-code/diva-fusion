import React from "react";

const Product = ({props}) => {
    console.log(props);
    
  return (
    <div >
      
      <div className="bg-white p-4 rounded-xl shadow-xl w-48">
        <img
          src="path-to-white-dress-image"
          alt="White Dress"
          className="w-full h-32 object-cover rounded-xl mb-4"
        />
        <h4 className="text-sm font-bold text-black">{props.title}</h4>
        <p className="text-red-400 font-semibold">₹ {props.price}</p>
      </div>
    </div>
  );
};

export default Product;
