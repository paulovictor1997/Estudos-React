import React from "react";
import { useNavigate } from "react-router-dom";
import styles from'./Projetos.module.css'
import ProjectForm from "../projeto_form/ProjectForm";

export default function Projetos(){
    const navigate = useNavigate()

    function createPost(project){
      //Inicializando o cost e o services
      project.const = 0;
      project.services = [];

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
         //Redirecionando para a página de projetos feitos.
         navigate('/Projects',{state:{message:'Projeto criado com succeso'}})
       })
       .catch((error) => console.log(error))
    }
    return(
      <div className={styles.Project_Container}>
          <h1>Criar Projetos</h1>
          <p>Crie seu projeto para depois adicionar os serviços.</p>
         <ProjectForm handleSubmit={createPost} btnText ="Criar Projeto"/>
      </div>
    )
}