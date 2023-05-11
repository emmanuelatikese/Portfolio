import React  from "react";
import {motion, useAnimation} from "framer-motion"

export default function SpanList(props){
    const TitleVariant = {
        initial:{
            y:-100
        },
        end:{
            y:0,
            transition:{
                type:"spring",
                duration: 4,
                stifness:0,
                delay:3,
                
            }
        }
    }
    const control = useAnimation()

    

    return(
        <div>
            <motion.span
                variants={TitleVariant}
                animate="end"
                initial="initial"

                onMouseEnter={()=>{
                  control.start({
                    width:"auto",
                    transition:{
                        type:"tween",
                        duration:0.5,
                        stifness:1000,
                        
                        
                    }
                })  
                }}

                onMouseLeave={()=>{
                    control.start({
                        marginTop:0,
                        border:'3px solid lightblue',
                        borderRadius: '3px',
                        width:'1px'
                    })
                    
                }}

                onClick={()=>{
                    control.start({
                        marginTop:0,
                        border:'3px solid lightblue',
                        borderRadius: '3px',
                        width:'1px',
                        transition:{
                            duration:0.3,
                        }
                    })
                }}
                
                whileHover={{
                    scale: 1.1,
                  }}
                whileTap={{
                    color:'lightblue',
                    transition:{
                        duration:0.4,
                        ease:"easeInOut"
                    }

                }}
                >
                    {props.ListName}
        </motion.span>
        <motion.hr 
            animate={control}
            />
        </div>
                
    )
}