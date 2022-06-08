import React from "react";
import './ProjectForm.css';
import Input from "../forms/Input";
import Select from "../forms/Select";
import SubmitButton from "../forms/SubmitButton";

export default function ProjectForm({btnText}){
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
           />
           
            <SubmitButton text={btnText}/>

        </form>
    )
}