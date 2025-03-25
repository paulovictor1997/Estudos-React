import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { CartProvider } from './context/CartContext.jsx'

// Pages componentes
import Home from "./Pages/Home.jsx"
import Product from "./Pages/Product.jsx"
import Cart from './Pages/Cart.jsx'
import EditProduct from "./Pages/EditProduct.jsx"
import NotFound from "./Pages/NotFound.jsx"
import App from './App.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element : <App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/edit/:id",
        element:<EditProduct/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"*",
        element:<NotFound/>
      }
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CartProvider>
    <RouterProvider router={router}/>
   </CartProvider>
  </StrictMode>,
)
