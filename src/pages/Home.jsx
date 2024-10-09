import React from 'react';
import Banner from '../components/Banner';
import ArrivalsSection from '../components/ArrivalsSection';

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Banner />
      <ArrivalsSection title='black' />
      <ArrivalsSection title='white' />
    </div>
  );
}
