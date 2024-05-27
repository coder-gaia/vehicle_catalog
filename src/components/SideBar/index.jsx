import React, { useState } from "react"
import { ButtonContainer, Filter, SidebarContainer, Input, ActionButton, FilterButton, FiltersWrapper } from "./styles"

const Sidebar = () => {

  const [showSidebar, setShowSidebar] = useState(true);
  const [openInput, setOpenInput] = useState({
    brand: false,
    model: false,
    year: false,
    color: false
  })
  const [filterValues, setFilterValues] = useState({
    brand: '',
    model: '',
    year: '',
    color: ''
  })

  const toggleFilter = (filter) => {
    setOpenInput((prev) => ({
      ...prev,
      [filter]: !prev[filter]
    }))
  }

  const resetFilters = () => {
    setOpenInput({
      brand: false,
      model: false,
      year: false,
      color: false
    })
  }

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const clearInputs = () => {
    setFilterValues({
      brand: '',
      model: '',
      year: '',
      color: ''
    });
  }

  const handleInputChange = (e) => {
    const { name, value} = e.target;
    setFilterValues((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return(
    <>
      <SidebarContainer>

      <ButtonContainer>
        <ActionButton onClick={toggleSidebar}> {showSidebar ? 'Dismiss Filters' : 'Show Filters'}</ActionButton>
        <ActionButton onClick={() => {
          resetFilters();
          clearInputs();
        }}>Clean Filters</ActionButton>
      </ButtonContainer>

      {showSidebar && (
        <FiltersWrapper>

      <Filter>
        <FilterButton onClick={() => toggleFilter('brand')}>Brand</FilterButton>
        < Input
              type="text"
              placeholder="Search for brand"
              className={openInput.brand ? 'isOpen' : ''}
              name="brand"
              value={filterValues.brand}
              onChange={handleInputChange}/>
      </Filter>

      <Filter>
        <FilterButton onClick={() => toggleFilter('model')}>Model</FilterButton>
        <Input
              type="text"
              placeholder="Search for model"
              className={openInput.model ? 'isOpen' : ''}
              name="model"
              value={filterValues.model}
              onChange={handleInputChange}/>
      </Filter>

      <Filter>
        <FilterButton onClick={() => toggleFilter('year')}>Year</FilterButton>
        <Input
              type="text"
              placeholder="Search for year"
              className={openInput.year ? 'isOpen' : ''}
              name="year"
              value={filterValues.year}
              onChange={handleInputChange}/>
      </Filter>

      <Filter>
        <FilterButton onClick={() => toggleFilter('color')}>Color</FilterButton>
        <Input
              type="text"
              placeholder="Search for color"
              className={openInput.color ? 'isOpen' : ''}
              name="color"
              value={filterValues.color}
              onChange={handleInputChange}/>
      </Filter>
        </FiltersWrapper>
      )}
      </SidebarContainer>
    </>
  )
}

export default Sidebar
