import React from 'react';

export default function Banner() {
  return (
    <section className='relative w-full h-[520px] bg-[#7f7754]'>
      <div className='relative w-full h-full max-w-screen-xl m-auto overflow-hidden border-2'>
        <img
          className='object-cover h-[900px] absolute -top-24 left-1/2 -translate-x-1/2'
          src='/images/banner1.png'
          alt='banner1'
        />
      </div>
    </section>
  );
}
