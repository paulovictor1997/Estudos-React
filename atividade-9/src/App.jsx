import './App.css';
import { useState,useEffect } from 'react';
import Header from './componentes/Header';
import {Outlet} from 'react-router-dom';


function App() {
   const [isDark, setIsDark] = useState(false)

   useEffect(() => {
    document.body.className = isDark ? 'dark' : 'light';
  }, [isDark]);

  return (
    <div className="App">
        <Header isDark={isDark} toggleTheme={() => setIsDark(!isDark)}/>
        <Outlet/>
    </div>
  )
}

export default App
