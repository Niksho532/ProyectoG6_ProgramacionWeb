import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ComprasCarrito.css';
import { useCart } from '../components/CarContext';

const ComprasCarritos = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useCart(); // Usar funciones necesarias

  const subtotal = cartItems.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <div className="carrito-container">
      <header className="Tituloo">
        <h1 className="titulo">🛒 Mi Carrito</h1>
        <ul>
          <li>
            <a href="/">Volver a mi Tiendita</a>
          </li>
        </ul>
      </header>

      <div className="carrito-detalle">
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cuadro-producto">
              <div className="producto-info">
                <p className="producto-nombre">{item.nombre}</p>
                <p className="producto-precio">S/ {item.precio}</p>
              </div>

              <div className="cantidad">
                <button onClick={() => updateQuantity(item.id, item.cantidad - 1)}>-</button>
                <span style={{ margin: '0 10px' }}>{item.cantidad}</span>
                <button onClick={() => updateQuantity(item.id, item.cantidad + 1)}>+</button>
              </div>

              <div className="total">
                Total: S/ {(item.precio * item.cantidad).toFixed(2)}
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="eliminar-producto"
              >
                Eliminar
              </button>
            </div>
          ))
        )}

        <div className="resumen">
          <h2>Resumen</h2>
          <div className="cupon">
            <h3>¿Tienes un cupón de descuento?</h3>
            <div className="cupon-form">
              <input type="text" placeholder="Código" />
              <button>Aplicar</button>
            </div>
          </div>
          <p>Subtotal: S/ {subtotal.toFixed(2)}</p>
          <p>
            Total:{' '}
            <span className="resaltado">S/ {subtotal.toFixed(2)}</span>
          </p>
          <button className="btn-continuar" onClick={() => navigate('/checkout')}>
          CONTINUAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComprasCarritos;
  