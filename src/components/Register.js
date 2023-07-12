import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';



function Register() {

  const history=useNavigate();
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

 
  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:8000/register",{
              username,email,password
          })
          .then(res=>{
              if(res.data=="exist"){
                  alert("User already exists")
              }
              else if(res.data=="notexist"){
                  history("/login",{state:{id:email}})
              }
          })
          .catch(e=>{
              alert("wrong details")
              console.log(e);
          })

      }
      catch(e){
          console.log(e);

      }

  }
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input className="registerInput" type="text" onChange={(e) => { setUsername(e.target.value) }}  placeholder="Enter your username..." />
        <label>Email</label>
        <input className="registerInput" type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email..." />
        <label>Password</label>
        <input className="registerInput" type="text" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password..." />
        <button className="registerButton" type="submit" onClick={(e)=> submit(e)}>Register</button>
      </form>
        <button className="registerLoginButton"><Link className="link" to="/login">
                Login
              </Link></button>
        </div>
  )
}

export default Register