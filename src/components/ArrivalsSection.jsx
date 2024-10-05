import React from 'react';

export default function ArrivalsSection({ title }) {
  return (
    <section className='max-w-screen-xl flex flex-col items-center my-10'>
      <h2 className='font-semibold text-3xl mb-4'>{title} Arrivals</h2>
      <ul className='grid grid-cols-4 gap-2'>
        <li className='w-[150px] h-[200px] bg-slate-500'></li>
        <li className='w-[150px] h-[200px] bg-slate-500'></li>
        <li className='w-[150px] h-[200px] bg-slate-500'></li>
        <li className='w-[150px] h-[200px] bg-slate-500'></li>
        <li className='w-[150px] h-[200px] bg-slate-500'></li>
      </ul>
    </section>
  );
}
