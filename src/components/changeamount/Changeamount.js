import React from 'react'
import './changeamount.css'
import { useCustom } from '../context/context';

const Changeamount = ({amount, setdecrease, setincrease}) => {

  const { ourcart, dispatch } = useCustom();
  return (
    <>
     <div className='amt_toggle'>
        <div className='amt_inner'>
          <div onClick={setdecrease} className='counter'>
          <i class="fa-solid fa-minus"></i>
          </div>
          <div>{amount}</div>
            <div onClick={setincrease}className='counter'>
             <i class="fa-solid fa-plus"></i>
        </div>
        </div>
     </div>
     
   
    </>
  )
}

export default Changeamount
