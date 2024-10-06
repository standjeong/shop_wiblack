import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import UserIcon from './UserIcon';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Header() {
  const { login, logout, user } = useAuthContext();
  // const uid = user.uid;
  // console.log(user);

  return (
    <header className='flex w-full px-10 justify-between items-center bg-slate-300 p-2'>
      <Link to='/'>
        <h1 className='font-bold text-2xl'>WiBlack</h1>
      </Link>
      <nav className='flex gap-2 text-lg'>
        <Link to='/products/black'>Black</Link>
        <Link to='/products/white'>White</Link>
      </nav>
      <nav className='flex gap-3 items-center'>
        {user && user.isAdmin && <Link to='/products/upload'>상품등록</Link>}
        <Link to='/cart'>
          <FiShoppingCart className='text-2xl' />
        </Link>
        {!user && <button onClick={login}>로그인</button>}
        {user && (
          <div className='flex gap-1'>
            <button onClick={logout}>로그아웃</button>
            <UserIcon user={user} />
          </div>
        )}
      </nav>
    </header>
  );
}
