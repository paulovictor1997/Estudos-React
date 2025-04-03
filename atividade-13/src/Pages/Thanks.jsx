import picture from "../imagens/foto.jpg"
import { Link } from "react-router-dom"
import "./Thanks.css"

const Thanks = () => {
  return (
    <div className='thanks-container'>
        <img src={picture} alt="celebration" className="thanks-image"/>
        <h2>Obrigado por sua compra!</h2>
        <p>Seu pedido foi processado com sucesso. Em breve, você receberá mais detalhes no seu e-mail.</p>
        <Link to={'/'} className='back'>Voltar</Link>
    </div>
  )
}

export default Thanks