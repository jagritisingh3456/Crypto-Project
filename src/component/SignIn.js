import React, { useState } from 'react'

const SignIn = () => {
   const[emailErr,setEmailErr]=useState("")
   const[passErr,setPasswordErr]=useState("")

  function loginHandler(e){
    alert("enter plz")
    e.preventDefault()
  }

  function emailHandler(e){
    let item=e.target.value;
    if(item.length<3){
      setEmailErr(true)
    }
    else{
      setEmailErr(false)
    }

     console.warn(e.target.value.length)
  }


function passwordHandler(e){
  let item=e.target.value;
  if(item.length<3){
    setPasswordErr(true)
  }
  else{
    setPasswordErr(false)
  }
  console.warn(e.target.value)
}

  return (
    <>
      <div className='heading'>
        <div className='pee'>
           <a href='/'>Forex-Rupee</a>
        </div>
        <div> 
            <form action="#" onSubmit={loginHandler}>
            <h1>Sign in to your account</h1>
            <label for="for">Email</label>
            <input type="email" required="" onChange={emailHandler}/>{emailErr? <span>Not Valid</span>: ""}
            <label for="for">Password</label>
            <input type="password" required="" onChange={passwordHandler}/>{passErr? <span>Not Valid</span>: ""}
            <button type="submit" class="" onChange>Continue</button>
            <span>Forget Password</span>
            </form>   
        </div>
      </div>
    </>
  )
}

export default SignIn