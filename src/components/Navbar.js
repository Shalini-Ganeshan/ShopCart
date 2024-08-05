import React from 'react';

const Navbar = ({ size, setShow }) => {
  return (
    <nav className="bg-purple-900 text-white p-4 shadow-2xl">
      <div className="flex flex-col md:flex-row md:justify-between items-center text-3xl">
        <span 
          className="cursor-pointer hover:text-gray-300 mb-2 md:mb-0 " 
          onClick={() => setShow(true)}
        >
          ShopCart
        </span>
        <div 
          className="flex items-center cursor-pointer hover:text-gray-300" 
          onClick={() => setShow(false)}
        >
          <span className="mr-2">
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
