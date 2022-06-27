import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import styles from '../projeto_form/ProjectCard.module.css';

export default function ServiceCard({id,name,cots,description,handleRemove}){
    const remove = (e) =>{

    }

    return(
        <div className={styles.projectCard}>
            <h4>{name}</h4>
            <p>
                <span>Custo Total</span> : R${cots}
            </p>
            <p>{description}</p>
            <div className={styles.projectCard_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill/>
                    Excluir
                </button>
            </div>
        </div>
    )
}