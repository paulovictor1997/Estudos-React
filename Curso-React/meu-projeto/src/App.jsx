import React from 'react';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './componentes/pages/Home';
import Empresa from './componentes/pages/Empresa';
import Contato from './componentes/pages/Contato';
import Projetos from './componentes/pages/Projetos';

export default function App() {
    return(
       <>
       <Router>
           <ul>
                <li>HOME</li>
                <li>CONTATO</li>
           </ul>

           <Routes>
               <Route exact path='/'>
                   <Home/>
               </Route>

               <Route exact path = "/Empresa">
                    <Empresa/>
                </Route>

                <Route exact path = "/Contato">
                    <Contato/>
                </Route>

                <Route exact path = "/Projetos">
                    <Projetos/>
                </Route>
            </Routes>
       </Router>
       </>
        
    )
}
