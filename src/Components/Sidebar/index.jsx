import { Cross } from "hamburger-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { gsap } from "gsap-trial";
import "./style.scss";
import $ from "jquery";

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



  var t1 = gsap.timeline({ paused: true });

  t1.to(".nav-container", { left: "0%", ease: "Expo.easeInOut", duration:1, });

  t1.to(".menu .menu__item",{opacity: 1, y:20, duration:.5, stagger:.1, ease: "Expo.easeOut"},);

  // t1.from( ".menu .menu__item-link",  { y: 100, opacity: 0, ease: "Expo.easeOut", stagger:"0.3" },"-=0.4");

  // t1.from( ".socials",  { y: 100, opacity: 0, ease: "Expo.easeOut", stagger:"0.5" },"-=0.6");

  t1.reverse();
  $(document).on("click", ".menu-open", ()=> t1.reversed( !t1.reversed() ));
  $(document).on("click", ".menu-close", ()=> t1.reversed( !t1.reversed() ));
  $(document).on("click", ".link_text", ()=> t1.reversed(!t1.reversed()));



  return (
    <>
      <div className="sidebar">
        <div className="menu-open">menu</div>
        <div className="nav-container">
          <div className="menu-close">close</div>
          <div className="socials">
            <span>github</span>
            <span>linkedin</span>
          </div>
          <nav className="menu">
            <section className="menu__item">
            {
                <NavLink to="/" key="Home" className="link">
                  <div className="link_text">Home</div>
                </NavLink>
            }
            </section>
            <section className="menu__item">
            {
                <NavLink to="/about" key="About" className="link">
                  <div className="link_text">About</div>
                </NavLink>
            }
            </section>
            <section className="menu__item">
            {
                <NavLink to="/project" key="Project" className="link">
                  <div className="link_text">Project</div>
                </NavLink>
            }
            </section>
            <section className="menu__item">
            {
                <NavLink to="/contact" key="Contact" className="link">
                  <div className="link_text">Contact</div>
                </NavLink>
            }
            </section>
          </nav>
        </div>
      </div>

      <main className="head-container">{children}</main>
    </>
  );
};

export default Sidebar;
