import React from 'react'

const SignIn = () => {
  return (
    <>
      <div className='heading'>
        <div className='pee'>
           <a href='/'>Forex-Rupee</a>
        </div>
        <div> 
            <form action="#" class="">
            <h1>Sign in to your account</h1>
            <label for="for">Email</label>
            <input type="email" required="" />
            <label for="for">Password</label>
            <input type="password" required="" />
            <button type="submit" class="">Continue</button>
            <span>Forget Password</span>
            </form>   
        </div>
      </div>
    </>
  )
}

export default SignIn