import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar2 from './components/Navbar2'
import Navbar from './components/Navbar'
import Infotext from './components/Infotext'
import WhoAreWePage from './components/WhoAreWePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar />
      <Infotext />
      <WhoAreWePage />
      <Footer />


    </>
  )
}

export default App
