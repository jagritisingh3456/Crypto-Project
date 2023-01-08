import React from 'react';


const About = () => {
  return (
    <>
    <div id="Services">
    <h1>Our Services</h1>
      <div className='Boxes'>
       <div className='box'>
         <img src="https://forex-crypto-webpage.netlify.app/static/media/svg-6.0d5eafcfa1b4a30e0bbdaeb28bff572e.svg"></img> 
         <h2>Reduce expenses</h2>
         <p>We help reduce your fees and increase your overall revenue.</p>
       </div>

       <div className='box'>
       <img src='https://forex-crypto-webpage.netlify.app/static/media/svg-5.944fb4e3d84a842f400fd5ec29cc8a7b.svg'></img>
       <h2>Virtual Offices</h2>
       <p>You can access our platform online anywhere in the world.</p>
       </div>

       <div className='box'>
        <img src='https://forex-crypto-webpage.netlify.app/static/media/svg-4.62f31b05d9ccc0edf99853d29fc03f35.svg'></img>
        <h2>Premium Benefits</h2>
        <p>Unlock our special membership card that returns 10% cash back.</p>
       </div>  
       </div> 
    </div>
    </>
  )
}

export default About
