import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Country from './Pages/Country';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element = {<App/>}>
            <Route path='/' element={<Home/>}/>
            <Route path = '/countries/:name' element={<Country/>}/>
          </Route>
        </Routes>
      </BrowserRouter>  
  </React.StrictMode>
)
