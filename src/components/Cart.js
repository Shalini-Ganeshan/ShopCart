import React, { useState, useEffect } from 'react';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.amount * item.price;
    });
    setPrice(total);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]); 

  return (
    <article className="bg-white text-black p-4">
      {cart?.map((item) => (
        <div className="flex flex-col md:flex-row items-center mb-4 p-4 border-2 border-purple-800 rounded-md" key={item.id}>
          <div className="flex flex-row items-center flex-shrink-0 font-semibold text-lg">
            <img src={item.img} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
            <p className="ml-4 text-center md:text-left">{item.title}</p>
          </div>
          <div className="flex flex-col items-center md:items-end md:ml-auto mt-4 md:mt-0 w-full md:w-auto">
            <div className="flex space-x-2 mb-2">
              <button 
                className="bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-700" 
                onClick={() => handleChange(item, +1)}
              >
                +
              </button>
              <button className="bg-gray-800 text-white px-2 py-1 rounded">{item.amount}</button>
              <button 
                className="bg-gray-800 text-white px-2 py-1 rounded hover:bg-gray-700" 
                onClick={() => handleChange(item, -1)}
              >
                -
              </button>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <span className="text-lg font-semibold mx-auto">₹ {item.price}</span>
              <button 
                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-500" 
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-4 p-4 border-t border-gray-700 text-center">
        <span className="text-xl font-semibold">Total Price of your Cart</span>
        <span className="block mt-2 text-lg text-blue-500 font-semibold">₹ {price}</span>
      </div>
    </article>
  );
};

export default Cart;
