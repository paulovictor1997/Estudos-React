import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import './Projects.css';
import Container from '../layout/Container';
import Load from "../layout/Load";
import LinkButton from '../layout/LinkButton';
import ProjectCard from "../projeto_form/ProjectCard";

export default function Projects(){
    //Criando os projetos
    const [projects,setProjects] = useState([]);
    //Criando tela de load
    const [removeLoading,setRemoveLoading] = useState(false);
    const [projectMessage,setProjectMessage] = useState('');

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }
   
    useEffect(()=>{
        setTimeout(()=>{
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
            setRemoveLoading(true)
        })
        .catch((error)=>console.log(error))
        },3000)

    },[])

    function removeProject(id){
      fetch(`http://localhost:5000/projects/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type' : 'application/json',
        },
      })
       .then((resp) => resp.json())
       .then((data) =>{
        setProjects(projects.filter((project)=> project.id !== id))
        //MENSAGEM DE REMOÇÃO
        setProjectMessage('Projeto Removido com sucesso !')
       })
       .catch(error=> console.log(error))
    }

    return(
        <div className="project_container">
            <div className="title_container">
                <h1>Meus Projetos</h1>
                <LinkButton to='/projetos' text='Criar Projeto'/>
            </div>
            {message && <Message type='success' msg = {message}/>}
            {projectMessage && <Message type='error' msg = {projectMessage}/>}
            <Container className = 'start'>
                {projects.length > 0 && 
                  projects.map((project)=> <ProjectCard name={project.name}
                  budget={project.budget}
                  category={project.category.name}
                  id = {project.id}
                  key= {project.id}
                  handleRemove={removeProject}
                  />
                )}
                {!removeLoading && <Load/>}
                {removeLoading && projects.length === 0 && (
                    <p>Nenhum projeto cadastrado.</p>
                )}
                
            </Container>
        </div>
    )
}


