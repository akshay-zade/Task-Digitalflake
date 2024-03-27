import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
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
          <div className='img-parent'>
            <img src="./logo.png" alt="logo" className='img-style' />
          </div>
         </div>
        </div>
        
       </div>

      </section>
    </div>
  )
}

export default Home