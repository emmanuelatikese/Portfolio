import React, {useEffect} from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Service(){

    const AboutVariant = useAnimation()
    const HrVariant = useAnimation()

    const {ref, inView} = useInView()


    useEffect(()=>{
        if(inView){
            AboutVariant.start(
                {
                    backgroundColor:'#130f40',
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
        <motion.div 
            ref={ref}
            style={{backgroundColor: inView ?'#130f40': 'black'}}
            className='Service-container'>
        <motion.p 
            animate={AboutVariant}
            
            className='AboutTitle'>
            Service
         </motion.p>

        <motion.hr 
        animate={HrVariant}
        className='About-hr'/>


        
        </motion.div>
    )
}