import React from 'react'
import { GlobalStyle } from './styles'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import AuthProvider from './AuthContext'


function App() {


  return(
    <BrowserRouter>
      <GlobalStyle/>
      <AuthProvider>
        <Rotas />
        <Footer/>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
