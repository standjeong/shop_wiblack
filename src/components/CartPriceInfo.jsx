import React from 'react';

const EMPHASIS = 'font-semibold border-t-2 border-white pt-2';

export default function CartPriceInfo({ text, price, highlight }) {
  return (
    <div className={`flex justify-between pb-1 ${highlight ? EMPHASIS : ''}`}>
      <p>{text}</p>
      <p>₩{price && price.toLocaleString('kr-KR')}</p>
    </div>
  );
}
