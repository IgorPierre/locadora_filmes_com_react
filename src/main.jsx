import React from 'react'
import ReactDOM from 'react-dom/client' 
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'

import './index.css'
import Details from './pages/Details';
import Home from './pages/Home';
import Results from './pages/Results';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/results/:query",
        element: <Results />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
