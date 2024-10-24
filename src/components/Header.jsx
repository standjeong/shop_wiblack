import React, { useEffect, useRef, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import UserIcon from './UserIcon';
import { Link } from 'react-router-dom';
import CartStatus from './CartStatus';
import { FaBars } from 'react-icons/fa6';

export default function Header() {
  const { login, logout, user } = useAuthContext();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target))
        setIsMobileNavOpen(false);
    });
  }, []);

  return (
    <header className='sticky top-0 z-50 flex flex-wrap w-full p-6 justify-between items-center bg-bannerGradient sm:py-6 sm:px-10'>
      <div className='flex items-center gap-2'>
        <button ref={mobileMenuRef}>
          <FaBars
            className='sm:hidden cursor-pointer'
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          />
        </button>
        <Link to='/'>
          <h1 className='font-bold text-2xl w-2/6 sm:w-auto'>WiBlack</h1>
        </Link>
      </div>
      <nav
        className={
          isMobileNavOpen
            ? 'sm:hidden absolute top-20 left-0 w-full text-center bg-bannerGradient flex flex-col items-center font-bold'
            : 'hidden'
        }
      >
        <Link
          to='/products/black'
          className='border-b-2 border-transparent hover:bg-[#ffffff7d] w-full p-2'
        >
          # Black style
        </Link>
        <Link
          to='/products/white'
          className='border-b-2 border-transparent hover:bg-[#ffffff7d] w-full p-2'
        >
          # White style
        </Link>
      </nav>
      <nav className='hidden gap-3 order-3 mt-2 text-lg font-semibold  sm:flex sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:order-2 sm:mt-0'>
        <Link
          to='/products/black'
          className='border-b-2 border-transparent hover:border-white hover:bg-[#ffffff7d] rounded-lg px-2'
        >
          # Black style
        </Link>
        <Link
          to='/products/white'
          className='border-b-2 border-transparent hover:border-white hover:bg-[#ffffff7d] rounded-lg px-2'
        >
          # White style
        </Link>
      </nav>
      <nav className='flex gap-3 items-center text-gray-900 font-medium justify-end w-4/6 sm:w-auto'>
        {user && user.isAdmin && <Link to='/products/upload'>상품등록</Link>}
        <Link to='/cart'>
          <CartStatus />
        </Link>
        {!user && <button onClick={login}>LOGIN</button>}
        {user && (
          <div className='flex gap-1'>
            <button onClick={logout}>LOGOUT</button>
            <UserIcon user={user} />
          </div>
        )}
      </nav>
    </header>
  );
}
