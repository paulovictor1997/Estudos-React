import { createContext,useState,useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    //Pegar o carrinhho no localStorage o iniciar a aplicação
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []
    //Add soma dos produtos.
    const [cart,setCart] = useState(storedCart)
    const [totalPrice,setTotalPrice] = useState(0)

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))

        //Calcular o carrinho
        const total = cart.reduce((acc,item)=> acc + item.price,0)
        setTotalPrice(total)
    },[cart])

    const addToCart = (product) =>{
        setCart((prevCart) =>[...prevCart,product])
    }

    const removeFromCart = (productId)=>{
        setCart((prevCart)=> prevCart.filter((item)=> item.id !== productId))
    }

    //Função de remoção do carrinho
    const clearCart = ()=>{
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart,totalPrice,clearCart}}>
            {children}
        </CartContext.Provider>
    )
}