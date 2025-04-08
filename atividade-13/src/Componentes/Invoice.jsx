import {useContext,useEffect,useState} from 'react'
import { CartContext } from '../context/CartContext'
import {useNavigate} from "react-router-dom"
import { toast } from 'react-toastify'
import './Invoice.css'

const Invoice = () => {
  const {cart,clearCart} = useContext(CartContext)
  const [invoiceItems,setInvoicesItems] = useState([])
  const navigate = useNavigate()  

  useEffect(()=>{
    const storedInvoice = JSON.parse(localStorage.getItem('invoice')) || []
    if(cart.length > 0){
        setInvoicesItems(cart)
        localStorage.setItem('invoice',JSON.stringify(cart))
    } else if (storedInvoice.length > 0){
        setInvoicesItems(storedInvoice)
    }
  },[cart])

  const handleCancel = () =>{
    localStorage.removeItem('invoice')
    navigate('/cart')
  }

  const handleConfirm = () =>{
    localStorage.removeItem('invoice')
    clearCart() // Limpa o carrinho
    navigate('/thanks')
    toast.success('Compra aprovada com sucesso!')
  }

  const total = invoiceItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)

  return (
    <div className='invoice-container'>
        <h2>Nota fiscal</h2>
        {invoiceItems.length === 0 ? (
            <p>Nenhum item na nota fiscal</p>
        ):(
            <ul>
                {invoiceItems.map((item)=>(
                    <li key={item.id}>
                    {item.title} - ${item.price.toFixed(2)}
                  </li>
                ))}
            </ul>
        )}
        <h3>Total ${total}</h3>
        <button onClick={handleCancel} className='cancel-btn'>Cancelar</button>
        <button onClick={handleConfirm}className='confirm-btn'>Confirmar Compra</button>
    </div>
  )
}

export default Invoice