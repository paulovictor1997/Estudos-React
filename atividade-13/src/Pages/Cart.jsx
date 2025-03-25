import {useContext }from 'react'
import { CartContext } from '../context/CartContext'
import { FaTrash } from 'react-icons/fa'
import { toast } from 'react-toastify'

import "./Cart.css"

const Cart = () => {
  const {cart, removeFromCart} = useContext(CartContext)  

  const handleRemove = (productId) => {
    removeFromCart(productId);
    toast.success('Produto removido do carrinho!')
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
                    <button onClick={()=> handleRemove(product.id)}  className='remove-btn'>
                        <FaTrash/>
                    </button>
                </div>
            ))
        )}
    </div>
  )
}

export default Cart