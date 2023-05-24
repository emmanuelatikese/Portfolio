import React, { useEffect} from 'react'
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer'


export default function About(){




    const {ref, inView} = useInView({
        
    })

    const AboutVariant = useAnimation()
    const HrVariant = useAnimation()
    const AbContent = useAnimation()


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

                AbContent.start({
                    x:0,
                    transition:{
                        duration:0.5,
                    },
                    display:'flex',
                    marginRight:'auto',
                    marginLeft:'auto',
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
            AbContent.start({
                x:-1000,
                display:'none',
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


          <motion.h2
                animate={AbContent}
            >Hi</motion.h2>
            

            
        
        <motion.p 
            animate={AbContent}
        className="AboutContent">
        I'm a software developer with two years of experience in creating innovative and user-friendly solutions for various domains. 
        I have a passion for learning new technologies and applying them to solve real-world problems. 
        I enjoy working in a team as well as independently, and I always strive to deliver high-quality code that meets the client's requirements and expectations.
        I'm always eager to take on new challenges and expand my skillset.
        If you are looking for a software developer who can bring value to your project, please feel free to contact me.
        </motion.p>

        <p className='verge'>Vergee</p>

        </div>
            

        
        
        </div>
    )
}