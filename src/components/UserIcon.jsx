import React from 'react';

export default function UserIcon({ user: { photoURL } }) {
  return (
    <div className='w-8'>
      <img className='rounded-full' src={photoURL} alt='user' />
    </div>
  );
}
