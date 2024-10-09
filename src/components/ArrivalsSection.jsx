import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/firebase';

export default function ArrivalsSection({ title }) {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return (
    <section className='max-w-screen-xl flex flex-col items-center my-10'>
      <h2 className='font-semibold text-3xl mb-12 first-letter:uppercase'>
        {title} Arrivals
      </h2>
      {isLoading && <p>로딩중...</p>}
      <ul className='grid grid-cols-4 gap-6'>
        {products &&
          products
            .filter((product) => product.color === title)
            .splice(0, 4)
            .map((product) => (
              <li
                className='flex items-end bg-[#3aac86] overflow-hidden rounded-[130px]'
                key={product.productId}
              >
                <img src={product.image} alt={product.title} />
              </li>
            ))}
      </ul>
    </section>
  );
}
