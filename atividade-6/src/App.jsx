import React from 'react';
import './App.css';
import Header from './Componentes/Header';
import Navbar from './Componentes/Navbar';
import {Outlet} from 'react-router-dom'

export default function App() {
  return (
    <div className="container">
      <Header/>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

