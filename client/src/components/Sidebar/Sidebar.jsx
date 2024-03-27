import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div>
    

      <nav className="navbar navbar-default pb-0 py-0">
        
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active">
              <button className="navbar-toggle collapse in" data-toggle="collapse" id="menu-toggle-2"> <span className="glyphicon glyphicon-th-large" aria-hidden="true" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
          <div id="wrapper"> 
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav nav-pills nav-stacked" id="menu">
            <li className="active">
              <a href="/home"><span className="fa-stack fa-lg "><i className="fa fa-dashboard fa-stack-1x " /></span> Home</a>
            </li>
            <li>
              <a href="/category"><span className="fa-stack fa-lg "><i className="fa fa-flag fa-stack-1x " /></span>Category</a>
            </li>
            <li>
              <a href="/product"><span className="fa-stack fa-lg "><i className="fa fa-cloud-download fa-stack-1x " /></span>Product</a>
            </li>

          </ul>
        </div>
       <div>
             
       </div>
      </div>
  
  </div>
  )
}

export default Sidebar