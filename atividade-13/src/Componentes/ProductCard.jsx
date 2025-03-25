import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import "./ProductCard.css"

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.title}/>
      <h3>
        {product.title.length > 30 ? product.title.slice(0, 30) + "..." : product.title}
      </h3>
      <p>R${product.price.toFixed(2)}</p>
      <span className={`rating ${product.rating.rate > 4.5 ? "highlight" : ""}`}>
        <FaStar/> {product.rating.rate} ({product.rating.count} avaliações)
      </span>

      <Link to={`/product/${product.id}`} className="details-button">
          Ver Detalhes
      </Link>
    </div>
  )
}

export default ProductCard