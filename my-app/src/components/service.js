import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {FaDev} from 'react-icons/fa'

export default function Service(){

    const AboutVariant = useAnimation()
    const HrVariant = useAnimation()
    const {ref, inView} = useInView()


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

        <div className='skill-container'>
 
                <div className='skill-wrapper'>
                        <FaDev className='icons-dev'/>

                        <p className='skill-name'>Web Development</p>
                    <motion.p className='Servicecontent'>
                    Tools use for the backend are Django and nodejs.
                    Tools use for the frontend are React, Html and Css.
                     </motion.p>
                </div>
                

        </div>
        </div>
    )
}