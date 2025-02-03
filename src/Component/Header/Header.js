import React from "react"
import {Link}from "react-router-dom"
function Header(){
    return(
        <>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="javascript:void(0)">AK STORE</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <path fill-rule="evenodd" d="M8 3.293l-6 6V14a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h2v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4.707l-6-6zM3.707 9L8 4.707 12.293 9H11v5H9v-3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3H3V9h.707z"/>

      <li className="nav-item ">
         
         
          <Link className="nav-link" to="./Home"> HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="./Product">PRODUCTS</Link>
     
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="./Cart"> CART</Link>
        </li>
        <li className="nav-item">
          
          <Link className="nav-link" to="About">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="./Contact">CONTACT</Link>
        </li>
       </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search"/>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
        )
}
export default Header