import React from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-content">
        <form className="direccion-envio">
          <h2>Dirección de envío</h2>
          <div className="form-row">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellido" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Ciudad" />
            <input type="text" placeholder="Departamento" />
          </div>
          <input type="text" placeholder="Dirección" />
          <div className="form-row">
            <input type="text" placeholder="Código postal" />
            <input type="text" placeholder="Teléfono de contacto" />
          </div>
        </form>

        <div className="resumen-compra">
          <h2>Resumen de la compra</h2>
          <p>Productos (0) - S/ 0.00</p>
          <p>Delivery - GRATIS</p>
          <p>Descuentos - S/ 0.00</p>
          <hr />
          <p>Total: S/ 0.00</p>
          <button
            className="btn-pago"
            onClick={() => navigate('/checkoutpago')}>
            Seleccionar método de pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
