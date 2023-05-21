import React  from "react";
import {motion} from "framer-motion"

export default function SkillWrapper(props){
    
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
        <motion.div 

                    animate={props.CardVariant}
                    onMouseEnter={()=>props.setHovered(true)}
                    onMouseLeave={()=>props.setHovered(false)}
                    whileHover={{
                        height:'220px',
                        transition:{
                            duration:1,
                        }
                    }}
                className='skill-wrapper'>
                    <motion.div 
                    animate={props.hovered ? {
                        flexDirection:'column',
                        gap:3,
                        transition:{duration: 2}
                    }:''}
                    
                    className='Icons-Wrapper'
                    >
                    <props.Icon className='icons-dev'/>

                    <motion.p className='skill-name'>{props.Name}</motion.p>
                    </motion.div>
                        
                    <motion.p 
                    variants={skillVariant}
                    animate={props.hovered ? 'end': 'none'}
                    initial='initial'
                    className='Servicecontent'>
                        {props.Details}
                     </motion.p>
                </motion.div>
    )
}