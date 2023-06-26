import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { Home } from "./Home"
import { Achivement } from './Routes/Achivement.tsx'
import { Career } from './Routes/Career.tsx'
import { Ability } from './Routes/Ability.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/achivement',
    element: <Achivement />,
  },
  {
    path: '/career',
    element: <Career />,
  },
  {
    path: '/ability',
    element: <Ability />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
