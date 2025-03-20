import { Link } from "react-router-dom"
import "./ProductCard.css"

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.title}/>
      <h3>
        {product.title}
      </h3>
      <p>R${product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`} className="details-button">
          Ver Detalhes
      </Link>
    </div>
  )
}

export default ProductCard