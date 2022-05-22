import React, { useEffect, useState } from "react";
import locomotiveScroll from "locomotive-scroll";
import "./style.scss";
import PageTransition from "../../Components/PageTransition";
import { AnimatePresence, motion } from "framer-motion";
import { CgArrowLongDown } from "react-icons/cg";
import { Link } from "react-router-dom";
import { gsap } from "gsap-trial";


function Home(props) {
  const [nameOfPage, setNameOfPage] = useState("Home");



  const slideRight = () => {
    var tl = gsap.timeline();
    tl.to("#down-arrow",{opacity: 0, display:"none", ease:"Expo.easeInOut", duration: 1})

    .to(".homeContainer .color", { width: "100vw", scale:.98, duration: 1.5, ease: "Power4.easeInOut",},"-=1")
    .to(".homeContainer .upperPart .hello", { x: "55%", duration: 1.3,  ease: "Power4.easeInOut"}, "-=1.4")

    .to(".homeContainer .lowerPart",{ visibility:"visible", duration: 4,},"-=3")

    .to("#im",{transform:"scale(1.0) translate(0px, 0px)", clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)", delay:2.5 , duration: 1.5, ease: "Power4.easeInOut"},"-=2.5")


    .to(".homeContainer .lowerPart .text-zone .home-content .NAME",{clipPath:"polygon(0 100%, 100% 100%, 96% 0, 0 0)", delay:2.6 ,duration:.5, ease:"Expo.easeOut"},"-=2.5")

    .to("#svgText",{ keyframes:{
        "0%":  {fill:"#488a1400",stroke:"#8A0AE8", strokeDashoffset:"25%",strokeDasharray:"0 50%",strokeWidth:"5px", },
        "25%":  {fill:"#488a1400",stroke:"#08fdd8", },
        "50%":  {fill:"#488a1400",stroke:"#8A0AE8", },
        "75%":  {fill:"#488a1400",stroke:"#08fdd8",strokeWidth:"5px", },
        "100%":  {fill:"#8A0AE8",stroke:"#488a1400", strokeDashoffset:"-25%",strokeDasharray:"50% 0",strokeWidth:"0px", },
        easeEach:"Expo.easeInOut",
      },
      ease:"none",
      duration:5,
    },"-=2.5")

    .to("#role",{transform:"scale(1.0) translate(0px, 0px)", clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)", delay:7.7 , duration: 1.5, delay:.5, ease: "Power4.easeInOut"},"-=2.5")
    .to("#desc",{transform:"scale(1.0) translate(0px, 0px)", clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)", delay:7.8 ,duration: 1.5, delay:.6, ease: "Power4.easeInOut"},"-=2.5")

    .to(".homeContainer .lowerPart .text-zone .flat-button", { opacity: 1, duration: 0.6, delay: 1, ease: "Expo.easeInOut", }, "-=2.5");


  }

  const slideLeft = ()=> {

    var tl = gsap.timeline();
    
    tl.to(".homeContainer .lowerPart",{visibility:"hidden", duration:2},"-=1")

    .to("#im", { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",  },"-=1")
    .to("#role", { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",  },"-=1")
    .to("#desc", { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",  },"-=1")

    .to(".homeContainer .lowerPart .text-zone .home-content .NAME",{clipPath:"polygon(0 0, 0 0, 0 100%, 0 100%)", },"-=1")

    .to(".homeContainer .lowerPart .text-zone .flat-button", { opacity: 0,},"-=1")



    
    .to("#down-arrow",{opacity: 1, display:"block", ease:"Expo.easeInOut", duration: 1},"-=1")

    .to(".homeContainer .color", { width: "50vw", scale:0.9,  duration: 1.5, ease: "Power4.easeInOut", })
    .to(".homeContainer .upperPart .hello", { x: 0, duration: 1.3, ease: "Power4.easeInOut" })
  }

  useEffect(() => {
    const scroll = new locomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    scroll.on('scroll',e=>{
      var scr = e.scroll.y;
       
      if(scr > 2){
        console.log("Calling slide right");
        slideRight();
      }
      else if(scr <= 2){
        console.log("Calling slide left");
        slideLeft();
      }

    })
  }, []);

  const arrowHandler = () => slideRight();

  //#region //< ------------------------------------------------- Initial black color screen ----------------------------------------
    useEffect(()=>{
      if(props.counter <= 1){
        gsap.to(".homeContainer .color",{width:"50vw", scale:"0.9", duration:2, ease:"Expo.easeInOut"})
      }
      else{
        gsap.set(".homeContainer .color",{width:"50vw",scale:.9},"-=.5")
      }
    },[props.counter])
  //#endregion


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

          <div className="text-zone">
              <div className="home-content">
                <h4 id="im" className="IM">I'm </h4>
                <div className="NAME">
                  <svg viewBox="0 0 1420 300">
                    <text id="svgText" x="50%" y="50%" dy=".30em" textAnchor="middle">Ankur</text>
                  </svg>
                </div>
                <h4 id="role" className="ROLE">Web Developer</h4>
                <h4 id="desc" className="DESC">Full Stack Developer || Designer || Competitive Coder || Gamer</h4>
              </div>
            <motion.div  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{width: "7vw", height: "5vh"}}>
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

export default Home;