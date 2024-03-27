import React from 'react'

import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const Categoerylist = () => {
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
          <h1>Categoery List</h1>
         </div>
        </div>
        
       </div>

      </section>
    </div>
  )
}

export default Categoerylist