import React from 'react'
import '../components/Error.css'
import { Link } from 'react-router-dom';

const Error = ({component}) => {
  return (
    <div className='Error'>
       <h2>Your {component} is empty !!</h2>
       <Link to='/products' className='linkss'><button>Shop Now</button></Link>
    </div>
  )
}

export default Error
