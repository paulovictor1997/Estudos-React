import './App.css';
//import { useState } from 'react';
import Header from './componentes/Header';
import {Outlet} from 'react-router-dom';
//import Loader from './componentes/Loader';

function App() {
  return (
    <div className="App">
        <Header/>
        <Outlet/>
    </div>
  )
}

export default App
