import React, { useEffect, useState } from 'react'
import './Home.css'

function Home() {
  const [products, setProducts] = useState([])

  function fetchData() {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setProducts(data.products)
      })
      .catch((error) => {
        console.log("Error fetching products:", error)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>

          <img src={product.thumbnail} alt={product.title} className="product-image"/>

          <div className="product-details">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Rating:</strong> ⭐ {product.rating}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
