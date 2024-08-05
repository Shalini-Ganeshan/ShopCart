import React from 'react';

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;

  return (
<div className="border-2 border-purple-300  text-white rounded-lg overflow-hidden shadow-lg m-4 p-4 flex flex-col h-full transition-transform duration-300 transform hover:scale-105">
  <div className="w-full h-64 bg-gray-700 flex items-center justify-center mb-2">
    <img src={img} alt={title} className="h-full w-full " />
  </div>
  <div className="flex-1 text-center">
    <p className="text-xl font-semibold mb-2">{title}</p>
    <p className="text-gray-300 mb-2">{author}</p>
    <p className="text-lg  text-blue-900 ">Price -  ₹ {price} </p>
  </div>
  <div className=" mx-auto">
    <button 
      className="bg-white text-black px-4 py-2 rounded text-lg font-semibold transition-transform duration-300 transform hover:scale-110 hover:bg-gray-200"
      onClick={() => handleClick(item)}
    >
      Add to Cart
    </button>
  </div>
</div>

  );
};

export default Cards;
