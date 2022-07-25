import React from 'react';
import './App.css';
import Header from './Components/Header';
import Countries from './Components/Countries';
import Search from './Components/Search';

function App() {
 

  return (
    <div id="container">
        <Header/>
        <Search/>
        <Countries/>
    </div>
  )
}

export default App
