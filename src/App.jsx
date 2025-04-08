

import { useState } from 'react'
import './App.css'
import LoadButton from './components/LoadButton/LoadButton'
import Navbar from './components/Navbar/Navbar'
import ShowCategoriesFood from './components/ShowCategoriesFood/ShowCategoriesFood'

function App() {
   const [selectCategory, setSelectedCategory] = useState("")
   console.log(selectCategory)
  return (
    <>
     
   <Navbar></Navbar>

   <LoadButton
    setSelectedCategory ={setSelectedCategory}
   ></LoadButton>

   <ShowCategoriesFood
      selectCategory={selectCategory}
   ></ShowCategoriesFood>
    
    </>
  )
}

export default App
