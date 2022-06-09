import { useState,useEffect } from "react";
import React from "react";
import './ProjectForm.css';
import Input from "../forms/Input";
import Select from "../forms/Select";
import SubmitButton from "../forms/SubmitButton";

export default function ProjectForm({btnText}){
    const [categories,setCategories] = useState([])
    
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

    return(
        <form>
            <Input 
               type="text" 
               text="Nome do projeto"
               name="name"
               placeholder="Insira o nome do projeto"
            />

            <Input 
               type="number" 
               text="Orçamento do projeto"
               name="budget"
               placeholder="Insira o orçamento total do projeto"
            />
           
           <Select
               name='category_id'
               text='Selecione a categoria'
               options={categories}
           />
           
            <SubmitButton text={btnText}/>

        </form>
    )
}