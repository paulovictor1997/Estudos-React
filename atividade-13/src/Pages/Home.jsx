import { useState,useEffect } from "react"
import ProductCard from "../Componentes/ProductCard"
import Pagination from "../Componentes/Pagination"
import "./Home.css"


const Home = () => {
  const [products,setProducts] = useState([])//Estado para o armazenamento de produtos
  const [currentPage,setCurrentPage] = useState(1) // Iniciara a listagem da página 1
  const productsPerPage = 8 // Produtos por página

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=> res.json())
    .then((data) => {
      //console.log(data)
      setProducts(data)
    })
    .catch((err) => console.error("Erro ao buscar produtos:", err))
   
  },[])

  /* 
    Lógica que serve para selecionar os produtos corretos 
    para exibir na página atual.
  */
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct)
  
  return (
    <div className="home-container">
      <h2>Lista de Produtos</h2>
      <div className="product-list">
        {currentProducts.map((product)=>(
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
      <Pagination
        totalProducts={products.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Home