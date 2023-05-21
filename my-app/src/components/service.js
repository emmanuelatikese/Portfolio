import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {FaDev, } from 'react-icons/fa'
import {MdDeveloperMode} from "react-icons/md"
import {GoDeviceDesktop}  from 'react-icons/go'
import SkillWrapper from './skillWrapper';

export default function Service(){

    const AboutVariant = useAnimation()
    const HrVariant = useAnimation()
    const {ref, inView} = useInView({
        threshold:0.4
    })
    const [hovered, setHovered] = useState(false)
    const [mobileHovered , setMobilehovered] = useState(false)
    const [desktopHovered, setDesktopHovered] = useState(false)
    const CardVariant = useAnimation()

    


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

                CardVariant.start({
                    display:'flex',
                    y:0,
                    transition:{
                        duration:1,
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
          
            CardVariant.start({
                display:'none',
                y:-100
            })
        }


        
        }
    

        , [inView, AboutVariant, HrVariant,CardVariant])


   


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

        <motion.p 
        initial={{
            x: -100,
        }}

        animate={inView ? {
            x:0,
            transition:{
                type:'tween',
                duration:1,
            }
        }: ''}

        className='whatIdo-Wrapper'>What I do?</motion.p>

        <div className='skill-container'>

            <SkillWrapper CardVariant={CardVariant} Icon={FaDev} Name="Web Development" 
            Details="Tools use for the backend are Django and nodejs.Tools use for the frontend are React, Html and Css."
            hovered={hovered} 
            setHovered={setHovered} />
                

            <SkillWrapper CardVariant={CardVariant} Icon={MdDeveloperMode} Name="Mobile Development" 
            Details="Reactnative is the only tool I used for development."
            hovered={mobileHovered} 
            setHovered={setMobilehovered} />


        <SkillWrapper CardVariant={CardVariant} Icon={GoDeviceDesktop} Name="Desktop Development" 
            Details="Electron.js is the only tool I used for development."
            hovered={desktopHovered} 
            setHovered={setDesktopHovered} />

                


        </div>

         <motion.p initial={{
            x: -100,
        }}

        animate={inView ? {
            x:0,
            transition:{
                type:'tween',
                duration:1,
            }
        }: ''}

        className='whatIdo-Wrapper' id='skillsContainer'>My skills?</motion.p>

    <div className='LangContainer'>



    </div>

        </div>
    )
}