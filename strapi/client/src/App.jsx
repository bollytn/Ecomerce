import Products from './components/Products'
import Categories from './components/Categories'
import StoreContect from './Hooks/storeContext'
import './App.css'
import { useEffect, useState } from 'react'
import Card from './components/Card'

function App() {

  const [filter, setFilter] = useState("/products?populate=*")
  const [selectedCategories, setSelectedCategorie] = useState([])

  return (
    <>
    <Card/>
      <StoreContect.Provider value={
        {
          filter, setFilter,
          selectedCategories, setSelectedCategorie,
        }
      }>
        <Categories />
        <Products />
      </StoreContect.Provider>
    </>
  )
}

export default App
