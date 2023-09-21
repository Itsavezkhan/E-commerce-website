import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import './Newsletter.css'

const Newslater = () => {
  return (
    <>
     <div className='NL_container'>
        <div className='NS_main'>
            <h1>Newsletter</h1>
            <p>get timely updates from your favourite products</p>
            <div className='NL_sub'>
              <input placeholder='Your email' />
              <button><SendIcon/></button>
            </div>
        </div>
     </div>
      
    </>
  )
}

export default Newslater
