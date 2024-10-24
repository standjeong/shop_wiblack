import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useCart from '../hooks/useCart';

export default function ProductDetail() {
  const {
    state: { title, price, option, image, description, productId },
  } = useLocation();
  const { addToCartMutation } = useCart();
  const [selectedOption, setSelectedOption] = useState(option[0]);
  const [isSuccess, setIsSuccess] = useState();
  const [isAdded, setIsAdded] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChangeSize = (e) => setSelectedOption(e.target.value);
  const handleClick = async () => {
    const product = {
      productId,
      size: selectedOption,
      title,
      image,
      price,
      quantity: 1,
    };

    addToCartMutation.mutate(product, {
      onSuccess: (committed) => {
        if (committed) {
          setIsSuccess('✅장바구니에 추가되었습니다.');
          setIsAdded();
          setTimeout(() => setIsSuccess(false), 3000);
        } else {
          setIsAdded('❗이미 장바구니에 담겼습니다.');
          setIsSuccess();
          setTimeout(() => setIsAdded(), 3000);
        }
      },
    });
  };

  // description 스타일
  const splitText = description.split(/([.])/);
  const formattedText = splitText.map((sentence, index) => (
    <span key={index}>
      {index % 2 === 0 && index < splitText.length - 1 && '🔹' + sentence + '.'}
      {index % 2 !== 0 && <br />}
    </span>
  ));

  return (
    <section className='flex w-full'>
      <div className='flex flex-col sm:flex-row gap-6 max-w-screen-lg mx-auto my-16 px-16'>
        <div className='sm:w-1/2'>
          <img
            className='w-full bg-[#82ffaf] rounded-[170px]'
            src={image}
            alt={title}
          />
        </div>
        <div className='sm:w-1/2 flex flex-col gap-y-4'>
          <h3 className='font-semibold text-xl'>{title}</h3>
          <p className='font-semibold text-lg'>
            판매가 ₩{price.toLocaleString('ko-KR')}
          </p>
          <p className='border-y-2 border-black py-2'>{formattedText}</p>
          <div className='flex gap-3 items-center'>
            <label className='font-semibold' htmlFor='opt'>
              사이즈
            </label>
            <select
              className='flex-1 text-center text-lg border-2 border-gray-700 rounded-full py-1'
              name='languages'
              id='opt'
              value={selectedOption}
              onChange={handleChangeSize}
            >
              {option.map((size, idx) => (
                <option key={idx} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          {isSuccess && <p>{isSuccess}</p>}
          {isAdded && <p>{isAdded}</p>}
          <button
            className='font-semibold text-white bg-gray-900 py-2 rounded-md'
            onClick={handleClick}
          >
            장바구니 담기
          </button>
        </div>
      </div>
    </section>
  );
}
