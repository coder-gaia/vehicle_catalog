import React, { useState } from "react";
import { ButtonContainer, Filter, SidebarContainer, ActionButton, FilterButton, FiltersWrapper, Tag } from "./styles";
import vehiclesData from '../../utils/vehicleData';
import PropTypes from 'prop-types';

const Sidebar = ({ onFilterChange }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedTags, setSelectedTags] = useState({
    brand: [],
    model: [],
    year: [],
    color: []
  });

  const [expandedFilters, setExpandedFilters] = useState({
    brand: false,
    model: false,
    year: false,
    color: false
  });

  const toggleTag = (category, value) => {
    const isSelected = selectedTags[category].includes(value);
    const updatedTags = isSelected ? selectedTags[category].filter((tag) => tag !== value) : [...selectedTags[category], value];
    const newSelectedTags = { ...selectedTags, [category]: updatedTags };
    setSelectedTags(newSelectedTags);
    return newSelectedTags;
  };

  const resetFilters = () => {
    const initialTags = {
      brand: [],
      model: [],
      year: [],
      color: []
    };
    setSelectedTags(initialTags);
    onFilterChange(initialTags);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const uniqueTags = (category) => {
    return [...new Set(vehiclesData.map(vehicle => vehicle[category]))];
  };

  const handleTagClick = (category, value) => {
    const newTags = toggleTag(category, value);
    onFilterChange(newTags);
  };

  const toggleFilterSection = (category) => {
    setExpandedFilters(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <SidebarContainer>
      <ButtonContainer>
        <ActionButton onClick={toggleSidebar}>{showSidebar ? 'Dismiss Filters' : 'Show Filters'}</ActionButton>
        <ActionButton onClick={resetFilters}>Clean Filters</ActionButton>
      </ButtonContainer>

      {showSidebar && (
        <FiltersWrapper>
          {['brand', 'model', 'year', 'color'].map((category) => (
            <Filter key={category}>
              <FilterButton onClick={() => toggleFilterSection(category)}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </FilterButton>
              {expandedFilters[category] && (
                <div>
                  {uniqueTags(category).map((tag) => (
                    <Tag
                      key={tag}
                      onClick={() => handleTagClick(category, tag)}
                      selected={selectedTags[category].includes(tag)}
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
              )}
            </Filter>
          ))}
        </FiltersWrapper>
      )}
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Sidebar;
