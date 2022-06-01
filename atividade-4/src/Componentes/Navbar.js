import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>

            <li>
                <Link to="/Contato">Contato</Link>
            </li>

            
            <li>
                <Link to="/Sobre">Sobre</Link>
            </li>
        </ul>
    )
}