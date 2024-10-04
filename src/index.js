import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import ProductsBlack from './pages/ProductsBlack';
import ProductsWhite from './pages/ProductsWhite';
import ProductDetail from './pages/ProductDetail';
import UploadProduct from './pages/UploadProduct';
import Cart from './pages/Cart';

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
      { path: '/products/black', element: <ProductsBlack /> },
      { path: '/products/white', element: <ProductsWhite /> },
      { path: '/products/:productId', element: <ProductDetail /> },
      { path: '/products/upload', element: <UploadProduct /> },
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
