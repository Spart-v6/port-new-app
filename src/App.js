import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import {useState, useEffect} from 'react';
import {AnimatePresence} from 'framer-motion';
import { gsap } from "gsap-trial";
import './App.scss';

function App() {
  gsap.config({nullTargetWarn:false});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const [counter,setCounter] = useState(0);

  useEffect(()=>{
    setTimeout(() => {
        setIsLoading(true);
    }, 6000);
  })

  const tl = gsap.timeline();
  useEffect(()=>{
    tl.to("#work",{strokeDashoffset:0, duration:2, ease:"Circ.easeInOut"},"+=.5")
    .to("#circ",{y:"10",opacity:1,duration:1, ease:"Expo.easeInOut"},'-=.5')
    .to("#circ",{y:0, opacity:1, duration:1, ease:"Expo.easeInOut"},)
    .to("#workP",{scale:0, duration:.5,ease:"Circ.easeInOut"})
    .to("#circ",{scale:0, duration:.5,ease:"Circ.easeInOut"},"-=.2")
    .to(".Load",{duration:1.5, right:"100%", delay:1, ease:"Expo.easeInOut"},'-=1')
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

        <svg id="workP" width="68" height="77" viewBox="0 0 68 77" fill="none" >
          <path id="work" d="M48.7676 58.4996C36.5292 65.5003 11.1942 63.637 5.60239 38.4978C2.82246 26 9.28781 5 32.8908 5C47.0853 5 63 13.5 63 37.5029V63" stroke="#3A59FF" strokeWidth="9" strokeLinecap="round"/>
        </svg>
        <svg width="68" height="97" viewBox="0 0 68 77" fill="none" style={{position:"fixed"}}>
          <circle id="circ" cx="63.5" cy="72.5" r="4.5" fill="#3A59FF" style={{transform: "translateY(-10px)", opacity:0}}/>
        </svg>


    

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
