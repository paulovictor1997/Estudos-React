import Item from "./Item"

export default function Lista(){
    return(
        <>
        <h3>Lista</h3>
        <ul>
            <li>
                <Item marca = 'Ferrari' lancamento={1964}/>
                <Item marca = 'Fiat' lancamento={1985}/>
                <Item marca = 'Renault' lancamento={1990}/>

            </li>
        </ul>
        </>
    )
}