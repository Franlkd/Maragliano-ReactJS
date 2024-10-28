import './App.css'
import Navbar from './components/navbar/navbar'
import './components/navbar/navbar.css'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import './components/itemListContainer/itemList.css'
import ItemDescriptionContainer from './components/itemListContainer/itemListDescription/itemDescriptionContainer'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './components/itemListContainer/itemListDescription/itemDescription.css'
import Category from './components/Categorias/categorias'
import Marcas from './components/Categorias/marcas'
import CartContext from './components/Context/cartContext'
import { Contacto } from './components/Contacto/Contacto'
import './components/Categorias/Categorias.css'
import { SobreNosotros } from './components/sobreNosotros/sobreNosotros'


function App() {

  return (
    <>
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:Pc_name" element={<ItemDescriptionContainer/>} />
        <Route path='/categorias' element={<Category />} />
        <Route path='/marcas/:marca' element={<Marcas />} />
        <Route path='/carrito' element={<CartContext />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='/Sobre-Nosotros' element={<SobreNosotros />} />
      </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
