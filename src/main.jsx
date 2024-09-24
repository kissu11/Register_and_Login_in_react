import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Components/Login/Login.jsx';
import Sign_up from './Components/Sign_up/Sign_up.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/Sign_up",
    element:<Sign_up/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
