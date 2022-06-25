import React from "react";
import { useState } from "react";
import  styles from "../projeto_form/ProjectForm.module.css";
import Input from "../forms/Input";
import SubmitButton from "../forms/SubmitButton";

export default function ServiceForm({handleSubmit,textBtn,projectData}){
     
    const [service,setService] = useState({})


    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
       setService({...service,[e.target.name]: e.target.value})         

    }

    return(
       <form className={styles.form} onSubmit={submit}>
        <Input 
         type="text"
         text="Nome do serviço"
         name="name"
         placeholder="Insira o nome do serviço"
         handleOnchange={handleChange}
        />

        <Input 
         type="number"
         text="Custo do serviço"
         name="const"
         placeholder="Insira o valor do serviço"
         handleOnchange={handleChange}
        />

        <Input 
         type="text"
         text="Descrição do serviço"
         name="description"
         placeholder="Descreva o serviço"
         handleOnchange={handleChange}
        />

        <SubmitButton text={textBtn}/>
       </form>
    )
}