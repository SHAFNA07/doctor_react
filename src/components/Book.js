import React, { useEffect, useState } from 'react'
import './Book.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { v4 as uuid } from 'uuid';




function Book() {


const [id,setId]=useState('')
const [name,setname]=useState('')
const [email,setemail]=useState('')
const [phonenumber,setphonenumber]=useState(0)
const [date,setdate]=useState('')

   useEffect(()=>{
    setId(uuid().slice(0,3))
  },[])
   let location = useNavigate()

  const addAppointment= async(e) => {
    e.preventDefault()
	setId(uuid().slice(0,3));

    const body={
       id,
       name,
       email,
       phonenumber,
	   date
     }

 	const result=await axios.post('http://localhost:8000/bookappointment',body)
     location('/')
     alert(result.data.message)

	}
   
   console.log(id);
      console.log(name);
   console.log(email);
   console.log(phonenumber);
  console.log(date);

  return (
    <section class="contact">
		<h1 class="heading"><span>Book</span> Appointment</h1>

		<div class="wrapper">
			<div class="image">
            <img
              className="image"
              src="https://previews.123rf.com/images/artinspiring/artinspiring1902/artinspiring190200625/124944137-chooose-doctor-and-make-appointment-online-book-visit-using-smartphone-patient-search-medical.jpg"
              alt=""
            />
			</div>

			<form action="">
				<h3>book appointment</h3>
				<input onChange={(e)=>setname(e.target.value)} type="text" placeholder="your name" class="box"/>
				<input onChange={(e)=>setemail(e.target.value)}  type="email" placeholder="your email" class="box"/>
				<input onChange={(e)=>setphonenumber(e.target.value)}  type="number" placeholder="your phone number" class="box"/>
				<input onChange={(e)=>setdate(e.target.value)}   type="date" class="box"/>
				<button onClick={(e)=> addAppointment(e)}  type="submit" value="place appointment" class="btn">place appointment</button>
			</form>
		</div>
	</section>

  )
}

export default Book