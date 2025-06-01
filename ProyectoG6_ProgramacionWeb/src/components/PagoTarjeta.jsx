import React from 'react';
import './PagoTarjeta.css';
import { useNavigate } from 'react-router-dom';

const PagoTarjeta = () => {
    const navigate = useNavigate();
  return (
    <div className="pago-container">
      <h1>Checkout</h1>
      <div className="pago-content">
        <div className="form-tarjeta">
          <h2>Método de pago</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa"
            
            className="imagen-tarjeta"
          />

          <div className="campo">
            <p>Número de la tarjeta</p>
            <input type="text" placeholder="0000 0000 0000 0000" />
          </div>

          <div className="campo">
            <p>Nombre</p>
            <input type="text" placeholder="Inserte su Nombre Completo" />
          </div>

          <div className="fila">
            <div className="campo">
              <p>Fecha de expiración</p>
              <input type="text" placeholder="MM/AA" />
            </div>
            <div className="campo">
              <p>CVC</p>
              <input type="text" placeholder="123" />
            </div>
          </div>

          <button
            className="btn-pagar"
            onClick={() => navigate('/ordencompletada')}
          >
            Pagar
          </button>
        </div>

        <div className="resumen-compra">
          <h2>Resumen de la compra</h2>
          <p>Productos (0) - S/ 0.00</p>
          <p>Delivery - GRATIS</p>
          <p>Descuentos - S/ 0.00</p>
          <hr />
          <p>Total: S/ 0.00</p>
        </div>
      </div>
    </div>
  );
};

export default PagoTarjeta;
