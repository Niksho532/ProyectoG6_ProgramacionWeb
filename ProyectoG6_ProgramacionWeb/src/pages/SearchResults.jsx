import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { products, categories } from '../data/products'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function SearchResults() {
  const query = useQuery()
  const searchTerm = query.get('q') || ''
  const categoriaParam = query.get('categoria') || ''
  const [order, setOrder] = useState('nombre')
  const [category, setCategory] = useState(categoriaParam)

  let filtered = products.filter(p =>
    p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.marca?.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  if (category) {
    filtered = filtered.filter(p => p.categoria === category)
  }
  
  if (order === 'precio') {
    filtered.sort((a, b) => a.precio - b.precio)
  } else {
    filtered.sort((a, b) => a.nombre.localeCompare(b.nombre))
  }

  return (
    <>
      <Header />
      <NavBar />
      <div className="container">
        <h2 className="section-title">Resultados para "{searchTerm}"</h2>
        
        <div className="filter-options">
          <label>
            Ordenar por:
            <select value={order} onChange={e => setOrder(e.target.value)}>
              <option value="nombre">Nombre</option>
              <option value="precio">Precio</option>
            </select>
          </label>
          <label>
            Categoría:
            <select value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">Todas</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.nombre}</option>
              ))}
            </select>
          </label>
        </div>
        
        <div className="product-grid">
          {filtered.length > 0 ? (
            filtered.map(product => (
              <div key={product.id} className="product-card">
                <img src={product.imagen} alt={product.nombre} />
                <h3>{product.nombre}</h3>
                <p className="price">S/ {product.precio} {product.unidad}</p>
                <button className="add-to-cart">Agregar</button>
              </div>
            ))
          ) : (
            <p className="no-results">No se encontraron productos que coincidan con tu búsqueda</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SearchResults