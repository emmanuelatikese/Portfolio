import React from 'react'
import {motion} from 'framer-motion'

export default function Header (){

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

    const HeaderVariant = {

        end:{
            display:"flex",
            transition:{
                duration:4,
                delay:3,
            }
        }
    }


    return (

        <motion.div 
            variants={HeaderVariant}
            animate="end"
        className='HeaderContainer'>
            <motion.span 
                variants={TitleVariant}
                initial="initial"
                animate="end"
            
            id='PortTitle'>Snr.Ati</motion.span>

            <div className='HeaderWrapper'>
                <motion.span
                variants={TitleVariant}
                animate="end"
                initial="initial">Home</motion.span>
                <motion.span
                variants={TitleVariant}
                animate="end"
                initial="initial">About</motion.span>
                <motion.span
                variants={TitleVariant}
                animate="end"
                initial="initial">Service</motion.span>
                <motion.span
                variants={TitleVariant}
                animate="end"
                initial="initial">Skills</motion.span>
                <motion.span
                variants={TitleVariant}
                animate="end"
                initial="initial">Contact</motion.span>
            </div>


        </motion.div>
    )
}