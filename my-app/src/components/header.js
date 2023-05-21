import React from 'react'
import {motion} from 'framer-motion'
import SpanList from './spanList'

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
                bounce:0.1,
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

                whileHover={
                    {
                        color: 'lightblue',
                        scale:1.05,
                    }
                }
            
            id='PortTitle'>Snr.Ati</motion.span>

            <div className='HeaderWrapper'>
                <SpanList ListName="Home" />
                <SpanList ListName="About"/>
                <SpanList ListName="Service"/>
                <SpanList ListName="Contact"/>
            </div>


        </motion.div>
    )
}