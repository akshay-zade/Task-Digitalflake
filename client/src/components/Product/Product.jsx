import React from 'react'
import './Product.css'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const Product = () => {
  return (
   
    <div>
      <Header />
      <section >
       <div className='container'>
        <div className='row'>
        <div className='col-md-2' >
          <Sidebar />
         </div>
         <div className='col-md-10' >
          <h1>Hello Product</h1>
         </div>
        </div>
        
       </div>

      </section>
    </div>
  )
}

export default Product