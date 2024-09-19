import Products from './components/Products'
import Categories from './components/Categories'
import StoreContect from './Hooks/storeContext'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [filter,setFilter] = useState("/products?populate=*")

  return (
    <>
      <StoreContect.Provider value={{filter,setFilter}}>
        <Categories />
        <Products />
      </StoreContect.Provider>
    </>
  )
}

export default App
