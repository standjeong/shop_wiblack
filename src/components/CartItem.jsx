import React from 'react';
import { CiSquareMinus, CiSquarePlus, CiCircleRemove } from 'react-icons/ci';
import { addOrUpdateToCart, deleteFromCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartItem({ orderItem }) {
  const { orderId, title, image, price, size, quantity } = orderItem;
  const { uid } = useAuthContext();

  const priceByQuantity = price * quantity;

  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart({ ...orderItem, quantity: quantity - 1 }, uid);
  };
  const handlePlus = () => {
    addOrUpdateToCart({ ...orderItem, quantity: quantity + 1 }, uid);
  };
  const handleDelete = () => {
    deleteFromCart(uid, orderId);
  };

  return (
    <li className='flex my-2' key={orderId}>
      <div className='flex items-center w-2/4'>
        <img className='w-28' src={image} alt={title} />
        <div>
          <h3 className='font-semibold'>{title}</h3>
          <p className='font-semibold my-1'>{size}</p>
          <p>₩{price.toLocaleString('kr-KR')}</p>
        </div>
      </div>
      <div className='flex items-center justify-center text-2xl  w-1/4'>
        <CiSquareMinus className='cursor-pointer' onClick={handleMinus} />
        <span className='text-xl'>{quantity}</span>
        <CiSquarePlus className='cursor-pointer' onClick={handlePlus} />
      </div>
      <div className='flex items-center justify-center gap-2 w-1/4'>
        <p className='font-semibold text-lg'>
          ₩{priceByQuantity.toLocaleString('kr-KR')}
        </p>
        <CiCircleRemove
          className='text-3xl cursor-pointer'
          onClick={handleDelete}
        />
      </div>
    </li>
  );
}
