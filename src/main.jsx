import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Redirect from '@/pages/Redirect';
import '@/style/style.css';

const router = createBrowserRouter([
  {
    path: "/linkshortener/",
    element: <Home />
  },
  {
    path: "/linkshortener/:linkid",
    element: <Redirect />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
