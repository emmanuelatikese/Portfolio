import React from 'react'
import {motion, useAnimation} from 'framer-motion';


export default function About(){

    const control = useAnimation()


    return(
        <div  className="AboutContainer">

        <motion.p 
         className='AboutTitle'>
            About
         </motion.p>

        <hr className='About-hr'/>

        <div className="AboutWrapper">

            <h2>Hi</h2>

            <div className='circle'>
        <div className='EyeContainer'>

            <div className='leftEye'></div>
            <div className='rightEye'></div>
        </div>

        <div className='smiley'></div>

            </div>
        
        <p className="AboutContent">
        I'm a software developer with two years of experience in creating innovative and user-friendly solutions for various domains. 
        I have a passion for learning new technologies and applying them to solve real-world problems. 
        I enjoy working in a team as well as independently, and I always strive to deliver high-quality code that meets the client's requirements and expectations.
        I'm always eager to take on new challenges and expand my skillset.
        If you are looking for a software developer who can bring value to your project, please feel free to contact me.
        </p>

        <p className='verge'>Vergee</p>

        </div>
            

        
        
        </div>
    )
}