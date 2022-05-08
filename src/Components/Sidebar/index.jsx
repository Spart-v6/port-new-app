import { Cross } from "hamburger-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { gsap } from "gsap-trial";
import "./style.scss";


const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/project",
    name: "Project",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const inputAnimation = {
    hidden: {
      margin: 0,
      width: 0,
      right: 0,
      padding: 0,
      opacity: 0,
    },
    show: {
      width: "140px",
      right: "2%",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const gtl = gsap.timeline();
  const gtl1 = gsap.timeline();
  
  const fxnHandler = ()=>{
    setOpen(false);
  }

  return (
    <>
      
      <motion.div className="sidebar" transition={{ duration: 1, ease: "easeInOut" }} variants={inputAnimation} >
        <div className="top_section">
          <div className="bars">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.7 }}>
              <Cross toggled={isOpen} toggle={setOpen} rounded easing="ease-out" color={isOpen?"#00aaff":"#000"} />
            </motion.div>
          </div>
        </div>

        <section className="routes"
        {
          ...document.querySelector(".routes") ? 
          {
            ...isOpen ?
              gtl1.to(".routes",{duration:.5, right:80,},'+=.1')
            :
              gtl1.to(".routes",{duration:.5, right:"-300px"},'+=.1')
          }
          :
          {}
        }
        >
        {
          routes.map((route) => (
            <NavLink to={route.path} key={route.name} className="link">
              <div className="link_text" onClick={()=>fxnHandler()}>{route.name}</div>
            </NavLink>
          ))
        }
        </section>
        
        <div className="menu-bg" id="menu-bg" 
        {
          ...document.querySelector(".menu-bg") ? 
          {
            ...isOpen ?
              gtl.to(".menu-bg",{duration:.2, width:"500px", height:"500px", background:"#001733",})
            :
              gtl.to(".menu-bg",{duration:.2, width:0, height: 0})
          }
          :
          {}
        }
          
        ></div>

      </motion.div>

      <main className="head-container">{children}</main>
      
    </>
  );
};

export default Sidebar;
