import React from 'react'
import ReactDOM from 'react-dom/client'
import Tudo from './tudo.jsx'
import English from './tudo-english.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tudo />,
  },
  {
    path: "english",
    element: <English />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
