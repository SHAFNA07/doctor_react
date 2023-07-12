import React from 'react'
import './Services.css'

function Services() {
  return (
   
	<section class="services">
    <h1 class="heading">our <span>services</span></h1>

    <div class="box-container">
        <div class="box">
            <i class="fas fa-ambulance"></i>
            <h3>24/7 ambulance</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nulla!</p>
            <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
            <i class="fas fa-notes-medical"></i>
            <h3>free ckeckups every tuesday</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nulla!</p>
            <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
            <i class="fas fa-user-md"></i>
            <h3>expert consultants</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nulla!</p>
            <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
            <i class="fas fa-procedures"></i>
            <h3>good facility</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nulla!</p>
            <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
            <i class="fas fa-pills"></i>
            <h3>pharmacy</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nulla!</p>
            <a href="#" class="btn">read more</a>
        </div>

        <div class="box">
            <i class="fas fa-heartbeat"></i>
            <h3>best care</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nulla!</p>
            <a href="#" class="btn">read more</a>
        </div>
    </div>
</section>
  )
}

export default Services