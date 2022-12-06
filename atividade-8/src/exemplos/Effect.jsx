import { useState, useEffect } from "react";
import "../App.css";
/*
UseEffect - Ele vai fazer algo a partir de uma ação nossa
*/

const Effect = () => {

   const [count,setCount] = useState(0);
   const [countB,setCountB] = useState(0);
   const [user, setUser] = useState()

   // 1 - Utilização
   useEffect(()=>{
    console.log("Roda a cada renderização");
   });

   // 2 - Array de dependências, ele vai aguardar a alteração para comecar a contar
   useEffect(()=>{
       console.log("Só roda ao incrementar o valor"); 
   }, [count]);
   
   // 3 - Array de dependências vazio
   useEffect(()=>{
        console.log("Só é executado uma vez");
   }, []);

    // 4- Clean up function
    useEffect(()=>{
        const timer = setTimeout(()=>{
            console.log(`O incrementador foi alterado ${count} vezes`);
        },2000);

        return()=>{
            clearTimeout(timer);
        }
        
    }, [count]);

     // 5 - Fetch API com useEffect
     useEffect(()=> {
        fetch("https://api.github.com/users/paulovictor1997")
        .then((res)=> res.json())
        .then((json)=> setUser(json))
     },[])
    



  return (
    <div>
        <div>
            <button onClick={()=> setCount((prevCount)=> prevCount + 1)}>Renderizar</button>
            <p>{count}</p>
        </div>

        <div>
            <button onClick={()=> setCountB((prevCount)=> prevCount + 1)}>Renderizar B</button>
            <p>{countB}</p>
        </div>

        <div>
          {user && (
            <div>
             <h3>Dados do usuário</h3>
              <p>Nome : {user.name}</p>
              <p>Usuário : {user.bio}</p>
              <p>Link: <a href={user.html_url}>{user.html_url}</a></p>
            </div>
          )}
        </div>
    </div>
    
  )
}

export default Effect