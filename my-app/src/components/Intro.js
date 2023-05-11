import React from 'react'
import {motion} from 'framer-motion'

export default function Intro(){


    return(
        <motion.div 
            animate={
                {
                    display:'flex',
                    flexDirection:'column',
                    transition:{
                        duration:0.5,
                        delay:4,
                        ease:'easeOut',
                    }
                }

            }


        className='IntroContainer'>
            <p id='Intro-1'>
                I am Emmanuel Atikese
            </p>
            <p id='Intro-2'>Software Developer</p>

            <motion.a 
            whileHover={{
                color:'black',
                backgroundColor:'white',
                transition:{
                    duration:0.5,
                    ease:'easeInOut',
                }
            }}
            id='ResumeBtn'>Resume</motion.a>

        </motion.div>

    )
}