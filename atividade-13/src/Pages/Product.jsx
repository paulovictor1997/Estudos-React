import { CartContext } from '../context/CartContext'
import {useState,useEffect,useContext} from 'react'
import { FaStar } from "react-icons/fa"
import { toast } from 'react-toastify'
import { Link,useParams } from 'react-router-dom'

import './Product.css'

const Product = ({products}) => {
  const {id} = useParams()
  const {addToCart} = useContext(CartContext)
  const [product,setProduct] = useState(null)

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data)=>{
      //console.log(data)
      setProduct(data)
    })
    .catch((err) => console.error("Erro ao buscar produto:", err))
  },[id])

  useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.find((p) => p.id === parseInt(id))
      setProduct(foundProduct)
    }
  }, [id, products]) 

    const addProduct = (productId) => {
      addToCart(productId);
      toast.success('Produto adicionado ao carrinho!') // Notificação de sucesso
    }

  if(!product) return <p>Carregando...</p>

  return (
    <div className='product-detail'>
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p><strong>Preço :</strong>{product.price}</p>
      <p>
        <strong>Avaliação :</strong>{product.rating.rate} <FaStar/>
      </p>
      <button onClick={()=> addProduct(product)} className='btn'>
        Adicionar ao Carrinho
      </button>
      <Link to={'/'} className='back'>Voltar</Link>
    </div>
  )
}

export default Product