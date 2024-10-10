import React from 'react';
import CartItem from '../components/CartItem';
import CartPriceInfo from '../components/CartPriceInfo';

export default function Cart() {
  return (
    <section className='flex flex-col items-center mb-16 md:mb-0'>
      <h1 className='font-bold text-xl my-12'>나의 장바구니</h1>
      <div className='flex flex-col justify-around gap-6 max-w-screen-lg w-full px-4 md:flex-row'>
        <article className='md:w-2/3'>
          <ul className='flex border-b-2 border-black pb-2 font-semibold'>
            <li className='w-1/3 text-center'>상품</li>
            <li className='w-1/3 text-center'>수량</li>
            <li className='w-1/3 text-center'>총 가격</li>
          </ul>
          <ul>
            <CartItem />
          </ul>
        </article>

        <aside className='md:w-1/3'>
          <ul className='bg-gray-300 p-4 text-lg mb-2'>
            <CartPriceInfo text='총 상품금액' price='' />
            <CartPriceInfo text='배송비' price='' />
            <CartPriceInfo text='총 결제금액' price='' highlight />
          </ul>
          <button className='bg-black text-white w-full py-2 font-semibold text-lg'>
            주문하기
          </button>
        </aside>
      </div>
    </section>
  );
}
