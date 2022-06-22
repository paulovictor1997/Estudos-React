import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

export default function Navbar(){
    return(
        <nav>
            <div className={styles.logo}>Logo</div>
            <div className={styles.link}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Empresa'>Empresa</Link></li>
                    <li><Link to='/Contato'>Contato</Link></li>
                    <li><Link to='/Projetos'>Projetos</Link></li>
                </ul>
            </div>
        </nav>
    )
}

/*
<Link to='/'>Home</Link>
<Link to='/Empresa'>Empresa</Link>
<Link to='/Contato'>Contato</Link>
<Link to='/Projetos'>Projetos</Link>
*/