import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes'
import ProductContextApi from './context/ProductContextApi'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContextApi>
      <RouterProvider router={routes} />
      <ToastContainer position="top-center" autoClose={2000} />
    </ProductContextApi>
  </StrictMode>,
)
