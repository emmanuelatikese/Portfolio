import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {FaDev, } from 'react-icons/fa'
import {MdDeveloperMode} from "react-icons/md"
import {GoDeviceDesktop}  from 'react-icons/go'

export default function Service(){

    const AboutVariant = useAnimation()
    const HrVariant = useAnimation()
    const {ref, inView} = useInView()
    const [hovered, setHovered] = useState(false)
    const [mobileHovered , setMobilehovered] = useState(false)
    const [desktopHovered, setDesktopHovered] = useState(false)

    useEffect(()=>{
        if(inView){
            AboutVariant.start(
                {
                    backgroundColor:'black',
                    display:'flex',
                    justifyContent:'center',
                    transition:{
                        duration:0.5,
                    },
                    y:0,
                    
                }
                )
                console.log('the inView is ', inView)

                HrVariant.start({
                    width:'120px',
                    transition:{
                        duration:0.5
                    }
                })

                

        }
        
        if(!inView){

            AboutVariant.start({
                y:10,
                display:'none'
            })
            HrVariant.start({
                width:'1px',
               
            })
          

        }


        
        }
    
        
    ,[inView])


    const skillVariant= {
        initial:{
            y:-10,
            display:'none',
        },
        end:{
            y:0,
            display:'flex',
            transition:{
                duration:0.7,
                delay: 1,
            },
        }
    }


    return (
        <div 
            ref={ref}
        className='Service-container'>

        <motion.p 
            
            animate={AboutVariant}
            className='AboutTitle'>
            Service
         </motion.p>

        <motion.hr 
        animate={HrVariant}
        className='About-hr'/>

        <p className='whatIdo-Wrapper'>What I do?</p>

        <div className='skill-container'>
 
                <motion.div 
                
                    onMouseEnter={()=>setHovered(true)}
                    onMouseLeave={()=>setHovered(false)}
                    whileHover={{
                        height:'218px',
                        transition:{
                            duration:1,
                        }
                    }}
                className='skill-wrapper'>
                    <motion.div 
                    animate={hovered ? {
                        flexDirection:'column',
                        gap:3,
                        transition:{duration: 2}
                    }:''}
                    
                    className='Icons-Wrapper'
                    >
                    <FaDev className='icons-dev'/>

                    <motion.p className='skill-name'>Web Development</motion.p>
                    </motion.div>
                        
                    <motion.p 
                    variants={skillVariant}
                    animate={hovered ? 'end': 'none'}
                    initial='initial'
                    className='Servicecontent'>
                    Tools use for the backend are Django and nodejs.
                    Tools use for the frontend are React, Html and Css.
                     </motion.p>
                </motion.div>

                <motion.div 
                
                    onMouseEnter={()=>setMobilehovered(true)}
                    onMouseLeave={()=>setMobilehovered(false)}
                    whileHover={{
                        height:'200px',
                        transition:{
                            duration:1,
                        }
                    }}
                className='skill-wrapper'>
                        <motion.div 
                    animate={mobileHovered ? {
                        flexDirection:'column',
                        gap:3,
                        transition:{duration: 2}
                    }:''}
                    
                    className='Icons-Wrapper'
                    >
                    <MdDeveloperMode className='icons-dev'/>

                    <motion.p className='skill-name'>Mobile Development</motion.p>
                    </motion.div>
                    <motion.p 
                    variants={skillVariant}
                    animate={mobileHovered ? 'end': 'none'}
                    initial='initial'
                    className='Servicecontent'>
                    Reactnative is the only tool I used for development.
                     </motion.p>
                </motion.div>

                     <motion.div 
                
                    onMouseEnter={()=>setDesktopHovered(true)}
                    onMouseLeave={()=>setDesktopHovered(false)}
                    whileHover={{
                        height:'200px',
                        transition:{
                            duration:1,
                        }
                    }}
                className='skill-wrapper'>
                        <GoDeviceDesktop className='icons-dev'/>

                    <p className='skill-name'>Mobile Development</p>
                    <motion.p 
                    variants={skillVariant}
                    animate={desktopHovered ? 'end': 'none'}
                    initial='initial'
                    className='Servicecontent'>
                    Electron.js is the only tool I used for development.
                     </motion.p>
                </motion.div>

               
                

        </div>
        </div>
    )
}