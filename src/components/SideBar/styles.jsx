import styled from 'styled-components'
import { colors } from "../../styles"


export const SidebarContainer = styled.div`
  width: 250px;
  background-color: ${colors.backgroundColor};
  padding: 20px;
  margin-left:76px;
  margin-right:-40px;
`
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const ActionButton = styled.button`
  background-color: ${colors.white};
  color: ${colors.black};
  border: none;
  padding: 10px 10px;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;

    &:hover {
      background-color: #0056b3;
    }
`

export const Filter = styled.div`
  margin-bottom: 35px;

  &.isVisible input {
      display: block;
  }

`

export const FilterButton = styled.button`
  background-color: ${colors.backgroundColor};
  border: none;
  border-bottom: 1px solid ${colors.black};
  padding: 10px 15px;
  margin-bottom: 5px;
  width: 100%;
  text-align: left;
  cursor: pointer;
`;


export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  margin-left:96px;
  margin-bottom:24px;
`

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Tag = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  background-color: ${(props) => (props.selected ? 'blue' : 'gray')};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? 'darkblue' : 'darkgray')};
  }
`
