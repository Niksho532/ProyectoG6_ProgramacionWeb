import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import Footer from '../components/Footer'
import { topCategories, bestSellers, newProducts } from '../data/products'

function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <Banner />
        <div className="container">
          <CategoryList categories={topCategories} />
          <ProductList products={bestSellers} title="Lo más vendido" />
  
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home