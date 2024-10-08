import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import UploadProduct from './pages/UploadProduct';
import Cart from './pages/Cart';
import AdminRoute from './pages/AdminRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: '/products/black', element: <Products color='black' /> },
      { path: '/products/white', element: <Products color='white' /> },
      { path: '/products/:productId', element: <ProductDetail /> },
      {
        path: '/products/upload',
        element: (
          <AdminRoute>
            <UploadProduct />
          </AdminRoute>
        ),
      },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
