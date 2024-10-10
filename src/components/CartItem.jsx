import React from 'react';
import { CiSquareMinus, CiSquarePlus, CiCircleRemove } from 'react-icons/ci';

export default function CartItem() {
  return (
    <li className='flex my-2'>
      <div className='flex items-center w-1/3'>
        <img
          className='w-28'
          src='https://res.cloudinary.com/dqizsoxsp/image/upload/v1728302522/qdgyqacesdwnrdqlrxtu.png'
          alt=''
        />
        <div>
          <h3 className='font-semibold text-lg'>title</h3>
          <p>size</p>
          <p>₩ 15,000</p>
        </div>
      </div>
      <div className='flex items-center justify-center text-2xl  w-1/3'>
        <CiSquareMinus className='cursor-pointer' />
        <span className='text-xl'>3</span>
        <CiSquarePlus className='cursor-pointer' />
      </div>
      <div className='flex items-center justify-center gap-2 w-1/3'>
        <p className='font-semibold text-lg'>₩ 45,000</p>
        <CiCircleRemove className='text-3xl cursor-pointer' />
      </div>
    </li>
  );
}
