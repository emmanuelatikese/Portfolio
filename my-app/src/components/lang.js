import React from 'react';
import {motion} from 'framer-motion'

export default function Langs(props) {
  return (
        <div 
                onMouseLeave={()=> props.setHover(false)}
                onMouseEnter={()=> props.setHover(true)}
                className= {props.ClassName}>
                    <props.Logo className={props.IconsName}/>
                    <motion.p className='LangName' style={props.hover ? {backgroundColor:props.backgroundColor, color:props.color, transition:"3s"}: ''}>
                        {props.name}
                    </motion.p>
        </div>
  )
}