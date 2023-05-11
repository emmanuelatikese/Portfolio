import './App.css';
import Header from './components/header';
import {motion} from 'framer-motion'
import Intro from './components/Intro';


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
    <div>
    <motion.div 
      variants={ImgVariant}
      animate="end"
      initial="initial"
    className="App">
      <Header/>
      <Intro/>
    </motion.div>
    </div>
  );
}

export default App;
