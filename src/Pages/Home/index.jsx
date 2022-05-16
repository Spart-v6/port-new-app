import React, { useEffect, useState } from "react";
import locomotiveScroll from "locomotive-scroll";
import "./style.scss";
import "./base1.scss";
import PageTransition from "../../Components/PageTransition";
import { AnimatePresence, motion } from "framer-motion";
import { CgArrowLongDown } from "react-icons/cg";
import { Link } from "react-router-dom";
import { gsap } from "gsap-trial";
import $ from 'jquery';


export default function About() {
  const [nameOfPage, setNameOfPage] = useState("Home");

  const slideRight = () => {
    gsap.to("#down-arrow",{opacity: 0, display:"none", ease:"Expo.easeInOut", duration: 1})

    gsap.to(".homeContainer .color", { width: "100vw", scale:.98, duration: 1.5, ease: "Power4.easeInOut",})
    gsap.to(".homeContainer .upperPart .hello", { x: "55%", duration: 1.3,  ease: "Power4.easeInOut"})

    gsap.to(".homeContainer .lowerPart",{opacity:1, top:"35%",ease: "Power4.easeInOut",duration:1})

    gsap.to(".homeContainer .lowerPart .dotHome",{duration:.3, opacity:1, ease:"Expo.easeInOut", delay:.5},)

    gsap.to("#text-reveal", { clipPath: "polygon(0px 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, delay: 0.3, stagger: 0.2,duration: 1.5,ease: "Expo.easeOut",})

    gsap.to(".homeContainer .lowerPart .text-zone .home-content .NAME",{clipPath:"polygon(0 100%, 100% 100%, 96% 0, 0 0)",duration:.5, ease:"Expo.easeOut"})

    gsap.to("#svgText",{ keyframes:{
        "0%":  {fill:"#488a1400",stroke:"#fc0853", strokeDashoffset:"25%",strokeDasharray:"0 50%",strokeWidth:"5px", },
        "25%":  {fill:"#488a1400",stroke:"#08fdd8", },
        "50%":  {fill:"#488a1400",stroke:"#fc0853", },
        "75%":  {fill:"#488a1400",stroke:"#08fdd8",strokeWidth:"5px", },
        "100%":  {fill:"#fc0853",stroke:"#488a1400", strokeDashoffset:"-25%",strokeDasharray:"50% 0",strokeWidth:"0px", },
        easeEach:"Expo.easeInOut",
      },
      ease:"none",
      duration:5,
    })

    gsap.to(".homeContainer .lowerPart .text-zone .flat-button", { opacity: 1, duration: 0.6, delay: 1, ease: "Expo.easeInOut", });


  }

  const slideLeft = ()=> {

    gsap.to(".homeContainer .lowerPart .dotHome",{duration:.1, opacity:0, ease:"Expo.easeInOut"})

    gsap.to("#text-reveal", { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", opacity: 0, y: 50, stagger: 0.1, duration: .5, ease: "Expo.easeOut", });

    gsap.to(".homeContainer .lowerPart .text-zone .home-content .NAME",{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",duration:.2, ease:"Expo.easeOut"})

    gsap.to(".homeContainer .lowerPart .text-zone .flat-button", { opacity: 0, duration: .3, ease: "Expo.easeOut", });



    gsap.to("#down-arrow",{opacity: 1, display:"block", ease:"Expo.easeInOut", duration: 1})

    gsap.to(".homeContainer .lowerPart",{opacity:0, top:"50%",ease: "Power4.easeInOut",duration:1})

    gsap.to(".homeContainer .color", { width: "50vw", scale:0.9,  duration: 1.5, ease: "Power4.easeInOut", });
    gsap.to(".homeContainer .upperPart .hello", { x: 0, duration: 1.3, ease: "Power4.easeInOut" })
  }

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    scroll.on('scroll',e=>{
      var scr = e.scroll.y;
      console.log(scr)
       
      if(scr > 2) slideRight();
      if(scr <= 2) slideLeft();

    })
  }, []);

  const arrowHandler = () => slideRight();


   // #region //< --------------------------------------------------   Hey There  ----------------------------------------------------
   const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

   const leftSide = {
     hidden: { y: 0, opacity: 0 },
     show: {
       y: 0,
       opacity: 1,
       transition: {
         delay:2.3,
         delayChildren: 2.3,
         staggerChildren: 0.04,
         staggerDirection: -1,
       }
     }
   }
   const rightSide = {
     hidden: { y: 0, opacity: 0 },
     show: {
       y: 0,
       opacity: 1,
       transition: {
         delay:2.3,
         delayChildren: 2.3,
         staggerChildren: 0.02,
         staggerDirection: 1,
       }
     }
   }
   
   const item = {
     hidden: { y: 100, opacity: 0 },
     show: { y: 0, opacity: 1, transition: { duration: 1, ...transition },}
   }
 
   //#endregion


  return (
    <>
      <PageTransition nameOfPage={nameOfPage} />

      <div data-scroll-container className="homeContainer">

        <div className="color"></div>


        <div className="downArrow" id="down-arrow" >
            <CgArrowLongDown onClick={()=> arrowHandler()}/>
        </div>


        <section className="home-sec upperPart" data-scroll-section>
          <AnimatePresence>
              <div className="hello" id="hello">
                <motion.span variants={leftSide} initial="hidden" animate="show" className="first">
                  <motion.span variants={item}>H</motion.span>
                  <motion.span variants={item}>e</motion.span>
                  <motion.span variants={item}>y&nbsp;</motion.span>
                </motion.span>
                <motion.span variants={rightSide} initial="hidden" animate="show" className="first">
                  <motion.span variants={item}>T</motion.span>
                  <motion.span variants={item}>h</motion.span>
                  <motion.span variants={item}>e</motion.span>
                  <motion.span variants={item}>r</motion.span>
                  <motion.span variants={item}>e</motion.span>
                  <motion.span variants={item}>!</motion.span>
                </motion.span>

              </div>
          </AnimatePresence>
        </section>

        <section className="home-sec lowerPart">
          <div className="dotHome">
              .home()
          </div>

          <div className="text-zone">
              <div className="home-content">
                <span id="text-reveal" className="IM">I'm </span>
                <div className="NAME">
                  <svg viewBox="0 0 1420 300">
                    <text id="svgText" x="50%" y="50%" dy=".30em" textAnchor="middle">Ankur</text>
                  </svg>
                </div>
                <span id="text-reveal" className="ROLE">Web Developer</span> <br/>
                <span id="text-reveal" className="DESC"> Front-end Developer || Designer || Competitive Coder || Gamer</span>
              </div>
            <motion.div  whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} style={{width: "7vw", height: "5vh"}}>
              <Link to="/contact" className="flat-button">
                Say Hi!
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="noUse" id="noUse1"></section>
      </div>
    </>
  );
}
