import React from "react";
import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import './Projects.css';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';

export default function Projects(){
    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return(
        <div className="project_container">
            <div className="title_container">
                <h1>Meus Projetos</h1>
                <LinkButton to='/projetos' text='Criar Projeto'/>
            </div>
            {message && <Message type='success' msg = {message}/>}
            <Container className = 'start'>
                <p>Projetos...</p>
            </Container>
        </div>
    )
}