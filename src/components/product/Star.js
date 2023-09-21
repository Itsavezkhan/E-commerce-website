import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const Star = ({rating:rate}) => {
    
    const RatingStar = Array.from({length:5}, (elem, index) => {
        let number = index + 0.5;

        return <span key={index}>
            {rate.rate >= index + 1 ? 
            (<StarIcon style={{color:'purple'}}/> ):rate.rate >= number ?
            (<StarHalfIcon style={{color:'purple'}}/>) :
            (<StarOutlineIcon style={{color:'purple'}}/>)
            }
        </span>

    })


  return (
    <>
    <div style={{display: 'flex', marginTop: '14px', marginBottom:'5px'}}>
     {RatingStar}
    </div>
    </>
  )
}

export default Star
