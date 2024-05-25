import React from 'react'
import { SearchBarContainer } from './styles'

const InputSearcher = ()=>{
  return(
    <>
    <SearchBarContainer >
    <div className="input-container container">
        <input type="text" placeholder="Search for brand, model, year or color" />
        <button>Search</button>
      </div>
    </SearchBarContainer>
    </>
  )
}

export default InputSearcher
