import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { useCart } from '../components/CarContext.jsx'; // Importar el hook del carrito

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart(); // Usar la función para agregar al carrito

  if (!product) return <div>Producto no encontrado</div>;

  const similarProducts = products
    .filter(p => p.categoria === product.categoria && p.id !== product.id)
    .slice(0, 5);

  return (
    <>
      <Header />
      <NavBar />
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Supermercado</Link> &gt; 
          <Link to={`/buscar?categoria=${product.categoria.toLowerCase().replace(/ /g, '-')}`}>
            {product.categoria}
          </Link>
        </div>
        
        <div className="product-detail-card">
          <div className="product-detail-left">
            <img src={product.imagen} alt={product.nombre} className="product-detail-image" />
          </div>
          
          <div className="product-detail-right">
            <h1 className="product-detail-title">{product.nombre}</h1>
            <div className="product-detail-divider"></div>
            
            <div className="product-detail-specs">
              <p className="product-presentation">Presentación {product.presentacion}</p>
              <p className="product-description">{product.descripcion}</p>
            </div>
            
            <div className="product-detail-price">
              <span className="price-label">s/ {product.precio} {product.unidad}</span>
              <button className="add-cart-btn" onClick={() => addToCart(product)}>
                <i className="fa fa-shopping-cart"></i> AGREGAR
              </button>
            </div>
          </div>
        </div>

        {similarProducts.length > 0 && (
          <div className="similar-products-section">
            <h3 className="section-title">Productos similares</h3>
            <div className="similar-products-carousel">
              <button className="carousel-control prev">
                <i className="fa fa-chevron-left"></i>
              </button>
              <div className="similar-products-list">
                {similarProducts.map(p => (
                  <div key={p.id} className="similar-product-item">
                    <Link to={`/producto/${p.id}`} className="product-image">
                      <img src={p.imagen} alt={p.nombre} />
                    </Link>
                    <div className="similar-product-info">
                      <Link to={`/producto/${p.id}`}>
                        <h4>{p.nombre}</h4>
                      </Link>
                      <p className="product-category">{p.categoria}</p>
                      <p className="similar-product-price">S/ {p.precio} {p.unidad}</p>
                      <button className="add-to-cart-btn" onClick={() => addToCart(p)}>
                        AGREGAR
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control next">
                <i className="fa fa-chevron-right"></i>
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
