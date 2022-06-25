import {parse, v4 as uuidv4} from 'uuid';
import React from "react";
import styles from "./Project.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Load from "../layout/Load";
import Container from "../layout/Container";
import ProjectForm from "../projeto_form/ProjectForm";
import ServiceForm from "../Service/ServiceForm";
import Message from "../layout/Message";

export default function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProject(data);
        }, 5000)
        .catch((error) => console.log(error));
    });
  }, [id]);

  function editPost(project) {
    //console.log(project)
    setMessage('')
    // Validação do budget
    if (project.budget < project.const) {
      //Mensagem
      setMessage("O orçamento não pode ser menor que o custo do projeto !");
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      //Eviando como texto, já que eu irei alterar somente as informações
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage("Projeto Atualizado !");
        setType("success");
      })
      .catch((error) => console.log(error));
  }

  function createService (){
    //Pegando o último serviço
    const lastService = project.services[project.services.length -1]
    lastService.id = uuidv4();

    const lastServiceCost = lastService.const;
    const newCost = parseFloat(project.const) + parseFloat(lastServiceCost);

    //Se passou do valor estipulado
    if(newCost > parseFloat(project.budget)){
       setMessage("Orçamento ultrapassado, verifique o valor do serviço !!!")
       setType("error")
       project.services.pop()
       return false
    }

    //Adicionando o valor do projeto
      project.const = newCost;

    //Atualizando o projeto
    fetch(`http://localhost:5000/projects/${project.id}`,{
      method: 'PATCH',
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) =>{
        //Exibir os serviços
        console.log(data)
      })
      .catch((error)=> console.log(error))
  }

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function toggleServiceForm(){
    setShowServiceForm(!showServiceForm)
  }

  return (
    <>
      {project.name ? (
        <div className={styles.project_details}>
          <Container customClass="column">
            {message && <Message type={type} msg={message} />}
            <div className={styles.details}>
              <h1>Projeto : {project.name}</h1>
              <button className={styles.button} onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto" : "Fechar"}
              </button>
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
                <div className={styles.project_info}>
                  <ProjectForm
                    handleSubmit={editPost}
                    btnText="Concluir Edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className={styles.service_form_container}>
              <h2>Adicione um serviço :</h2>
              <button className={styles.button} onClick={toggleServiceForm}>
                {!showServiceForm? "Adicionar Serviço" : "Fechar"}
              </button>
              <div className={styles.project_info}>
                {showServiceForm &&
                  <ServiceForm
                  handleSubmit={createService}
                  textBtn="Adicionar Serviço"
                  projectData={project}
                  />
                }
              </div>
            </div>
            <h2>Serviços</h2>
            <Container customClass = "start">
                <p>Itens de Serviço</p>
            </Container>
          </Container>
        </div>
      ) : (
        <Load />
      )}
    </>
  );
}
