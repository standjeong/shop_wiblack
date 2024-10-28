import React from 'react';
import ArrivalsSection from '../components/ArrivalsSection';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Carousel />
      <ArrivalsSection title='black' />
      <ArrivalsSection title='white' />
    </div>
  );
}
