import React, { useEffect, useState } from 'react'
import './Appointment.css'
import { Link } from 'react-router-dom';
import axios from 'axios';



function Appointments() {


    const [appointments,setAppointments]=useState([])
    
//api call

const fetchAppointments=async()=>{
    const result=await axios.get('http://localhost:8000/allappointments')
    
    setAppointments(result.data.message);
}

//api delete

const deleteAppointment=async (id)=>{
    const result=await axios.delete('http://localhost:8000/deleteappointment/'+id)
    alert(result.data.message);
    fetchAppointments()
}

console.log(appointments);

useEffect(()=>{
    fetchAppointments()
},[])



  return (
    <section class="appointments">
		<h1 class="heading"><span>list of</span> Appointments</h1>

        <div class="wrapper">

<table className='table1'>
	<thead>
	<tr>
		<th>#</th>
		<th>id</th>
		<th>Name</th>
        <th>email</th>
        <th>phone</th>
        <th>date</th>
        <th>Actions </th>
	</tr>
	</thead>
	<tbody className='fs-4'>

        {
            appointments?.map((appointment,index)=>(

        
            <tr>
                <td>{index}</td>
                <td>{appointment.id}</td>
                <td>{appointment.name}</td>
                <td>{appointment.email}</td>
                <td>{appointment.phonenumber}</td>
                <td>{appointment.date}</td>
        
                <td>
               
        <Link className="btn" to={`/edit/${appointment.id}` }style={{textDecoration: "none",color:"black"}}>
        <button  href="#" class="btn1 ">  <i class="fa-solid fa-user-pen"></i> Edit </button>
                    </Link> 
        
                    
        <Link className="btn" to={`/view/${appointment.id}` } style={{textDecoration: "none",color:"black"}}>
        <button  href="#" class="btn2 ">  <i class="fa-solid fa-user-pen"></i> View </button>
                    </Link> 
                    
                        
        <Link className="btn" to="/" style={{textDecoration: "none",color:"black"}}>
        <button onClick={()=>deleteAppointment(appointment.id)}  href="#" class="btn3 ">  <i class="fa-solid fa-user-pen"></i> Delete </button>
                    </Link> 
                </td>
            </tr>
                
            ))
            }

	</tbody>
</table>

<button className="loginbookButton">
        <Link className="link" to="/Book">
                Book Appointment
              </Link></button>

    </div>

    </section>
  );
}


export default Appointments