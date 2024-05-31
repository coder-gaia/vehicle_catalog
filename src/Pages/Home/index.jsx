import React, { useState } from "react"
import Header from "../../components/Header"
import InputSearcher from "../../components/SearchInput"
import { SectionTitle } from "../../components/SideBar/styles"
import styled from "styled-components"
import Sidebar from "../../components/SideBar"
import VehicleList from "../../components/VehicleList"

const Home = () => {

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
    <>
      <Header/>
      <InputSearcher/>
      <SectionTitle>Semi-used Vehicles</SectionTitle>
      <Container>
        <Sidebar onFilterChange={handleFilterChange}/>
        <VehicleList filters={filters}/>
      </Container>
    </>
  )

}

export default Home
