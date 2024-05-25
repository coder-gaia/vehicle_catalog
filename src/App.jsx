import React from 'react'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import InputSearcher from './components/SearchInput'
import Sidebar from './components/SideBar'


function App() {

  return(
    <>
    <GlobalStyle/>
    <Header/>
    <InputSearcher />
    <Sidebar/>
    </>
  )

}

export default App
