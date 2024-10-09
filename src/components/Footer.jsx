import React from 'react';
import { FaYoutube, FaInstagramSquare } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className='flex flex-col gap-2 items-center py-36'>
      <h1 className='font-semibold text-lg'>WIBLACK</h1>
      <div className='flex items-center gap-1'>
        <FaYoutube className='text-lg' />
        <FaInstagramSquare />
        <RiTwitterXLine />
      </div>
      <div className='flex justify-center gap-3'>
        <p>대표자 : 서다정</p>
        <p>사업자등록번호 : 123-12-12345</p>
        <p>주소 : 221B Baker Street, London NW1 6XE, UK</p>
        <p>이메일 : djeong9922@gmail.com</p>
      </div>
      <p>© 2024 WIBLACK. All Rights Reserved.</p>
    </footer>
  );
}
