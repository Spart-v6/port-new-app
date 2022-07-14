import { Routes, Route, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const [counter,setCounter] = useState(0);

  useEffect(() => {
    setCounter(counter+1);
  }, [location]); // eslint-disable-line


  // useEffect(()=>{
  //   let a1 = anime.timeline({
  //     easing: 'easeInOutQuart',
  //     duration: 4000
  //   })
  //   a1.add({
  //       targets: 'svg',
  //       keyframes: [
  //           {scale: 1},
  //       ],
  //       fill:"#fff",
  //       duration: 3000
  //   })

  //   a1.add({
  //       targets: ['#logoA', 'feTurbulence', 'feDisplacementMap'],
        
  //       baseFrequency: 0,
  //       scale: 1,
  //       fill: '#ff00ff',
  //   }, "-=4000");

  // },[])
  

  return (
    <>
    {
      // !isLoading 
      // ?
      // <div className="Load">

      //   <svg width="208" height="236" viewBox="0 0 208 236" fill="none" className="svgA">

      //     <filter id="displacementFilter">
      //       <feTurbulence type="turbulence" baseFrequency="0.04" result="turbulence"/>
      //       <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="50" xChannelSelector="R" yChannelSelector="G"/>
      //     </filter>

      //    <path id="logoA" style={{filter:"url(#displacementFilter)", transformOrigin:"center"}} d="M172.347 236L158.716 203.983H49.351L35.72 236H0.85L104.192 0.785986L207.534 236H172.347ZM64.25 169.43H143.817L104.192 76.549L64.25 169.43Z" fill="green"/>
      //   </svg>

      // </div>
      
      // :
      
      <Sidebar>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home counter={counter}/>} />
              <Route path="/about" element={<About counter={counter} />} />
              <Route path="/project" element={<Projects counter={counter} />} />
              <Route path="/contact" element={<Contact counter={counter} />} />
          </Routes>
        </AnimatePresence>
      </Sidebar>
    }
    </>
  );
}

export default App;
