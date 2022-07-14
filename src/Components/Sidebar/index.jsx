import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { gsap } from "gsap-trial";
import "./style.scss";


const Sidebar = ({ children }) => {
  const [isActive, setActive] = useState(false);
  const [isLink, setIsLink] = useState(false);

  const toggleClass = () => setActive(!isActive);
  const toggleLink = ()=> setIsLink(!isLink);

  useEffect(()=>{
    if(isActive) gsap.to(".navbar",{scale:1, opacity:1, duration:.7, ease:"Expo.easeOut"});
    else gsap.to(".navbar",{opacity:0, scale:0,  duration:.7, ease:"Expo.easeOut"});
  },[isActive])

  useEffect(()=>{
    if(isLink) {
      gsap.to(".navbar",{opacity:0, scale:0});
      setActive(!isActive);
      setIsLink(!isLink);
    }
  },[isLink])

  return (
    <>

      <motion.div className="burger" whileTap={{ scale: 0.8 }}>
        <svg className={isActive ? 'ham hamRotate ham8 active': 'ham hamRotate ham8'} onClick={toggleClass} viewBox="0 0 100 100" width="80">
          <path className="line top" d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
          <path className="line middle" d="m 30,50 h 40" />
          <path className="line bottom" d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
        </svg>
      </motion.div>

      <nav className="navbar">
        <ul className="nav-items">
          <li className="li item-1">
            <NavLink to="/" key="Home" className="link1 effect-underline">
              <div className="link_text" onClick={toggleLink}>Home</div>
            </NavLink>
          </li>
          <li className="li item-2">
            <NavLink to="/about" key="About" className="link2 effect-underline">
              <div className="link_text" onClick={toggleLink}>About</div>
            </NavLink>
          </li>
          <li className="li item-3">
            <NavLink to="/project" key="project" className="link3 effect-underline">
              <div className="link_text" onClick={toggleLink}>Project</div>
            </NavLink>
          </li>
          <li className="li item-4">
            <NavLink to="/contact" key="Contact" className="link4 effect-underline">
              <div className="link_text" onClick={toggleLink}>Contact</div>
            </NavLink>
          </li>
        </ul>
        <div className="nav-info">
          <span>Find me here</span>
          <li>
            <a href="mailto:ankur.atwork24@email.com">ankur.atwork24@gmail.com</a>
          </li>
        </div>
        <div className="nav-social">
          <ul>
            <li>
              <a href="https://github.com/Spart-v6">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ankur-singh-8b91371a7/">LinkedIn</a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="head-container">{children}</main>
    </>
  );
};

export default Sidebar;
