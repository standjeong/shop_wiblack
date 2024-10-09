import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ProductDetail() {
  const {
    state: { title, price, option, image, description },
  } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedOption, setSelectedOption] = useState(option[0]);

  const handleChangeSize = (e) => setSelectedOption(e.target.value);

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
          <button className='font-semibold text-white bg-gray-900 py-2 rounded-md'>
            장바구니 담기
          </button>
        </div>
      </div>
    </section>
  );
}
