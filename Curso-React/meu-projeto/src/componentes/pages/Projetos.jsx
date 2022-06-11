import React from "react";
import { useNavigate } from "react-router-dom";
import './Projetos.css'
import ProjectForm from "../projeto_form/ProjectForm";

export default function Projetos(){
    const navigate = useNavigate()

    function createPost(project){
      //Inicializando o cost e o services
      project.const = 0;
      project.services = 0;

      fetch('http://localhost:5000/projects',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(project),
      })
       .then((resp)=>resp.json())
       .then((data) =>{
         console.log(data)
         //Redirect
         navigate('/Projects',{message:'Projeto criado com succeso'})
       })
       .catch((error) => console.log(error))
    }
    return(
      <div className="Project_Container">
          <h1>Criar Projetos</h1>
          <p>Crie seu projeto para depois adicionar os serviços.</p>
         <ProjectForm handleSubmit={createPost} btnText ="Criar Projeto"/>
      </div>
    )
}