import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Countries from './Components/Countries';
import Country from './Components/Country'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <BrowserRouter>
        <Routes>
          <Route element = {<App/>}>
            <Route path='/' element={<Countries/>}/>
            <Route path = '/country' element={<Country/>}/>
          </Route>
        </Routes>
      </BrowserRouter>  
  </>
)

