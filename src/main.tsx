import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { Home } from "./Home"
import { Achivement } from './Routes/Achivement.tsx'
import { Career } from './Routes/Career.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/achivement',
    element: <Achivement />,
  },
  {
    path: '/career',
    element: <Career />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
