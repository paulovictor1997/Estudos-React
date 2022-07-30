import React from 'react';
import './App.css';
import Header from './Components/Header';
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div id="container">
        <Header/>
        <Outlet/>
    </div>
  )
}

export default App

/*
<Search/>
<Countries/>
*/