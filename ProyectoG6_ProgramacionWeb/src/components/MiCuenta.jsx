// MiCuenta.jsx
import React from "react";

import Header from "./Header";
import NavBar from "./NavBar";
import "./MiCuenta.css";

const MiCuenta = () => {
  const handleLogout = () => {
    // Aquí deberías limpiar tokens o datos del usuario según tu lógica de autenticación
    localStorage.removeItem("token"); // ejemplo
    window.location.href = "/login"; // redirigir al login
  };

  return (
    <div className="mi-cuenta-container">
      <Header />
      <NavBar />

      <div className="logout-container">
        <button className="btn-logout" onClick={handleLogout}>Cerrar sesión</button>
      </div>

      <h2 className="titulo">Hola Pepito !</h2>

      <div className="info-general">
        <div className="card info-personal">
          <h3>Datos personales</h3>
          <p><strong>Nombre:</strong> Pepito Paco</p>
          <p><strong>Correo:</strong> <a href="mailto:juan.perez@gmail.com">pepitomaster@gmail.com</a></p>
          <p><strong>Fecha de registro:</strong> 13/04/2025</p>
        </div>

        <div className="card direccion-envio">
          <h3>Dirección de envío</h3>
          <p>Av la molina 12334</p>
          <p>Lima - Lima</p>
          <p>Celular de contacto: 990892131</p>
        </div>

        <div className="stats">
          <div className="card stat">
            <p className="stat-title">Ordenes</p>
            <p className="stat-value">3</p>
          </div>
          <div className="card stat">
            <p className="stat-title">Monto ahorrado</p>
            <p className="stat-value">S/67</p>
          </div>
        </div>

        <div className="profile-pic">
          

        </div>
      </div>

      <h3 className="titulo-secundario">Tus órdenes</h3>
      <div className="buscador">
        <input type="text" placeholder="Buscar una órden..." />
        <button>Buscar</button>
      </div>

      <table className="tabla-ordenes">
        <thead>
          <tr>
            <th>#ORDEN</th>
            <th>Usuario</th>
            <th>Fecha de órden</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="order-id">#1234</td>
            <td>Pepito Paco</td>
            <td>20/01/2025</td>
            <td>S/199.00</td>
            <td className="estado entregado">Entregado</td>
            <td><button className="ver-detalle">Ver detalle</button></td>
          </tr>
          <tr>
            <td className="order-id">#1234</td>
            <td>Jose Alvarez</td>
            <td>20/01/2025</td>
            <td>S/199.00</td>
            <td className="estado por-entregar">Por entregar</td>
            <td><button className="ver-detalle">Ver detalle</button></td>
          </tr>
          <tr>
            <td className="order-id">#1234</td>
            <td>Pepito Paco</td>
            <td>20/01/2025</td>
            <td>S/199.00</td>
            <td className="estado entregado">Entregado</td>
            <td><button className="ver-detalle">Ver detalle</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MiCuenta;
