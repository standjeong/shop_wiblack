import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: cart } = useQuery({
    queryKey: ['cart'],
    queryFn: () => getCart(uid),
  });

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
