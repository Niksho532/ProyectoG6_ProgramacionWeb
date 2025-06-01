import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="category-toggle">
          <i className="fa fa-bars"></i>
          <span>Categorías</span>
        </div>
        <ul className="main-menu">
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
        </ul>
        <div className="offers">
          <Link to="/ofertas">OFERTAS <i className="fa fa-bolt"></i></Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar