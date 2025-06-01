import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistroForm.css';
import Footer from './Footer';
import Header from './Header';
import NavBar from './NavBar';

const RegistroForm = () => {
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [dni, setDni] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const navigate = useNavigate();

  const validarFormulario = () => {
    const nombreArray = nombres.trim().split(' ');
    const apellidoArray = apellidos.trim().split(' ');

    if (nombreArray.length < 1 || nombreArray.length > 3) {
      alert('Debes ingresar entre 1 y 3 nombres.');
      return false;
    }

    if (apellidoArray.length !== 2) {
      alert('Debes ingresar exactamente 2 apellidos.');
      return false;
    }

    if (!/^\d{8}$/.test(dni)) {
      alert('El DNI debe tener exactamente 8 dígitos.');
      return false;
    }

    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden.');
      return false;
    }

    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!validarFormulario()) return;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const tipo = correo.endsWith('@aloe.ulima.edu.pe') ? 'admin' : 'usuario';

    const nuevoUsuario = {
      nombres,
      apellidos,
      dni,
      correo,
      contrasena,
      tipo
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    navigate('/login');
  };

  return (
    <div className="registro-page">
      <Header />
      <NavBar />

      <div className="registro-container">
        <div className="registro-form-wrapper">
          <form onSubmit={handleRegister}>
            <h2>Crear Cuenta</h2>

            <div>
              <label>Nombres:</label>
              <input
                type="text"
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Apellidos:</label>
              <input
                type="text"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
                required
              />
            </div>

            <div>
              <label>DNI:</label>
              <input
                type="text"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Correo electrónico:</label>
              <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Contraseña:</label>
              <input
                type="password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                required
              />
            </div>

            <div>
              <label>Confirmar contraseña:</label>
              <input
                type="password"
                value={confirmarContrasena}
                onChange={(e) => setConfirmarContrasena(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="boton-registro">Registrarse</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegistroForm;
