import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login() {

  
  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  async function submit(e){
      e.preventDefault();

      try{

          await axios.post("http://localhost:8000/login",{
              email,password
          })
          .then(res=>{
              if(res.data=="exist"){
                  history("/",{state:{id:email}})
              }
              else if(res.data=="notexist"){
                  alert("User have not sign up")
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
    <div className='login'>
        <span className="loginTitle">User Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" onChange={(e) => { setEmail(e.target.value) }} placeholder="Enter your email..." />
        <label>Password</label>
        <input  className="loginInput" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Enter your password..." />
        <button className="loginButton" type="submit" onClick={(e)=> submit(e)}>Login</button>
      </form>
        <button className="loginRegisterButton">
        <Link className="link" to="/register">
                Register
              </Link></button>
        </div>
  )
}

export default Login