import React from 'react'
import './About.css'

function About() {
  return (
    <section class="about">
    <h1 class="heading">about <span>us</span></h1>

    <div class="wrapper">
        <div class="image">
        <img
              className="image"
src="https://static.vecteezy.com/system/resources/previews/000/608/082/original/vector-set-of-doctor-cartoon-characters-medical-staff-team-concept.jpg"           
   alt=""
            />
        </div>
        <div class="content">
            <h3>why you should choose us</h3>
            <p>Enable healthcare businesses to provide superior healthcare delivery and patient care with technology – globally</p>
            <p>Provide a scalable, secure platform to clinics and hospitals that provide great value at reasonable cost
            Our value system defines us, and acts as an anchor when we are faced with challenges. We have a culture of customer focus, continuous improvement and customer service.
            </p>
            <a href="#" class="btn">learn more</a>
        </div>
    </div>
</section>
  )
}

export default About