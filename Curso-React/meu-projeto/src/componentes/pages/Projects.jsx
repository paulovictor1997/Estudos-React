import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import './Projects.css';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from "../projeto_form/ProjectCard";

export default function Projects(){
    //Criando os projetos
    const [projects,setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(()=>{
        fetch('http://localhost:5000/projects',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
            setProjects(data);
        })
        .catch((error)=>console.log(error))
    },[])

    return(
        <div className="project_container">
            <div className="title_container">
                <h1>Meus Projetos</h1>
                <LinkButton to='/projetos' text='Criar Projeto'/>
            </div>
            {message && <Message type='success' msg = {message}/>}
            <Container className = 'start'>
                {projects.length > 0 && 
                  projects.map((project)=> <ProjectCard name={project.name}
                  budget={project.budget}
                  category={project.category.name}
                  key={project.id}
                  
                  />)  
                }
            </Container>
        </div>
    )
}