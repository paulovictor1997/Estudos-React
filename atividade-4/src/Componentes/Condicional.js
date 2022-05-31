import { useState } from "react";

export default function Condiocional(){
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }


    return(
        <>
        <h3>Cadastre o seu email : </h3>
        <form>
            <input type= "email" placeholder="Digite o seu email"
            onChange={(e)=> setEmail(e.target.value)}
            />
            <button type="submit" onClick={enviarEmail}>Enviar Email</button>

            {userEmail && (
                <div>
                   <p>Email do do usuário : {userEmail}</p> 
                   <button onClick={limparEmail}>Limpar</button>
                </div>
            )}

        </form>

        </>
    )
}