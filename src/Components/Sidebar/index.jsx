import { Cross } from "hamburger-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { gsap } from "gsap-trial";
import "./style.scss";
import $ from "jquery";


const Sidebar = ({ children }) => {

  const [isLinkClicked, setIsLinkClicked] = useState(false);

  const tl = gsap.timeline({paused:"true"});
  tl.to(".menu",{duration:1, x:"0%",ease:"Expo.easeInOut"});
  tl.fromTo(".li",{y:"-100%",opacity:0}, {duration:.5, opacity:1, y:"0%",stagger:.25});
  tl.fromTo(".social-li",{y:"-50%",opacity:0,},{duration: .4, opacity:1, stagger:.25,ease:"Expo.easeInOut"}, "-=.5");

  const openM = ()=> tl.play()
  const closeM = ()=> tl.reverse();

  if(isLinkClicked){
    gsap.to(".menu",{x:"-100%", duration:-1})
  }


  return (
    <>

      <div className="container">
        <div className="button" onClick={()=>openM()}>MENU</div>
      </div>
      <div className="menu">
        <div className="button" onClick={()=>closeM()}>CLOSE</div>

        <ul className="ul">
          <li className="li1 li">
            <NavLink to="/" key="Home" className="link">
              <div className="link_text" onClick={()=>setIsLinkClicked(true)}>Home</div>
            </NavLink>
          </li>
          <li className="li2 li">
           <NavLink to="/about" key="About" className="link">
              <div className="link_text" onClick={()=>setIsLinkClicked(true)}>About</div>
            </NavLink>
          </li>
          <li className="li3 li">
            <NavLink to="/project" key="Project" className="link">
              <div className="link_text" onClick={()=>setIsLinkClicked(true)}>Project</div>
            </NavLink>
          </li>
          <li className="li4 li">
            <NavLink to="/contact" key="Contact" className="link">
              <div className="link_text" onClick={()=>setIsLinkClicked(true)}>Contact</div>
            </NavLink>
          </li>
        </ul>

        <div className="social">
          <ul>
            <li className="social-li"><a href="#">github</a></li>
            <li className="social-li"><a href="#">linkedin</a></li>
          </ul>
        </div>

      </div>

      <main className="head-container">{children}</main>
    </>
  );
};

export default Sidebar;
