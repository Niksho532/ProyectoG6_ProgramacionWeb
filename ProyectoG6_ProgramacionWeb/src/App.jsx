import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import ProductDetail from './pages/ProductDetail';
import './App.css';

import ComprasCarrito from './components/ComprasCarrito';
import LoginForm from './components/LoginForm'; 
import RegistroForm from './components/RegistroForm';
import MiCuenta from './components/MiCuenta';
import CambiarContraseña from './components/CambiarContraseña';
import { CartProvider } from './components/CarContext.jsx'; 
import Checkout from './components/Checkout';
import CheckoutPago from './components/CheckoutPago';
import PagoQR from './components/PagoQR';
import PagoTarjeta from './components/PagoTarjeta';
import OrdenCompletada from './components/OrdenCompletada';



function App() {
  return (
    <CartProvider> {/* 👈 Envolver con el contexto */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<SearchResults />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          
          <Route path="/ComprasCarrito" element={<ComprasCarrito />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registro" element={<RegistroForm />} />
          <Route path="/mi-cuenta" element={<MiCuenta />} />
          <Route path="/restablecer" element={<CambiarContraseña />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkoutpago" element={<CheckoutPago />} />
          <Route path="/pagoqr" element={<PagoQR />} />
          <Route path="/pagotarjeta" element={<PagoTarjeta />} />
          <Route path="/ordencompletada" element={<OrdenCompletada />} />
          <Route path="/ordencompletada" element={<OrdenCompletada />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
