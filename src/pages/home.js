import React from 'react'
import Topproducts from '../components/topproducts/Topproducts'
import Service from '../components/service/Service'
import Newslater from '../components/newsletter/Newsletter'
import Footer from '../components/footer/Footer'
import Banner from '../components/banner/Banner'

const home = () => {
  return (
    <>
      <Banner/>
      <Service/>
      <Topproducts/>
      <Newslater/>
      <Footer/>
    </>
  )
}


export default home;
