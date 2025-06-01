import React from 'react';
import './PagoQR.css';
import { useNavigate } from 'react-router-dom';

const PagoQR = () => {
    const navigate = useNavigate();
  return (
    <div className="pago-container">
      <h1>Checkout</h1>
      <div className="pago-content">
        <div className="qr-box">
          <h2>Escanear QR</h2>
          <img
            className="qr-img"
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://www.initiumsoft.com/blog_initium/wp-content/uploads/2024/06/programacion-web.webp"
            alt="Código QR"
          />
          <p className="validez">Válido por 05:00 minutos</p>
          <button
            className="btn-pagar"
            onClick={() => navigate('/ordencompletada')}
          >
            Ya realicé el pago
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

export default PagoQR;
