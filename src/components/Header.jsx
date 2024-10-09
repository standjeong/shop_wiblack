import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import UserIcon from './UserIcon';
import { Link } from 'react-router-dom';

export default function Header() {
  const { login, logout, user } = useAuthContext();
  // const uid = user.uid;
  // console.log(user);

  return (
    <header className='sticky top-0 z-50 flex w-full py-6 px-10 justify-between items-center bg-bannerGradient'>
      <Link to='/'>
        <h1 className='font-bold text-2xl'>WiBlack</h1>
      </Link>
      <nav className='flex gap-3 absolute left-1/2 -translate-x-1/2 text-lg font-semibold'>
        <Link to='/products/black'># Black</Link>
        <Link to='/products/white'># White</Link>
      </nav>
      <nav className='flex gap-3 items-center text-gray-900 font-medium'>
        {user && user.isAdmin && <Link to='/products/upload'>상품등록</Link>}
        <Link to='/cart'>
          <p>CART</p>
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
