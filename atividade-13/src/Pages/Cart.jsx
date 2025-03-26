import {useContext, useState }from 'react'
import { CartContext } from '../context/CartContext'
import { FaTrash,FaCheck } from 'react-icons/fa'
import { toast } from 'react-toastify'

import "./Cart.css"

const Cart = () => {
  const {cart, removeFromCart} = useContext(CartContext)
  const [confirmDelete, setConfirmDelete] = useState(null)  

  const handleDelete = (productId) => {
    setConfirmDelete(productId)
  }

  const confirmRemove = () => {
    if(confirmDelete !== null){
       removeFromCart(confirmDelete)
       setConfirmDelete(null) 
       toast.success('Produto removido do carrinho!')
    }
  }
    
  return (
    <div className='cart-container'>
        <h2>Carrinho de Compras</h2>
        {cart.length === 0 ? (
            <p>Seu carrinho está vazio</p>
        ):(
            cart.map((product)=>(
                <div key={product.id} className='cart-item'>
                    <img src={product.image} alt={product.title}/>
                    <div>
                        <h3>{product.title}</h3>
                        <p><strong>Preço:</strong>${product.price.toFixed(2)}</p>
                    </div>
                    <button onClick={()=> handleDelete(product.id)}  className='remove-btn'>
                        <FaTrash/>
                    </button>
                </div>
            ))
        )}
        {confirmDelete !== null && (
        <>
        <div className='modal-overlay' onClick={() => setConfirmDelete(null)}></div>
        <div className='modal'>
            <p>Deseja confirmar exclusão?</p>
            <button onClick={confirmRemove} className='confirm-btn'><FaTrash/>Confirmar</button>
            <button onClick={() => setConfirmDelete(null)} className='cancel-btn'> <FaCheck/>Cancelar</button>
        </div>
        </>
    )}    
    </div>
  )
}

export default Cart