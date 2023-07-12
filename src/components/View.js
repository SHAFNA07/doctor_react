import React, { useEffect, useState } from 'react'
import './View.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'



function View() {

    const [appointment,setAppointment]=useState({})

  const params=useParams()
 // console.log(params.id);

    //api
    const fetchapp=async()=>{
        const result= await axios.get('http://localhost:8000/eachappointment/'+params.id)
        setAppointment(result.data.message)
       }
       console.log(appointment);
      
       useEffect(()=>{
        fetchapp()
       },[])
      

  return (
    <section class="student-profile py-4">
        <h1 class="heading"><span>View</span> Appointment</h1>
  <div class="wrapper">
    <div class="row">
      <div class="image">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent text-center">
            <img class="image text-center" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1b0lzQhHvOC3mYVWKxUlR1w7t3xrHvhtOg&usqp=CAU'
           alt=""/>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card shadow-sm">

          <div class="card-body pt-0">
            <table class="table table-bordered">
              <tr>
                <th width="30%">id</th>
                <td width="2%">:</td>
                <td>{appointment.id}</td>
              </tr>
              <tr>
                <th width="30%">Name	</th>
                <td width="2%">:</td>
                <td>{appointment.name}</td>
              </tr>
              <tr>
                <th width="30%">Email</th>
                <td width="2%">:</td>
                <td>{appointment.email} </td>
              </tr>
              <tr>
                <th width="30%">Phone number</th>
                <td width="2%">:</td>
                <td>{appointment.phonenumber}</td>
              </tr>
              <tr>
                <th width="30%">date</th>
                <td width="2%">:</td>
                <td>{appointment.date}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default View