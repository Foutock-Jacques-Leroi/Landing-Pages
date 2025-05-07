









import React from 'react'
import Navbar from './components/Navbar'
import Accueil from './components/Accueil'
import Introduction from './components/Introduction'
import Nos_Services from './components/Nos_Services'
import Nos_Clients from './components/Nos_Clients'
import Avis_Clients from './components/Avis_Clients'
import Staff from './components/Staff'


function App() {
  return (
    <>
      <Navbar />
      <Accueil />
      <Introduction />
      <Nos_Services />
      <Nos_Clients />
      <Avis_Clients />
      <Staff />
    </>
  )
}

export default App