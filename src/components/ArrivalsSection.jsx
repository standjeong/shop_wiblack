import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

export default function ArrivalsSection({ title }) {
  const {
    productsQuery: { data: products, isLoading },
  } = useProducts();

  return (
    <section className='max-w-screen-xl flex flex-col items-center my-10'>
      <h2 className='font-semibold text-3xl mb-12 first-letter:uppercase'>
        {title} Arrivals
      </h2>
      {isLoading && <p>로딩중...</p>}
      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-6 mx-6 xl:mx-4'>
        {products &&
          products
            .filter((product) => product.color === title)
            .splice(0, 4)
            .map((product) => (
              <Link
                to={`/products/${product.productId}`}
                className='group relative flex items-end bg-[#3aac86] overflow-hidden rounded-[130px] md:last:hidden lg:last:block'
                key={product.productId}
                state={product}
              >
                <img src={product.image} alt={product.title} />
                <div className='absolute top-0 left-0 w-full h-full px-4 text-white bg-slate-900 bg-opacity-70 flex flex-col gap-2 justify-center items-center text-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0'>
                  <h3 className='font-bold text-xl'>{product.title}</h3>
                  <p className='text-lg'>
                    ₩{product.price.toLocaleString('kr-KR')}
                  </p>
                </div>
              </Link>
            ))}
      </ul>
    </section>
  );
}
