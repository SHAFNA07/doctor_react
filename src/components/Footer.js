import './Footer.css'
import React from 'react'

function Footer() {
  return (
    <section className="footer">
    <div className="box-container bottom">
        <div className="box bottom">
            <h3>quick links</h3>
            <a href="#">home</a>
            <a href="#">about</a>
            <a href="#">services</a>
            
            <a href="#">contact</a>
        </div>

        <div className="box bottom">
            <h3>services offered</h3>
            <a href="#">CT scan</a>
            <a href="#">diagnosis</a>
            <a href="#">ambulance services</a>
            
            <a href="#">pharmacy</a>
            
        </div>

        <div className="box bottom">
            <h3>our socials</h3>
            <a href="#"><i class="fab fa-facebook"></i> facebook</a>
            <a href="#"><i class="fab fa-twitter"></i> twitter</a>
            <a href="#"><i class="fab fa-instagram"></i> instagram</a>
            <a href="#"><i class="fab fa-linkedin"></i> linkedin</a>
        </div>
    </div>

    <div class="bottom">&copy; 2023 all rights reserved | <span>coding with luluuzz</span></div>
</section>


  )
}

export default Footer