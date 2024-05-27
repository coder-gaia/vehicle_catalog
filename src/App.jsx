import React from 'react'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import InputSearcher from './components/SearchInput'
import Sidebar from './components/SideBar'
import VehicleList from './components/VehicleList'
import styled from 'styled-components'
import { SectionTitle } from './components/SideBar/styles'
import Footer from './components/Footer'


function App() {

  const Container = styled.div`
  display: flex;
`

  return(
    <>
    <GlobalStyle/>
    <Header/>
    <InputSearcher/>
    <SectionTitle>Semi-used Vehicles</SectionTitle>
    <Container>
      <Sidebar/>
      <VehicleList/>
    </Container>
    <Footer/>
    </>
  )

}

export default App
