import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  const admin = true;
  return (
    <div>
        <header>
       
        <Link className="link" to="/" style={{textDecoration: "none",color:"black"}}>
        <a href="#" class="logo">  <i class="fas fa-hospital"></i> Docparadise</a>         
           </Link>

           <Link className="logo" to="/adminlogin"style={{textDecoration: "none",color:"black"}}>
               Login as Admin
              </Link>
              <Link className="logo" to="/login"style={{textDecoration: "none",color:"black"}}>
              Login as User
              </Link>



		<nav class="navbar">
        <Link className="link" to="/" style={{textDecoration: "none",color:"black"}}>
              Home
            </Link>
			<Link className="link" to="/about" style={{textDecoration: "none",color:"black"}}>
              About
            </Link>
			<Link className="link" to="/appointments" style={{textDecoration: "none",color:"black"}}>
              Appointments
            </Link>
			<Link className="link" to="/services" style={{textDecoration: "none",color:"black"}}>
              Services
            </Link>
           
           
		</nav>

		<div id="menubtn" class="fas fa-bars"></div>
	</header>

    </div>
  )
}

export default Header