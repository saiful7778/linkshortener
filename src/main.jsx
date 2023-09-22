import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/style.css';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { RouterProvider } from 'react-router-dom';
import Redirect from './pages/Redirect';

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
