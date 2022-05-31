import Button from "./Button/Button"

export default function Evento (){
    function meuEvento(){
        console.log('Ativando primeiro Evento')
    }

    function segundoEvento(){
        console.log('Ativando segundo Evento')
    }

    return(
        <>
        <p>Clique para disparar o evento</p>
        <Button event={meuEvento} text= "Primeiro Evento"/>
        <Button event={segundoEvento} text= "Segundo Evento"/>
        </>
    )
}

/*
Primeiro exemplo
export default function Evento ({numero}){
    function meuEvento(){
        console.log(`Funcionando ${numero}`)
    }

    return(
        <>
        <p>Clique para disparar o evento</p>
        <button onClick={meuEvento}>Ativar</button>
        </>
    )
}
*/