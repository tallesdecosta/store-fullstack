import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Landing from './landing-page/Landing.tsx';

import Login from './Login.tsx';

import Register from './Register.tsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Landing />
  },

  {
    path: "/account/auth",
    element: <Login /> 
  },

  {
    path: "/account/auth/register",
    element: <Register />
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
