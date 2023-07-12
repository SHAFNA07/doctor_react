import React, { useState } from 'react'
import './Adminlogin.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



function Adminlogin() {
    const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{

        await axios.post("http://localhost:8000/adminlogin",{
            email,password
        })
        .then(res=>{
            if(res.data=="exist"){
                history("/appointments")
            }
            else if(res.data=="notexist"){
                alert("invalid data")
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
   
    <div className='adminlogin'>
    <span className="loginTitle">Admin Login</span>
  <form className="loginForm">
    <label>Email</label>
    <input className="loginInput" type="text" onChange={(e) => { setEmail(e.target.value) }}  placeholder="Enter your email..." />
    <label>Password</label>
    <input className="loginInput" type="password"  onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password..." />
    <button className="loginButton"  onClick={(e)=> submit(e)}>Login</button>
  </form>
    
    </div>
  )
}

export default Adminlogin