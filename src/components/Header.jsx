import React from 'react';

export default function Header() {
  return (
    <header className='flex w-full px-10 justify-between items-center bg-slate-300 p-2'>
      <div>
        <p className='font-bold text-2xl'>WiBlack</p>
      </div>
      <ul className='flex gap-2 text-lg'>
        <li>Black</li>
        <li>White</li>
      </ul>
      <ul className='flex gap-2'>
        <li>장바구니</li>
        <li>로그인</li>
      </ul>
    </header>
  );
}
