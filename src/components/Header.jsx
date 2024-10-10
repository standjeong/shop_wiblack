import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import UserIcon from './UserIcon';
import { Link } from 'react-router-dom';
import CartStatus from './CartStatus';

export default function Header() {
  const { login, logout, user } = useAuthContext();
  // const uid = user.uid;
  // console.log(user);

  return (
    <header className='sticky top-0 z-50 flex flex-wrap w-full p-6 justify-between items-center bg-bannerGradient sm:py-6 sm:px-10'>
      <Link to='/'>
        <h1 className='font-bold text-2xl w-2/6 sm:w-auto'>WiBlack</h1>
      </Link>
      <nav className='flex gap-3 order-3 mt-2 text-lg font-semibold sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:order-2 sm:mt-0'>
        <Link to='/products/black'># Black</Link>
        <Link to='/products/white'># White</Link>
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
