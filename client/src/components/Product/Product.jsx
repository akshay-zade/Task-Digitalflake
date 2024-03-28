import React from 'react'
import './Product.css'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/productlist");
  };
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
          
          <div>
                <form onSubmit={handleSubmit} >
                  <fieldset>
                    <legend className="font-weight-bold">Add Product</legend>
                    <div class="mb-3">
                      <label class="form-label">Product</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Category"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Product Name</label>
                      <input
                        type="text"
                        class="form-control"    
                        placeholder="Product Name"
                        required
                      />
                      
                      <div class="mb-3">
                      <label class="form-label"> Pack Size</label>
                      <input
                        type="number"
                        class="form-control"
                        
                        placeholder="Pack Size"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">MRP</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="MRP"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Product Image</label>
                      <input
                        type="file"
                        class="form-control"
                        placeholder="Product Image"
                        required
                      />
                    </div>
                    </div>
                    <div class="mb-3">
                      <label class="form-label">Status</label>
                      <select class="form-select">
                        <option>Active</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                     
                      class="btn btn-primary"
                    >
                      Submit
                    </button>
                  </fieldset>
                </form>
                
              </div>
         </div>
        </div>
        
       </div>

      </section>
    </div>
  )
}

export default Product