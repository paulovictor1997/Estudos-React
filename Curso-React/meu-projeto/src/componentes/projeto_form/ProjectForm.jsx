import { useState,useEffect } from "react";
import React from "react";
import './ProjectForm.css';
import Input from "../forms/Input";
import Select from "../forms/Select";
import SubmitButton from "../forms/SubmitButton";

export default function ProjectForm({handleSubmit,btnText,projectData}){
    const [categories,setCategories] = useState([])
    const [project,setProject] = useState(projectData || {})
    
    useEffect(()=>{
        /* 
        Vamos usar a API criada para pegar todas
        às categorias, e usando o useState, ele
        vai começar com o array vazio.
    */
    fetch("http://localhost:5000/categories",{
        method : "GET",
        headers:{
            'Content-Type' : 'application/json',
        },
    })
        .then((resp) => resp.json())
        .then((data) =>{
            setCategories(data)
        })
        .catch((error) => console.log(error))
   },[])

   const submit = (e)=>{
     e.preventDefault()
     handleSubmit(project)
   }

   function handleChange(e){
      setProject({...project,[e.target.name]:e.target.value})
      console.log(project)  
   }

   function handleCategory(e){
    setProject({...project,
        category:{
        id:e.target.value,
        name:e.target.options[e.target.selectedIndex].text
        //Irá pegar a opção que foi selecionada no select
    }
    })
   }

    return(
        <form onSubmit={submit}>
            <Input 
               type="text" 
               text="Nome do projeto"
               name="name"
               placeholder="Insira o nome do projeto"
               handleOnchange={handleChange}
               value = {project.name}
            />

            <Input 
               type="number" 
               text="Orçamento do projeto"
               name="budget"
               placeholder="Insira o orçamento total do projeto"
               handleOnchange={handleChange}
               value = {project.budget}
            />
           
           <Select
               name='category_id'
               text='Selecione a categoria'
               options={categories}
               handleOnchange={handleCategory}
               value={project.category ? project.category.id : ''}
           />
           
            <SubmitButton text={btnText}/>

        </form>
    )
}