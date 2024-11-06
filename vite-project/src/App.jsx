import './App.css'
import Navbar from './components/navbar/navbar'
import './components/navbar/navbar.css'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import './components/itemListContainer/itemList.css'
import ItemDescriptionContainer from './components/itemListContainer/itemListDescription/itemDescriptionContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './components/itemListContainer/itemListDescription/itemDescription.css'
import Category from './pages/Categorias/categorias'
import Marcas from './pages/Categorias/marcas'
import { Contacto } from './pages/Contacto/Contacto'
import './pages/Categorias/categorias.css'
import { SobreNosotros } from './pages/sobreNosotros/sobreNosotros'
import './pages/Contacto/Contacto.css'
import Cart from './pages/Carrito/Cart'
import { CartProvider } from './Context/cartContext'
import Footer from './components/footer/footer'


function App() {
  
  return (
    <div>
      <CartProvider>

        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:Pc_name" element={<ItemDescriptionContainer />} />
            <Route path="/categorias" element={<Category />} />
            <Route path="/marcas/:marca" element={<Marcas />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Sobre-Nosotros" element={<SobreNosotros />} />
          </Routes>

          <Footer />

        </BrowserRouter>

      </CartProvider>
    </div>
  );
}

export default App;