import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Edit() {

	
	//const [id,setId]=useState('')
	const [name,setname]=useState('')
	 const [email,setemail]=useState('')
	 const [phonenumber,setphonenumber]=useState(0)
	 const [date,setdate]=useState('')
   

	const [appointment,setAppointment]=useState([])

	const params=useParams()
   // console.log(params.id);
  
	  //api
	  const fetchapp=async()=>{
		  const result= await axios.get('http://localhost:8000/eachappointment/'+params.id)
		 setname(result.data.message.name);
		 setemail(result.data.message.email);
		 setphonenumber(result.data.message.phonenumber);
		 setdate(result.data.message.date);
		 }

		 
  const editAppointment= async(e) => {
	e.preventDefault()
    
    const body={
       id:params.id,
       name,
       email,
       phonenumber,
	   date
     }
	 
		const result= await axios.post('http://localhost:8000/editappointment/',body)
		location('/appointments')
		alert(result.data.message)
	}
		 
		
		 useEffect(()=>{
		  fetchapp()
		 },[])
		
		 let location = useNavigate()
		
  return (
    <section class="contact">
		<h1 class="heading"><span>Edit</span> Appointment</h1>

		<div class="wrapper">
			<div class="image">
            <img
              className="image"
        src="https://static.vecteezy.com/system/resources/previews/002/127/134/original/medical-and-healthcare-concept-illustration-schedule-medical-check-up-flat-design-with-doctor-can-use-for-the-homepage-mobile-apps-character-cartoon-illustration-flat-style-free-vector.jpg"     
         alt=""
            />
			</div>

			<form action="">
				<h3>Edit appointment</h3>
				<input  onChange={(e)=>setname(e.target.value)} value={name} type="text" placeholder="your name" class="box"/>
				<input onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder="your email" class="box"/>
				<input onChange={(e)=>setphonenumber(e.target.value)} value={phonenumber} type="number" placeholder="your phone number" class="box"/>
				<input  onChange={(e)=>setdate(e.target.value)} value={date} type="date" class="box"/>
				<button onClick={(e)=> editAppointment(e)} type="submit" value="edit appointment" class="btn">Edit appointment</button>
			</form>
		</div>
	</section>

  )
}

export default Edit