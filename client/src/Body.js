import React from 'react'
import "./Body.css"
import geoffry from './Geoffry.PNG'

export default function Body() {
  return (
    <>
       
       
        <div className='grid-container'>
            <div className='about-section'>
                <h3 className='about-header'>About Us</h3>
                <p className='about-p'>
                UA ACM is the leading Computer Science club here at The Capstone. 
                We pride ourselves on our ability to foster a passion for the world 
                of computer science as well as give you the tools to thrive in the industry post-graduation!
                </p>
            </div>
           
            <div className='professionalism-section'>
                <h3 className='prof-header'>Professionalism</h3>
                <p className='prof-p'>
                    Bringing in companies from across the country, we put you in touch with 
                    industry members that provide valuable knowledge on how to best succeed 
                    in a professional environment as a CS grad.
                </p>
            </div>
            <div className='coding-section'>

                <h3 className='coding-header'>Coding</h3>
                <p className='coding-p'>
                    Whether it be coding workshops, or hackathon opportunities, 
                    ACM provides several different ways for you to be the 
                    best coder you can be. 
                </p>
            </div>
          
            <div className='social-section'>
                <h3 className='social-header'>Social</h3>
                <p className='social-p'>
                    ACM puts you in touch with other Computer Science and Cybersecurity majors on
                    campus, allowing you to build connections that ensure you don't have to go through 
                    college alone. 
                </p>
            </div>
            
                
        </div>
        <div class="officer-grid">
            <h1 class='officer-header'>Officers</h1>
            <h1 class='officer'>Daniel Tsark - President</h1>
            <img class='treasurer' src={treasurer}/>
            <p>
            Daniel Tsark, a junior from Chandler, Arizona, is pursuing a degree in cybersecurity. 
            Daniel is involved in numerous extra-curricular organizations outside of ACM, 
            with some of the most notable being his involvement in the Student Government Association, 
            United Greek Council, and Theta Tau.
            </p>
            <h1 class='officer'>Angel Roa-Perez - Vice President</h1>
            <img class='treasurer' src={treasurer}/>
            <p>
                I literally know nothing about this guy soooooo? He's VP
            </p>
            <h1 class='officer'>Liam Tucker - Secretary</h1>
            <img class='treasurer' src={treasurer}/>
            <p>
                Liam Tucker is a computer science major from somewhere I assume? Don't know much about this guy either. 
            </p>
            <h1 class='officer'>Casey Derringer - Treasurer</h1>
            <img class='treasurer' src={treasurer}/>
            <p>
                Casey Derringer, a sophomore from Dayton, Ohio, is pursuing a degree in 
                computer science. Along with serving as ACM Treasurer, he fences 
                in the University of Alabama's fencing club, is a part of the UA Jazz Studies
                program, and Theta Tau.
            </p>
        </div>
        <footer>
            <button className='join-btn'>Register Now</button>
        </footer>
    </>
  )
}
