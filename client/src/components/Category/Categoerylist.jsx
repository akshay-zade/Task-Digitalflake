import React from 'react'
import "./Category.css";
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import {  useNavigate } from 'react-router-dom';

const Categoerylist = () => {
  const navigate= useNavigate()
  const handleButton = () => {
    navigate('/category')
  }
  return (
   
    <div>
      <Header />
      <section >
       <div className='container'>
        <div className='row'>
        <div className='col-md-2' >
          <Sidebar />
         </div>
         <div className='col-md-10 box-style' >
          <div className='header-category' >
          <h1>Category</h1>
          <input type="text" placeholder='Search Category' className='input-category' />
          <button onClick={handleButton} type="button" class="btn btn-primary Btn-style">Add Category</button>
          </div>

          <table class="table  table-hove ">
  <thead>
    <tr className='table-warning'>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">STATUS</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <br/>
  <tbody className='table-secondary' >
    <tr>
      <th scope="row">1</th>
      <td >Mark</td>
      <td>Samsung</td>
      <td>Active</td>
      <td className='button-align' >
      <button type="button" class="btn btn-primary">Update</button>
      <button type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
    <br/>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>RealMe</td>
      <td>Active</td>
      <td className='button-align' >
      <button type="button" class="btn btn-primary">Update</button>
      <button type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>
    <br/>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td>Apple</td>
      <td>Inactive</td>
      <td className='button-align' >
      <button type="button" class="btn btn-primary">Update</button>
      <button type="button" class="btn btn-danger">Delete</button>
      </td>
    </tr>

  </tbody>
</table>
         </div>
        </div>
        
       </div>

      </section>
    </div>
  )
}

export default Categoerylist