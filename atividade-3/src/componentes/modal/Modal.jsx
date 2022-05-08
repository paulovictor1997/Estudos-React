import React, { Children } from "react";
import './modal.scss'

/*
Recebe 3 parâmetros : 
id - o valor padrão
onclose - caso não seja passado uma função, fica uma função vazia.
children - Que vai ser o renderizado
*/

export default ({id = 'modal', onClose = () =>{},children}) => {
    const outSideClick = (e) =>{
        if(e.target.id == id) onClose();
    }
    return(
        <div id={id} className="modal" onClick={outSideClick}>
            <div className="container-content">
                <button className="close-button" onClick={onClose} />
                <div className="content">{children}</div>
            </div>
        </div>
    )
}