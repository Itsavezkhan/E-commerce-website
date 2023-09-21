import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './FilterComponent.css'

const FilterComponent = ({FilterToggle}) => {

  return (
    <>
     <div className='FilterComponent' onClick={FilterToggle}>
       <MenuIcon className="nav_menu"/>
       <h3>Filter</h3>
     </div>
      
    </>
  )
}

export default FilterComponent
