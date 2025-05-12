import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer, toast } from 'react-toastify'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Internet_Plan from './components/Internet_Plan'
import NotFound from './NotFound'





const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />
  },
  {
    path: "/internet_plan",
    element: <Internet_Plan />,
    errorElement: <NotFound />
  }
])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={route} />
    <ToastContainer position={'bottom-right'} theme={'light'} />
  </StrictMode>,
)
