import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import videoBg from './videoBg.mp4';
import SignUp from './SignUp';

const ForexRupee = () => {
  return (
    <div className='main'>
    <video autoPlay loop muted>
      <source src={videoBg} type="video/mp4" />
    </video>
    
    <div className='content'>
    <h1>Virtual Money Made Easy</h1>
    <p>Sign up for a new account today and receive <span>$150</span>  bonus.</p>
    </div> 

    {/* <div>
       <Router> 
            <Link to="/getStarted">Get Started</Link>
         <Routes>
           <Route path="/getStarted" element={<SignUp/>}>Get Started</Route>
         </Routes>
       </Router>
    </div>  */}

    </div>
  )
}

export default ForexRupee























