import React from "react";
import styles from './Project.module.css';
import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import Load from "../layout/Load";
import Container from "../layout/Container";

export default function Project(){
    const {id} = useParams();
    const [project,setProject] = useState([]);
    const [showProjectForm,setShowProjectForm] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
        fetch(`http://localhost:5000/projects/${id}`,{
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) =>{
            setProject(data)
        },5000)
        .catch((error)=>console.log(error))
        })
    }, [id])

    function toggleProjectForm (){
        setShowProjectForm(!showProjectForm)
    }

    return(
        <>
        {project.name ? (
            <div className={styles.project_details}>
                <Container customClass = 'column'>
                    <div className={styles.details}>
                        <h1>Projeto : {project.name}</h1>
                        <button className={styles.button} onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto' : 'Fechar'}</button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span>Categoria :</span> {project.category.name} 
                                </p>

                                <p>
                                    <span>Orçamento :</span> R$ {project.budget}
                                </p>

                                <p>
                                    <span>Total Utilizado :</span> R$ {project.const}
                                </p>
                            </div>
                        ) : (
                            
                            <div  className={styles.project_info}>
                               <p>Detalhes</p> 
                            </div> 
                        )}
                    </div>
                </Container>    
            </div>
        ) : ( 
          <Load/>
        )}
        
        </>
    )
}