import React, {useState, useEffect} from 'react'
import {motion, useAnimation, useMotionValue, useTransform} from 'framer-motion';
import {useInView} from 'react-intersection-observer'


export default function About(){

    const [hiset, setHiset] = useState(true)

    const control = useAnimation()
    const {ref, inView} = useInView({
        
    })

    const AboutVariant = useAnimation()
    const HrVariant = useAnimation()


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
                    width:'60px',
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

    return(
        <div  
            ref={ref}
        
        className="AboutContainer">
            
        <motion.p 
            
            animate={AboutVariant}
            className='AboutTitle'>
            About
         </motion.p>

        <motion.hr 
        animate={HrVariant}
        className='About-hr'/>

        <div className="AboutWrapper">


        { hiset ? <h2>Hi</h2> :<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="white" />
            <circle cx="35" cy="40" r="5" fill="black" class="blink" />
            <circle cx="65" cy="40" r="5" fill="black" class="blink" />
            <path d="M30 60 Q 50 80 70 60" stroke="black" fill="transparent" stroke-width="3" />
            </svg>}
            

            
        
        <p className="AboutContent">
        I'm a software developer with two years of experience in creating innovative and user-friendly solutions for various domains. 
        I have a passion for learning new technologies and applying them to solve real-world problems. 
        I enjoy working in a team as well as independently, and I always strive to deliver high-quality code that meets the client's requirements and expectations.
        I'm always eager to take on new challenges and expand my skillset.
        If you are looking for a software developer who can bring value to your project, please feel free to contact me.
        </p>

        <p className='verge'>Vergee</p>

        </div>
            

        
        
        </div>
    )
}