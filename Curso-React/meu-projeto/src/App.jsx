import React from 'react';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './componentes/pages/Home';
import Empresa from './componentes/pages/Empresa';
import Contato from './componentes/pages/Contato';
import Projetos from './componentes/pages/Projetos';
import Container from './componentes/layout/Container';

export default function App() {
    return(
       <>
       <Router>
            <div>
               <Link to='/'>Home</Link>
               <Link to='/Empresa'>Empresa</Link>
               <Link to='/Contato'>Contato</Link>
               <Link to='/Projetos'>Projetos</Link>
            </div>    
            <Container>
           <Routes>
               <Route exact path='/'element ={<Home/>} />
               <Route exact path = "/Empresa" element ={<Empresa/>}/>
               <Route exact path = "/Contato" element ={<Contato/>}/>
               <Route exact path = "/Projetos" element ={<Projetos/>}/>
            </Routes>
            </Container>

            <footer>Footer</footer>
       </Router>
       
       </>
        
    )
}
