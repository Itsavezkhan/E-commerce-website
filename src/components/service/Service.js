import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import DiscountIcon from '@mui/icons-material/Discount';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './Service.css';

const Service = () => {
  return (
    <>
    <div className='Service_C'>
     <h2>services</h2>

     <div className='serviceflex'>
      <div className='Sbox'>
        <LocalShippingIcon style={{ fontSize: '4rem', color:'darkmagenta' }}/>
        <div className='sdesc'>
          <h5>free shipping</h5>
          <p>order above $500</p>
        </div>
      </div>

      <div className='Sbox'>
        <CurrencyExchangeIcon style={{ fontSize: '4rem', color:'darkmagenta' }}/>
        <div className='sdesc'>
        <h5>return and refund</h5>
          <p>money back gurranty</p>
        </div>
      </div>

      <div className='Sbox'>
        <DiscountIcon style={{ fontSize: '4rem', color:'darkmagenta'}}/>
        <div className='sdesc'>
        <h5>member discount</h5>
          <p>on every order</p>
        </div>
      </div>

      <div className='Sbox'>
        <SupportAgentIcon style={{ fontSize: '4rem', color:'darkmagenta' }}/>
        <div className='sdesc'>
        <h5>customer support</h5>
          <p>dedicated support team</p>
        </div>
      </div>
     </div>
     </div>
    </>
  )
}

export default Service
