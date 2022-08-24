import React from 'react';
import './App.css';
import Header from './Componentes/Header';
import Search from './Componentes/Search';
import {Outlet} from 'react-router-dom'

export default function App() {
  return (
    <div className="container">
      <Header/>
      <Search/>
      <Outlet/>
    </div>
  )
}

