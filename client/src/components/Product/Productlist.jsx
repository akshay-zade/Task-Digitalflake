import React from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import {  useNavigate } from 'react-router-dom';

const Productlist = () => {
    const navigate = useNavigate()
    const handleButton = () => {
        navigate('/product')
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
        <h1>Product</h1>
        <input type="text" placeholder='Search Product' className='input-category' />
        <button onClick={handleButton} type="button" class="btn btn-primary Btn-style">Add Product</button>
        </div>

        <table class="table  table-hove ">
<thead>
  <tr className='table-warning'>
    <th scope="col">ID</th>
    <th scope="col">NAME</th>
    <th scope="col">PACK SIZE</th>
    <th scope="col">CATEGORY</th>
    <th scope="col">MRP</th>
    
    <th scope="col">STATUS</th>
    <th scope="col"></th>
  </tr>
</thead>
<br/>
<tbody className='table-secondary' >
  <tr>
    <th scope="row">1</th>
    <td >Apple</td>
    <td>5</td>
    <td>Fruit</td>
    <td>100kg</td>
  
    <td>Active</td>
    <td className='button-align' >
      <button type="button" class="btn btn-primary">Update</button>
      <button type="button" class="btn btn-danger">Delete</button>
      </td>
  </tr>
  <br/>
  <tr>
    <th scope="row">2</th>
    <td >Apple</td>
    <td>5</td>
    <td>Fruit</td>
    <td>100kg</td>
  
    <td>Active</td>
    <td className='button-align' >
      <button type="button" class="btn btn-primary">Update</button>
      <button type="button" class="btn btn-danger">Delete</button>
      </td>
  </tr>
  <br/>
  <tr>
    <th scope="row">3</th>
    <td >Apple</td>
    <td>5</td>
    <td>Fruit</td>
    <td>100kg</td>
    
    <td>Active</td>
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

export default Productlist