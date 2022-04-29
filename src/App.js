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

function App() {

  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = () => { setIsLoading(false); }

  // useEffect(()=>{
  //  setTimeout(() => {
  //   setIsLoading(true);
  //   console.log("Loaded");
  //   console.log("Running gsap")
  //   gsap.to(".loadingNow",{duration:1, right:100,ease:"Expo.easeOut"},"-=1")
  //   console.log("Runned gsap")
  //  }, 5000);
  // })

  useEffect(()=>{
    gsap.to(".loadingNow",{duration:2, delay:2, right:"100%", ease:"Expo.easeInOut"})  
  },[])

  const location = useLocation();

  return (
    <>
    {/* Do smth like take 5 seconds to load and then do fade out effect and then show the content after 5 seconds only */}
    {/* Also add some condition when scrolling down and up, (left and right black screen) so that when u do too much scroll up, it doesn't show the content which got hidden .. so do smth like if scroll is done == 1 (once) then only hide content.. do in Home! */}
    <div className="loadingNow"></div>
    
    <Sidebar>  
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </Sidebar>

  
    </>
  );
}

export default App;
