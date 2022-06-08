import React from "react";
import './Projetos.css'
import ProjectForm from "../projeto_form/ProjectForm";

export default function Projetos(){
    return(
      <div className="Project_Container">
          <h1>Criar Projetos</h1>
          <p>Crie seu projeto para depois adicionar os serviços.</p>
         <ProjectForm btnText ="Criar Projeto"/>
      </div>
    )
}