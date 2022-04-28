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

function App() {

  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => { setIsLoading(false); }

  useEffect(()=>{
    window.addEventListener("load",handleLoading);
    return () => window.removeEventListener("load",handleLoading);
  },[])

  const location = useLocation();

  return (
    <>
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
