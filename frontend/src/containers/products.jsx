import React, { useState, useEffect } from 'react'
import { Comp31 } from "../components"
import "./products.css"

const Products = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)


  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=500")
    const jsonData = await data.json()
    setProducts(jsonData.products)
  }

  useEffect(() => {
    fetchData()
  }, []);


  const ComponentName = () => {
    return (
      <div>ComponentName</div>
    );
  };


  const PAGE_SIZE = 16;
  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  console.log(start, end);



  const ProductCard = ({ title, image }) => {
    return (
      <div className='product-card'>
        <img className='product-image' src={image} alt="title" />
        <span className='product-title'>{title}</span>
      </div>
    )
  }

  function handlePage(num) {
    setCurrentPage(num)
  }

  return (
    <div>
      <div>{[...Array(noOfPages).keys()].map((pr) => <button onClick={() => handlePage(pr)} className='page-number'>
        {pr + 1}
      </button>)}</div>
      <div className='product-container'>
        {products?.slice(start, end).map((prod, ind) => <ProductCard key={ind} title={prod.title} image={prod.thumbnail} />)}
      </div>
      <p className="text">hello world</p>
      <p className="go">go to market</p>
      <div className="idea super">IDEA</div>
      <div className="container">
        <ul className="list">
          <li className="item">item 1</li>
          <li className="item">item 2</li>
          <li className="item">item 3</li>
        </ul>
        <ol className="list">
          <li className="list-item1">item 1</li>
          <li className="list-item2">item 2</li>
          <li className="list-item3">item 3</li>

        </ol>

      </div>
    </div>
  )
}

export default Products
