import React,{useState} from 'react'
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'

function Login(){
  const history=useNavigate();
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  async function submit(e){
    e.preventDefault()
    try{
      await axios.post("http://localhost:8000/",{email,password}
    ).then(res=>{
      if(res.data=="exist"){
          history('/home',{state:{id:email}})
      }
      else if(res.data=="notexist"){
        alert('User have not signed up')

      }
    })
    .catch(e=>{
      alert("wrong details")
      console.log(e)
    })
  }
    catch(e){
      console.log(e)

    }
  }
  return (
    <div className="login">
      <h1 className='heading'>Login</h1>
      <form action="POST">
        <input type="text" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' id="" ></input>
        <input type='password' onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' id="" ></input>
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p className='heading'>OR</p>
      <br />
      <Link className='link' to="/signup">Signup</Link>
    </div>
  )
}

export default Login
