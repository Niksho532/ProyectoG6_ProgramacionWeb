import React from 'react'
import { Link } from 'react-router-dom'

function ProductList({ products, title }) {
  return (
    <section className="products-section">
      {title && <h2 className="section-title">{title}</h2>}
      
      <div className="products-carousel">
        <button className="carousel-control prev"><i className="fa fa-chevron-left"></i></button>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <Link to={`/producto/${product.id}`} className="product-image">
                <img 
                  src={product.imagen} 
                  alt={product.nombre}
                />
              </Link>
              <div className="product-details">
                <Link to={`/producto/${product.id}`}>
                  <h3>{product.nombre}</h3>
                </Link>
                <p className="product-category">{product.categoria}</p>
                <p className="product-price">S/{product.precio} {product.unidad}</p>
                <button className="add-to-cart-btn">AGREGAR</button>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control next"><i className="fa fa-chevron-right"></i></button>
      </div>
    </section>
  )
}

export default ProductList