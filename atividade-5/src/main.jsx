import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Search from "./Components/Search";
import Countries from './Components/Countries';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path= '/' element={<App />}>
          <Route path='search' element={<Search/>}></Route>
          <Route path='countries' element={<Countries/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
