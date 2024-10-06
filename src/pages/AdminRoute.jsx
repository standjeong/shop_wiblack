import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function AdminRoute({ children }) {
  const { user } = useAuthContext();
  if (user === null) return;

  if (!user || (user && !user.isAdmin)) {
    return <Navigate to='/' />;
  }

  return children;
}
