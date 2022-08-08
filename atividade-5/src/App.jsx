import React from 'react';
import './App.css';
import Header from './Components/Header';
import {Outlet} from "react-router-dom";
import Search from './Components/Search';

function App() {
  return (
    <div id="container">
     <Header/>
     <Search/>
     <Outlet/>
    </div>
  )
}

export default App