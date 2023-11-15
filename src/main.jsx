import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Data from './pages/data.jsx'
import Log from './pages/log.jsx'
import About from './pages/about.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/data",
    element: <Data />,
  },

  {
    path: "/notif",
    element: <Log />,
  },

  {
    path: "/about",
    element: <About />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
