import React, {useEffect, useState} from 'react';
import {motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';


import {FaDev, FaReact, FaGit } from 'react-icons/fa'
import {MdDeveloperMode} from "react-icons/md"
import {GoDeviceDesktop}  from 'react-icons/go'
import SkillWrapper from './skillWrapper';
import {IoLogoPython,IoLogoHtml5,IoLogoElectron} from "react-icons/io5";
import {DiJavascript1, DiNodejs} from "react-icons/di";
import {TbBrandTypescript, TbBrandReactNative} from "react-icons/tb"
import {RiCss3Line} from "react-icons/ri";
import {SiMongodb,SiDjango} from "react-icons/si";

import Langs from './lang';




export default function Service(){

    const AboutVariant = useAnimation()
    const HrVariant = useAnimation()
    const {ref, inView} = useInView()
    const [hovered, setHovered] = useState(false)
    const [mobileHovered , setMobilehovered] = useState(false)
    const [desktopHovered, setDesktopHovered] = useState(false)
    const CardVariant = useAnimation()

    const [hoverPython, setHoverPython] = useState(false);
    const [hoverJS, setHoverJS] = useState(false);
    const [hoverTS, setHoverTS] = useState(false);
    const [hoverReact, setHoverReact] = useState(false); 
    const [hoverRN, setHoverRN] = useState(false);
    const [hoverHTML, setHoverHTML] = useState(false);

    const [hoverCSS, setHoverCSS] = useState(false);
    const [hoverE, setHoverE] = useState(false);
    const [hoverMongo, setHoverMongo] = useState(false);
    const [hoverNode, setHoverNode] = useState(false);
    const [hoverGit, setHoverGit] = useState(false);
    const [hoverDjango, setHoverDjango] = useState(false);


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

                CardVariant.start({
                    display:'flex',
                    y:0,
                    transition:{
                        duration:1,
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
          
            CardVariant.start({
                display:'none',
                y:-100
            })
        }


        
        }
    

        , [inView, AboutVariant, HrVariant,CardVariant])


   


    return (
        <div 
            ref={ref}
            className='Service-container'>

        <motion.p 
            
            animate={AboutVariant}
            className='AboutTitle'>
            Service
         </motion.p>

        <motion.hr 
            animate={HrVariant}
            className='About-hr'/>

        <motion.p 
        initial={{
            x: -100,
        }}

        animate={inView ? {
            x:0,
            transition:{
                type:'tween',
                duration:1,
            }
        }: ''}

        className='whatIdo-Wrapper'>What I do?</motion.p>

        <div className='skill-container'>

            <SkillWrapper CardVariant={CardVariant} Icon={FaDev} Name="Web Development" 
            Details="Tools use for the backend are Django and nodejs.Tools use for the frontend are React, Html and Css."
            hovered={hovered} 
            setHovered={setHovered} />
                

            <SkillWrapper CardVariant={CardVariant} Icon={MdDeveloperMode} Name="Mobile Development" 
            Details="Reactnative is the only tool I used for development."
            hovered={mobileHovered} 
            setHovered={setMobilehovered} />


        <SkillWrapper CardVariant={CardVariant} Icon={GoDeviceDesktop} Name="Desktop Development" 
            Details="Electron.js is the only tool I used for development."
            hovered={desktopHovered} 
            setHovered={setDesktopHovered} />

        </div>

         <motion.p initial={{
            x: -100,
        }}

        animate={inView ? {
            x:0,
            transition:{
                type:'tween',
                duration:1,
            }
        }: ''}

        className='whatIdo-Wrapper' id='skillsContainer'>My skills?</motion.p>

    <div className='LangContainer'>

        <Langs name="python" ClassName="LangWrapper" IconsName="LangIcon" setHover={setHoverPython} hover={hoverPython} backgroundColor="#0984e3" color="white" Logo={IoLogoPython}/>
        <Langs name="javaScript" ClassName="LangWrapperJava" IconsName="LangIconJava" setHover={setHoverJS} hover={hoverJS} backgroundColor="#323330" color="#f0db4f" Logo={DiJavascript1}/>
        <Langs name="Typescript" ClassName="LangWrapperTS" IconsName="LangIconTS" setHover={setHoverTS} hover={hoverTS} backgroundColor="white" color="#0984e3" Logo={TbBrandTypescript}/>
        <Langs name="React.Js" ClassName="LangWrapperReact" IconsName="LangIconReact" setHover={setHoverReact} hover={hoverReact} backgroundColor="#61DBFB" color="white" Logo={FaReact}/>
        <Langs name="ReactNative.Js" ClassName="LangWrapperRN" IconsName="LangIconRN" setHover={setHoverRN} hover={hoverRN} backgroundColor="#0984e3" color="white" Logo={TbBrandReactNative}/>
        <Langs name="html" ClassName="LangWrapperHtml" IconsName="LangIconHtml" setHover={setHoverHTML} hover={hoverHTML} backgroundColor="white" color="#e7592e" Logo={IoLogoHtml5}/>
        


        <Langs name="css" ClassName="LangWrapper" IconsName="LangIcon" setHover={setHoverCSS} hover={hoverCSS} backgroundColor="#0984e3" color="white" Logo={RiCss3Line}/>
        <Langs name="electron.js" ClassName="LangWrapperJava" IconsName="LangIconJava" setHover={setHoverE} hover={hoverE} backgroundColor="#323330" color="#f0db4f" Logo={IoLogoElectron}/>
        <Langs name="mongo" ClassName="LangWrapperTS" IconsName="LangIconTS" setHover={setHoverMongo} hover={hoverMongo} backgroundColor="white" color="#0984e3" Logo={SiMongodb}/>
        <Langs name="node" ClassName="LangWrapperReact" IconsName="LangIconReact" setHover={setHoverNode} hover={hoverNode} backgroundColor="#61DBFB" color="white" Logo={DiNodejs}/>
        <Langs name="git" ClassName="LangWrapperRN" IconsName="LangIconRN" setHover={setHoverGit} hover={hoverGit} backgroundColor="#0984e3" color="white" Logo={FaGit}/>
        <Langs name="django" ClassName="LangWrapperHtml" IconsName="LangIconHtml" setHover={setHoverDjango} hover={hoverDjango} backgroundColor="white" color="#e7592e" Logo={SiDjango}/>
        </div>

        <div className=' btnContainer'>

        <a href='https://github.com/emmanuelatikese' className='projectBtn'>
           My Projects
        </a>
        </div>


        </div>
    )
}