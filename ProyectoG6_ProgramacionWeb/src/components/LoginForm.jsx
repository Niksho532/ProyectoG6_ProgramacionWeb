import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiConcentrationOrb } from "react-icons/gi";
import { SiIconfinder } from "react-icons/si";
import Footer from './Footer'; 
import Header from './Header';
import NavBar from './NavBar';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuarioEncontrado = usuarios.find(
      (u) => u.correo === email && u.contrasena === password
    );

    if (usuarioEncontrado) {
      localStorage.setItem('usuarioActual', usuarioEncontrado.correo);

      if (usuarioEncontrado.tipo === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      alert('Correo o contraseña incorrectos.');
    }
  };

  return (
    <div className='login-page'>
      <Header />
      <NavBar />

      <div className='login-container'>
        <div className='wrapper'>
          <form onSubmit={handleSubmit}>
            <h1>Iniciar Sesión</h1>

            <div className='input-box'>
              <label htmlFor="email">Correo:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <GiConcentrationOrb className="icon" />
            </div>

            <div className='input-box'>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <SiIconfinder className="icon" />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Recuérdame
              </label>
              <Link to="/restablecer">¿Olvidaste tu contraseña?</Link>
            </div>

            <button type="submit">Iniciar Sesión</button>

            <div className="register-link">
              <p>¿No tienes una cuenta? <Link to="/registro">Regístrate</Link></p>
              <p><Link to="/">← Volver a la página principal</Link></p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginForm;
