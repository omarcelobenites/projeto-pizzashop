import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'

import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Dashboard } from './pages/auth/app/dashborad/dashboard'
import { Order } from './pages/auth/app/orders/orders'
import { NotFound } from './pages/404'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children : [
      { path: '/', element: <Dashboard />},
      { path: '/orders', element: <Order />},
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children : 
    [
      { path: '/sign-in', element: <SignIn />},
     { path: '/sign-up', element: <SignUp />},
    ],
    
  },
])