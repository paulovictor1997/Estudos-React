import React from "react";
import styles from './Home.module.css';
import moeda from '../../img/moeda.jpg';
import LinkButton from "../layout/LinkButton";

export default function Home(){
    return(
        <section className={styles.home_content}>
            <h1>Seja bem-vindo ao <span>Cots</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo !</p>
           <LinkButton to='/Projetos' text='Criar Projeto'/>
            <img src={moeda} alt="moeda" />
        </section>
        
    )
}