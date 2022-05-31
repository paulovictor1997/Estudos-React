export default function MinhaLista({itens}){
    return(
       <>
       <h3>Lista Aleatória</h3>
       
       {
           itens.map((item,index) =>(
            <p key={index}>{item}</p>
           ))
       }
       </> 
    )
}

/* 
Quando passamos um map, cada um dos precisa de um id único, quando os elementos são repetidos, usamos outro parâmetro(no exemplo, o index), colocamos o atributo key, vai servir para cada qual componente atualizar com o id único 

Caso passe um array vazio(no JSX usando o if ternário, ele sempre irá precisar de um else)

{   itens.length > 0 ? ()
    itens.map((item,index) =>(
        <p key={index}>{item}</p>
    ))) : (
        <p>Vazio</p>
    )}
*/