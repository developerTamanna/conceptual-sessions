

import { useState } from 'react'
import './App.css'
import LoadButton from './components/LoadButton/LoadButton'
import Navbar from './components/Navbar/Navbar'
import ShowCategoriesFood from './components/ShowCategoriesFood/ShowCategoriesFood'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

function App() {
   const [selectCategory, setSelectedCategory] = useState("")
   console.log(selectCategory)
  return (
    <>
     
   <Navbar></Navbar>

   <LoadButton
    setSelectedCategory ={setSelectedCategory}
   ></LoadButton>
     <Hero></Hero>
   <ShowCategoriesFood
      selectCategory={selectCategory}
   ></ShowCategoriesFood>

   <Footer></Footer>
    
    </>
  )
}

export default App
