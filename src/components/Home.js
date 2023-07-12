import React from 'react'
import './Home.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Home() {
  const location=useLocation()

  
  return (
    <section class="home">
      
		<div class="content">         
			<h3>stay healthy, be fit</h3>
<p>DocParadise is  MeetMyDoctor service enables patients to search for top doctors in the locality and book confirmed appointments.</p>			

<Link className="btn" to="/book" style={{textDecoration: "none",color:"black"}}>
              Book Appointment
            </Link>
		</div>
		<img
              className="image"
              src="https://media.istockphoto.com/id/1220315936/vector/doctor-and-patient.jpg?s=612x612&w=0&k=20&c=4fD69h3lCgc3n0-0qhCeDbsH5Dhl8AQ_am9bYmdw1Bs="
              alt=""
            />

            

<button className="logoutButton">
        <Link className="link" to="/login">
                Logout
              </Link></button>
	</section>



  )
}

export default Home