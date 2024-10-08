import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/firebase';
import ProductCard from '../components/ProductCard';

export default function Products({ color }) {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return (
    <div className='flex flex-col items-center'>
      {isLoading && <p>로딩중..</p>}
      <h1 className='font-bold text-xl my-6'>
        "Don {color === 'black' ? 'Black' : 'White'}!"
      </h1>
      <ul className='max-w-screen-2xl grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-8 m-[3rem] sm:my-6 sm:mx-8 items-end '>
        {products &&
          products
            .filter((product) => product.color === color)
            .map((product) => (
              <ProductCard
                key={product.productId}
                product={product}
                color={color}
              />
            ))}
      </ul>
    </div>
  );
}
