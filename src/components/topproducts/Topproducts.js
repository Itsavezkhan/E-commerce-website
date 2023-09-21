import React from 'react'
import { useCustom } from '../context/context';
// import Product from '../product';
import Product from '../product/Product';
import { Link } from 'react-router-dom';
import './Topproducts.css';

const Topproducts = () => {
    const {weproducts} = useCustom();

    const topitems = weproducts.slice(0, 8);
    console.log(topitems)
    // <Product {...prod} />
  return (
    <>
       <div className='TP_container'>
         <h2>top products</h2>

         <div className='TP_wrapper'>
          {topitems.map(prod=> {
          
           return <>
          
           <div className='TP_main'>
              <div className='TP_card'>
                <div className='TP_img_container'>
                <img src={prod.image}/>
                </div>
                <div className='TP_info_container'>
                  <h4>{prod.title}</h4>
                  <Link to={`/singlecart/${prod.id}`}><button to={`https://fakestoreapi.com/products/${prod.id}`} >see details</button></Link>
                </div>
              </div>
            </div>

         
           </>
           
           })}
        </div>
      </div>
    </>
  )
}

export default Topproducts
