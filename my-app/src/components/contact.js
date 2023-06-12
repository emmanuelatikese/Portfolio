import React, { useEffect, useRef} from 'react'
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer'
import emailjs from 'emailjs-com'


export default function Contact(){


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


        const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7elhhi5', 'template_uhgqwmo', form.current, 'DXQFVEgQmOwkGg_M_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    return(
        <div  
            ref={ref}
        
        className="AboutContainer">
            
        <motion.p 
            
            animate={AboutVariant}
            className='AboutTitle'>
            Contact
         </motion.p>

        <motion.hr 
        animate={HrVariant}
        className='About-hr'/>

        <div className="ContactWrapper">

        <form ref={form} onSubmit={sendEmail}>
            
            <input type="text" name="user_name" placeholder='Fullname' required/>
            
            <input type="email" name="user_email" placeholder='Email' required/>


            
            <textarea name="message" />

            <input type="submit" value="Send" />
        </form>
            

            
        
        

        </div>
            

        
        
        </div>
    )
}