import React from 'react';
import './App.css';
import Header from './Components/Header';
import {Outlet} from "react-router-dom";
import Search from "./Components/Search";
import Countries from './Components/Countries';

function App() {
  return (
    <div id="container">
        <Header/>
        <Search/>
        <Countries/>
        <Outlet/>
    </div>
  )
}

export default App

/*
<Search/>
<Countries/>
*/