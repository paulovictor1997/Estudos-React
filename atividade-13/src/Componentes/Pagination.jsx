import "./Pagination.css"

const Pagination = ({totalProducts,productsPerPage,setCurrentPage,currentPage}) => {
  const totalPages = Math.ceil(totalProducts/productsPerPage)  
  
  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_,index)=>(
        <button 
          key={index + 1}
          className= {currentPage === index + 1 ? "active" : ""}
          onClick={()=> setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  )
}

export default Pagination
