import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/Home';
import Country from './Pages/Country';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
     {
      path:"/",
      element:<Home/>
     },
     {
      path:"/countries/:name",
      element:<Country/>
     }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
