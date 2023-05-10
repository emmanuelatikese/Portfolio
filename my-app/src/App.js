import './App.css';
import Header from './components/header';
import {motion} from 'framer-motion'


function App() {
 const ImgVariant= {
    initial:{
      y:-900,
    },
    end:{
      y:0,
      transition:{
        type:"spring",
        duration:3,
        stifness:1000,

      }
    }
  }

  return (
    <motion.div 
      variants={ImgVariant}
      animate="end"
      initial="initial"
    className="App">
      <Header/>
    </motion.div>
  );
}

export default App;
