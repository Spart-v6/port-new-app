import "./App.scss";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {AnimatePresence} from 'framer-motion';
import { gsap } from "gsap-trial";
import anime from "animejs";

function App() {
  gsap. config({nullTargetWarn:false});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
        setIsLoading(true);
        // console.log("Loaded");
    }, 5500);
  })

  useEffect(()=>{
    gsap.to(".Load span",{opacity:0, duration:.5, ease:"Expo.easeOut"},'+=3')
    gsap.to(".Load",{duration:1.5, right:"100%", ease:"Expo.easeInOut"},'+=.5')
  },[])

  const location = useLocation();
  const [counter,setCounter] = useState(0);
  useEffect(() => {
    setCounter(counter+1);
  }, [location]);
  return (
    <>
    {/* Do smth like take 5 seconds to load and then do fade out effect and then show the content after 5 seconds only */}
    {/* Also add some condition when scrolling down and up, (left and right black screen) so that when u do too much scroll up, it doesn't show the content which got hidden .. so do smth like if scroll is done == 1 (once) then only hide content.. do in Home! Done!*/}
    {/* <div className="loadingNow">
        <svg viewBox="0 0 1320 300">
          <text x="50%" y="50%" dy=".30em" textAnchor="middle">AS</text>
        </svg>
    </div> */}

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
