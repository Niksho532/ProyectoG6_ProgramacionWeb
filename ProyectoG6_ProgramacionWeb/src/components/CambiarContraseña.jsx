import React, { useState } from 'react';
import './CambiarContraseña.css';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';

const CambiarContraseña = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Se ha enviado un enlace a: ${email}`);
    // Aquí iría la lógica para enviar el enlace real.
  };

  return (
    <div className="reset-page">
      <Header />
      <NavBar />

      <div className="reset-container">
        <div className="reset-form-wrapper">
          <h2>Restablecer Contraseña</h2>
          <p className="reset-description">
            Se enviará un enlace a tu correo electrónico para que puedas validar tu identidad y restablecer tu contraseña.
            <br /><br />
            Por favor, asegúrate de revisar tu bandeja de entrada y la carpeta de spam.
          </p>

          <form onSubmit={handleSubmit} className="reset-form">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="usuario@gmail.com"
              required
              className="reset-input"
            />
            <button type="submit" className="reset-button">
              Restablecer contraseña
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CambiarContraseña;
