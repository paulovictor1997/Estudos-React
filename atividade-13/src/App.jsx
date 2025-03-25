import { Outlet } from "react-router-dom"
import Header from "./Componentes/Header"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './App.css'

function App() {
  
  return (
    <>
    <ToastContainer/>
    <Header/>
    <Outlet/>
    </>
  )
}

export default App
