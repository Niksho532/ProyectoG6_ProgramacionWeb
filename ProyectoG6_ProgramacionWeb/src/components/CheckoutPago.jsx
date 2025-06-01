import React from 'react';
import './CheckoutPago.css';
import { useNavigate } from 'react-router-dom';

const ChecokoutPago = () => {
  const navigate = useNavigate();

  return (
    <div className="pago-container">
      <h1>Checkout</h1>
      <div className="pago-content">
        <div className="metodo-pago">
          <h2>Método de pago</h2>

          <div className="logos-centradas">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          </div>

          <div className="qr-preview">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.initiumsoft.com/blog_initium/wp-content/uploads/2024/06/programacion-web.webp"
              alt="QR"
            />
          </div>

          <div className="botones-metodo-centrados">
            <button className="btn-metodo" onClick={() => navigate('/pagoqr')}>
              Pagar con QR
            </button>
            <button className="btn-metodo" onClick={() => navigate('/pagotarjeta')}>
              Pagar con tarjeta
            </button>
          </div>
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

export default ChecokoutPago;
