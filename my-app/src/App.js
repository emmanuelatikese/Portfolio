import './App.css';
import Header from './components/header';
import {motion} from 'framer-motion'
import Intro from './components/Intro';
import About from './components/about'


function App() {
 const ImgVariant= {
    initial:{
      y:-900,
    },
    end:{
      y:0,
      transition:{
        type:"spring",
        duration:2,
        stifness:1000,

      }
    }
  }

  return (
    <div className='AppContainer'>
    <motion.div 
      variants={ImgVariant}
      animate="end"
      initial="initial"
    className="App">
      <Header/>
      <Intro/>
    </motion.div>
    <About/>
    </div>
  );
}

export default App;
