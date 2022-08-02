import React from 'react';
import './App.css';
import Header from './Components/Header';
import Search from "./Components/Search";
import Countries from './Components/Countries';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route >
            <Route path='search' element={<Search/>}/>
            <Route path='countries' element={<Countries/>}/>
          </Route>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App

/*
<Search/>
<Countries/>
*/