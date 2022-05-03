import "./App.scss";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import {useState, useEffect} from 'react';
import {AnimatePresence} from 'framer-motion';
import { gsap } from "gsap-trial";

function App() {
  gsap.config({nullTargetWarn:false});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [counter,setCounter] = useState(0);

  useEffect(()=>{
    setTimeout(() => {
        setIsLoading(true);
    }, 5500);
  })

  useEffect(()=>{
    gsap.to(".Load span",{opacity:0, duration:.5, ease:"Expo.easeOut"},'+=3')
    gsap.to(".Load",{duration:1.5, right:"100%", ease:"Expo.easeInOut"},'+=.5')
  },[])

  useEffect(() => {
    setCounter(counter+1);
  }, [location]);

  return (
    <>
    {
      !isLoading 
      ?
      <div className="Load">
        <span>Loading</span>
      </div>
      
      :
      
      <Sidebar>  
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home counter={counter}/>} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </Sidebar>

    }
  
    </>
  );
}

export default App;
