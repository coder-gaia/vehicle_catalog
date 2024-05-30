import React, { useState } from 'react'
import { GlobalStyle } from './styles'
import Header from './components/Header'
import InputSearcher from './components/SearchInput'
import Sidebar from './components/SideBar'
import VehicleList from './components/VehicleList'
import styled from 'styled-components'
import { SectionTitle } from './components/SideBar/styles'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from '../src/components/SignUp'
import Login from '../src/components/Login'


function App() {

  const [filters, setFilters] = useState({
    brand: [],
    model: [],
    year: [],
    color: []
  })

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  }

  const Container = styled.div`
  display: flex;
`

  return(
    <Router>
    <GlobalStyle/>
    <Header/>
    <InputSearcher/>
    <SectionTitle>Semi-used Vehicles</SectionTitle>
    <Container>
      <Sidebar onFilterChange={handleFilterChange} />
      <Switch>
      <Route exact path="/" render={(props) => <VehicleList {...props} filters={filters} />} />
      <Route exact path='/signup' Component={SignUp} />
      <Route exact path='/login' Component={Login} />
      </Switch>
    </Container>
    <Footer/>
    </Router>
  )
}

export default App
