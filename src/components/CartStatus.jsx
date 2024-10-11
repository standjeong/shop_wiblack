import React from 'react';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: cart },
  } = useCart();

  const NUMBER = cart && cart.length;

  return (
    <div className='flex'>
      <p>CART</p>
      {NUMBER > 0 && (
        <p className='rounded-full w-5 h-5 text-center text-sm leading-snug text-white bg-red-400'>
          {NUMBER}
        </p>
      )}
    </div>
  );
}
