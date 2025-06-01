import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [usuarioActual, setUsuarioActual] = useState(null);
  const [query, setQuery] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = localStorage.getItem('usuarioActual');
    setUsuarioActual(usuario);
  }, []);

   const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(query)}`)
    }
  }
  
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Mi-Tiendita <span className="dot">•</span></h1>
        </div>
       <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar un producto..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
        <div className="user-actions">
          <div className="cart">
            <button className="btn-cart" onClick={() => navigate('/ComprasCarrito')}>
            <i className="fa fa-shopping-cart"></i>
            <span className="cart-count">0</span>
            <p>CARRITO</p>
            </button>
          </div>
          
          <div className="user" style={{ cursor: 'pointer' }} onClick={() => {
            if (usuarioActual) {
              navigate('/mi-cuenta');
            } else {
              navigate('/login');
            }
          }}>
            <span>
              <i className="fa fa-user"></i>
              Usuario
            </span>
            <span className="user-name">
              {usuarioActual ? 'Cuenta' : 'Invitado'}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;