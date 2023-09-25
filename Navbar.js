import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <div>
        <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
  <h1>Navbar</h1>
     <Link to='/Api'>Api</Link>
     <Link to='/Apifetch'>Apifetch</Link>

     <Link to='/Todo'>Todo</Link>
     <Link to='/Form'>Form</Link>
  </div>
</nav>

     
    </div>
  )
}

export default Navbar
