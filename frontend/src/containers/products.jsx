import React, { useState,useEffect } from 'react'
import {Comp31} from "../components"
import "./page3.css"

const Products = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)


  const   fetchData = async ()=>{
    const data = await fetch("https://dummyjson.com/products?limit=500")
    const jsonData = await data.json()
    setProducts(jsonData.products)
  }

  useEffect(() => {
    fetchData()
  }, []);

  const PAGE_SIZE = 10;
  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts/PAGE_SIZE);
  const start = currentPage*PAGE_SIZE;
  const end = start+PAGE_SIZE;

  console.log(start, end);
  
  

  const ProductCard = ({title, image}) =>{
    return (
      <div className='product-card'>
      <img src={image} alt="title" />
      <span>{title}</span>
      </div>
    )
  }
  
  
  return (
    <div>
      <div className='product-container'>
        <div className='pagination'>{[...Array(noOfPages).keys()].map((pr)=>pr+1)}</div>
        {products?.slice(start,end).map((prod,ind)=> <ProductCard key={ind} title={prod.title} image ={prod.thumbnail} />)}
      </div>
    </div>
  )
}

export default Products
