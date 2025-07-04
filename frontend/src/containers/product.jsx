import React, { useEffect, useState } from 'react'
import "./products.css"


const Product = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)


  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500")
    const jsonData = await data.json();
    setProducts(jsonData.products)
  }

  useEffect(() => {
    fetchData()
  }, []);

  const ProductCard = ({ title, image }) => {
    return (
      <div className='product-card'>
        <img className='product-image' src={image} alt="title" />
        <span className='product-title'>{title}</span>
      </div>
    )
  }

  const PAGE_SIZE = 16;
  const totalPages = products.length;
  const noOfPages = Math.ceil(totalPages / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE

  function handlePage(num) {
    setCurrentPage(num)
  }

  function goNextHandler() {
    setCurrentPage((prev) => prev + 1)
  }

  function goBackHandler() {
    setCurrentPage((prev) => prev - 1)
  }

  return (
    <div>
      <div>{[...Array(noOfPages).keys()].map((pr) => <button onClick={() => handlePage(pr)} className='page-number'>
        {pr + 1}
      </button>)}</div>
      <div className='product-container'>
        {products?.slice(start, end).map((prod, ind) => <ProductCard key={ind} title={prod.title} image={prod.thumbnail} />)}
      </div>
      <div className="div"></div>

    </div>
  )
}

export default Product