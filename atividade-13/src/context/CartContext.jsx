import { createContext,useState,useEffect } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    //Pegar o carrinhho no localStorage o iniciar a aplicação
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []
    const [cart,setCart] = useState(storedCart)

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])

    const addToCart = (product) =>{
        setCart((prevCart) =>[...prevCart,product])
    }

    const removeFromCart = (productId)=>{
        setCart((prevCart)=> prevCart.filter((item)=> item.id !== productId))
    }

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}