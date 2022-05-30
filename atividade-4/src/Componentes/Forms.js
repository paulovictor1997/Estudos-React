import {useState} from 'react';

export default function Form(){

    function cadastro(e){
        e.preventDefault()
        console.log(`O usuário ${name} foi cadastrado com a senha : ${password}`)
    }
    // name = Nome do atributo / setName = o atributo que eu vou alterar
    const [name,setName] = useState()
    const [password,setPassword] = useState()

    return(
       <div>
           <h3>Cadastro</h3>
           <form onSubmit={cadastro}>
               <div>
                   <label htmlFor="name">Nome : </label>
                   <input type="text" id="name" name="name" placeholder="Nome"
                   onChange={(e)=> setName(e.target.value)}
                   />
               </div>
               <div>
                    <label htmlFor="password">Senha : </label>
                    <input type="password" id="password" placeholder="Senha"
                     onChange={(e)=> setPassword(e.target.value)}
                    />
               </div>
               <div>
               <input type="submit" value="Cadastrar" />
               </div>
           </form>
       </div> 
    )
}