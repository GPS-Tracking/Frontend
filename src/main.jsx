import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Report from './pages/report.jsx'
import About from './pages/about.jsx'
// import History from './pages/history.jsx'
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
    path: "/report",
    element: <Report />,
  },

  // {
  //   path: "/history",
  //   element: <History />,
  // },

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
