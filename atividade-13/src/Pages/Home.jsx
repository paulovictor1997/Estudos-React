import { useState,useEffect } from "react"
import ProductCard from "../Componentes/ProductCard"
import Pagination from "../Componentes/Pagination"
import "./Home.css"


const Home = () => {
  const [products,setProducts] = useState([])//Estado para o armazenamento de produtos
  const [currentPage,setCurrentPage] = useState(1) // Iniciara a listagem da página 1
  const [categories,setCategories] = useState([])
  const [selectedCategory,setSelectedCategory] = useState("all")
  const [sortOrder,setSortOrder] = useState("default")
  const productsPerPage = 8 // Produtos por página

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=> res.json())
    .then((data) => {
      //console.log(data)
      setProducts(data)
    })
    .catch((err) => console.error("Erro ao buscar produtos:", err))

    fetch("https://fakestoreapi.com/products/categories")
    .then((res)=> res.json())
    .then((data)=>{
      //console.log(data)
      setCategories(data)
    })
    .catch((err)=> console.log("Erro ao buscar categorias:", err))
  },[])

  //Filtrar produtos
  const filteredProducts = 
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  
  const sortedProducts = [...filteredProducts].sort((a,b)=>{
    /*Caso o produto tenha avaliação > 4.5 e o outro não, ele sobe */
    if(b.rating.rate > 4.5 && a.rating.rate <= 4.5) return 1
    if(a.rating.rate > 4.5 && b.rating.rate <= 4.5) return -1
    
    /* Ordenação dos produtos pro preço */
    if(sortOrder === "decres") return a.price - b.price
    if(sortOrder === "cresc") return b.price - a.price
    return 0
  })

  /* 
    Lógica que serve para selecionar os produtos corretos 
    para exibir na página atual.
  */
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = sortedProducts.slice(indexOfFirstProduct,indexOfLastProduct)
  
  return (
    <div className="home-container">
      <h2>Lista de Produtos</h2>
      <select onChange={(e)=> setSelectedCategory(e.target.value)}>
        <option value="all">All</option>
        {categories.map((category)=>(
          <option key={category} value={category}>
              {category}
          </option>
        ))}
      </select>

      <select onChange={(e)=> setSortOrder(e.target.value)} value={sortOrder}>
        <option value="default">Ordenar por preço</option>
        <option value="decres">Menor preço</option>
        <option value="cresc">Maior preço</option>
      </select>  

      <div className="product-list">
        {currentProducts.map((product)=>(
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
      <Pagination
        totalProducts={sortedProducts.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Home