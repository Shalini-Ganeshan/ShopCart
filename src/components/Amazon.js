import React from 'react';
import list from '../data';
import Cards from './Cards';

const Amazon = ({ handleClick }) => {
  return (
    <section className="bg-purple-500 text-white p-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {list.map((item) => (
        <Cards item={item} key={item.id} handleClick={handleClick} />
      ))}
    </section>
  );
}

export default Amazon;
