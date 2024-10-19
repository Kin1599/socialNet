import React from 'react'
import cl from './SearchInput.module.scss'

function SearchInput({placeholder, width, height}) {
  return (
    <div>
      <input 
        className={cl.searchInput} 
        type="search" 
        placeholder={placeholder} 
        style={{width: width, height: height}}
      />
    </div>
  )
}

export default SearchInput