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