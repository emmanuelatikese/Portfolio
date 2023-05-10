import React  from "react";
import {motion} from "framer-motion"

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


    return(
        <motion.span
                variants={TitleVariant}
                animate="end"
                initial="initial"
                
                whileHover={{
                    scale: 1.1,
                    transition: { ease: 'easeOut', duration: 0.3 },
                        textDecorationLine: 'underline',
                        textDecorationColor: 'lightblue',
                        textDecorationThickness: '2px',
                        textDecorationStyle: 'solid',
                        borderRadius: '2px',

                  }}
                  
                >
                    {props.ListName}
        </motion.span>
                
    )
}