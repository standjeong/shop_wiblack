import React from 'react';
import CartItem from '../components/CartItem';
import CartPriceInfo from '../components/CartPriceInfo';
import useCart from '../hooks/useCart';

const SHIPPING_COST = 3000;

export default function Cart() {
  const {
    cartQuery: { data: cart, isLoading },
  } = useCart();

  const totalProductPrice =
    cart &&
    cart.reduce((acc, current) => acc + current.price * current.quantity, 0);

  return (
    <section className='flex flex-col items-center mb-16 md:mb-0'>
      <h1 className='font-bold text-xl my-12'>나의 장바구니</h1>
      <div className='flex flex-col justify-around gap-6 max-w-screen-lg w-full px-4 md:flex-row'>
        <article className='md:w-2/3'>
          <div className='flex border-b-2 border-black pb-2 font-semibold'>
            <p className='w-2/4 text-center'>상품</p>
            <p className='w-1/4 text-center'>수량</p>
            <p className='w-1/4 text-center'>총 가격</p>
          </div>
          <ul>
            {isLoading && <p>로딩중...</p>}
            {cart &&
              cart.map((orderItem) => (
                <CartItem key={orderItem.orderId} orderItem={orderItem} />
              ))}
          </ul>
        </article>

        <aside className='md:w-1/3'>
          <div className='bg-slate-200 p-4 text-lg mb-2 rounded-md'>
            <CartPriceInfo text='총 상품금액' price={totalProductPrice} />
            <CartPriceInfo text='배송비' price={SHIPPING_COST} />
            <CartPriceInfo
              text='총 결제금액'
              price={totalProductPrice + SHIPPING_COST}
              highlight
            />
          </div>
          <button className='bg-black text-white w-full py-2 font-semibold text-lg rounded-md'>
            주문하기
          </button>
        </aside>
      </div>
    </section>
  );
}
