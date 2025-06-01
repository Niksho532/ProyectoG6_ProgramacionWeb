import React from 'react';
import './OrdenCompletada.css';
import { useNavigate } from 'react-router-dom';

const OrdenCompletada = () => {
    const navigate = useNavigate();
  return (
    <div className="orden-container">
      <div className="mensaje-principal">
        <h1>Orden completada</h1>
        <p>Gracias por tu compra!</p>
        <a href="#">Resumen de la compra</a>
      </div>

      <div className="panel-derecho">
        <div className="resumen-compra">
          <p>Productos (0) - S/ 0.00</p>
          <p>Delivery - GRATIS</p>
          <p>Descuentos - S/ 0.00</p>
          <hr />
          <p>Total: S/ 0.00</p>
        </div>

        <div className="direccion-envio">
          <h3>Dirección de envío</h3>
          <div className="Direcc">
            <h4>El producto está siendo enviado a la dirección asignada</h4>
            <h5>¡Muchas gracias!</h5>
          </div>
        </div>

        <button
          className="btn-ofertas"
          onClick={() => navigate('/')}
        >
          Ver más ofertas
        </button>
      </div>
    </div>
  );
};

export default OrdenCompletada;
