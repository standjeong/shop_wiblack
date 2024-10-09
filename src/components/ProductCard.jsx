import React from 'react';

export default function ProductCard({
  color,
  product: { productId, title, image, category, price },
}) {
  return (
    <li
      className={`h-full flex flex-col justify-end ${
        color === 'black' ? 'bg-[#7fffd4]' : 'bg-[#9ebbff]'
      }`}
      key={productId}
    >
      <div className='overflow-hidden '>
        <img
          className='h-full w-full hover:scale-105 transition-transform'
          src={image}
          alt='product'
        />
      </div>
      <div className='py-2 bg-white text-black'>
        <h3 className='font-semibold text-lg line-clamp-1'>{title}</h3>
        <div className='flex justify-between font-medium opacity-85'>
          <p>{category}</p>
          <p>₩{price.toLocaleString('ko-KR')}</p>
        </div>
      </div>
    </li>
  );
}