import React from 'react'
import { Link } from 'react-router-dom'

function CategoryList({ categories }) {
  return (
    <div className="category-section">
      <h2 className="section-title">Explora las categorías</h2>
      
      <div className="category-carousel">
        <button className="carousel-control prev"><i className="fa fa-chevron-left"></i></button>
        <div className="category-list">
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <Link to={`/buscar?categoria=${category.id}`}>
                <div className="category-image">
                  <img src={category.imagen} alt={category.nombre} />
                </div>
                <h3 className="category-name">{category.nombre}</h3>
              </Link>
            </div>
          ))}
        </div>
        <button className="carousel-control next"><i className="fa fa-chevron-right"></i></button>
      </div>
    </div>
  )
}

export default CategoryList