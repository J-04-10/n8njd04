import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import Inbox from './pages/Inbox'
import Chat from './pages/Chat'

const router = createBrowserRouter([
  { path: '/', element: <Inbox /> },
  { path: '/login', element: <Login /> },
  { path: '/chat/:id', element: <Chat /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
