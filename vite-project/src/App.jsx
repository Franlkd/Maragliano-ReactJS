import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/navbar'
import './components/navbar/navbar.css'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import './components/itemListContainer/itemList.css'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer />
    </>
  )
}

export default App
