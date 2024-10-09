import React from 'react';
import ShapeDivider from './ShapeDivider';

export default function Banner() {
  return (
    <section className='relative w-full h-[520px] bg-[#f8ceec] bg-bannerGradient mb-16'>
      <div className='relative w-full h-full max-w-screen-xl m-auto overflow-hidden'>
        <img
          className='object-cover h-[900px] absolute -top-24 left-1/2 -translate-x-1/2'
          src='/images/banner1.png'
          alt='banner1'
        />
        <p className='text-5xl absolute top-[40%] left-[17rem] md:top-1/2 md:left-[27rem] font-bold font-banner text-[#ffa2a2]'>
          "We are complete with only White and Black."
        </p>
      </div>
      <ShapeDivider />
    </section>
  );
}
