import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa"
import { Link } from 'react-router-dom'

import './Product.css'

const Product = () => {
  const {id} = useParams()
  const [product,setProduct] = useState(null)

  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data)=>{
      console.log(data)
      setProduct(data)
    })
    .catch((err) => console.error("Erro ao buscar produto:", err))
  },[id])

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
      <Link to={'/'} className='back'>Voltar</Link>
    </div>
  )
}

export default Product