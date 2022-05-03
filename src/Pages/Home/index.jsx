import "./index.scss";
import { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import RGBLetters from "../../Components/RGBLetters";
import PageTransition from "../../Components/PageTransition";
import gsapTrial, { gsap } from "gsap-trial";
import { CgArrowLongDown } from "react-icons/cg";

function Home(props) {
  const [letterClass, setLetterClass] = useState("text-animate");

  const onHover = () => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  };

  useEffect(() => {
    return onHover();
  }, []);

  const [nameOfPage, setNameOfPage] = useState("Home");

  const [scrollDir, setScrollDir] = useState(0);
  // Scrolling up -> left -> 0
  // Scrolling dwn -> right -> 1
  const [counterUp, setCounterUp] = useState(0);
  const [counterDown, setCounterDown] = useState(0);

  const fxn = (e)=>{
    if (e.deltaY < 0) {
      setScrollDir(0); // scrolling up
      setCounterUp(1);
      setCounterDown(0);
    } else if (e.deltaY > 0 || isArrowClicked) {
      setScrollDir(1); // scrolling down
      setCounterDown(1);
      setCounterUp(0);
    }
  }

  ['click','wheel'].forEach(evt => 
    window.addEventListener(evt,fxn,false)
  );
  

  const [boxWidth, setBoxWidth] = useState(0);



  const slideRight = () => {
    if (counterDown === 1 && counterUp === 0) {

      gsap.to(".intro .greeting .color", { width: "100vw", scale:1, duration: 1.5, ease: "Expo.easeInOut",})
      
      gsap.to(".intro .greeting .hello", { x: "55%", duration: 1.4,  ease: "Expo.easeInOut",})
        
      gsap.to(".intro .home-page .dotHome",{duration:.3, opacity:1, ease:"Expo.easeInOut", delay:.5},)

      gsap.to("#text-reveal", { clipPath: "polygon(0px 100%, 100% 100%, 100% 0%, 0% 0%)", opacity: 1, y: 0, delay: 0.3, stagger: 0.2,duration: 1.5,ease: "Expo.easeOut",})

      gsap.to(".intro .home-page .text-zone .home-content .NAME",{clipPath:"polygon(0 100%, 100% 100%, 96% 0, 0 0)",duration:.5, ease:"Expo.easeOut"})

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

      gsap.to(".intro .text-zone .flat-button", { opacity: 1, duration: 0.6, delay: 1, ease: "Expo.easeInOut", });

    }
  };

  const slideLeft = () => {
    if (counterUp === 1 && counterDown === 0) {

      gsap.to(".intro .home-page .dotHome",{duration:.1, opacity:0, ease:"Expo.easeInOut"})

      gsap.to("#text-reveal", { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", opacity: 0, y: 50, stagger: 0.1, duration: .5, ease: "Expo.easeOut", });

      gsap.to(".intro .home-page .text-zone .home-content .NAME",{clipPath:"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",duration:.2, ease:"Expo.easeOut"})

      gsap.to(".intro .text-zone .flat-button", { opacity: 0, duration: .3, ease: "Expo.easeOut", });

      
      gsap.to(".intro .greeting .color", { width: "50vw", scale:0.9,  duration: 1.5, ease: "Expo.easeInOut", });

      gsap.to(".intro .greeting .hello", { x: 0, duration: 1.4, ease: "Expo.easeInOut", });

    }
  };



  // Hey There
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const leftSide = {
    hidden: { y: 0, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        delay:3,
        delayChildren: 3,
        staggerChildren: 0.06,
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
        delay:3,
        delayChildren: 3,
        staggerChildren: 0.06,
        staggerDirection: 1,
      }
    }
  }
  
  const item = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ...transition },}
  }

  // console.log(props.counter)

  useEffect(()=>{
    if(props.counter <= 1){
      gsap.to(".intro .greeting .color",{width:"50vw", scale:"0.9", duration:4, ease:"Expo.easeInOut"})
    }
    else{
      gsap.set(".intro .greeting .color",{width:"50vw",scale:.9},"-=.5")
    }
  },[])

  // down arrow
  const [isArrowClicked,setIsArrowClicked] = useState(false);
  const arrHandler = ()=> setIsArrowClicked(true)

  return (
    <>
    {/* <AnimatePresence initial={false}> */}
      <PageTransition nameOfPage={nameOfPage} />
    {/* </AnimatePresence> */}

      <main className="homeContainer">
        <div className="intro">
          <section className="greeting">
            <AnimatePresence initial={true}>
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

            <div className="color"></div>
            {/* {scrollDir ? slideRight() : slideLeft()} */}
            {
              useEffect(()=>{
                if(scrollDir){
                  slideRight()
                }
                else{
                  slideLeft()
                }
              },[scrollDir])
            }


          </section>

          <section className="home-page">
            <div className="dotHome">
              <RGBLetters
                letterClass={letterClass}
                strArray={[".", "h", "o", "m", "e", "(", ")"]}
                idx={15}
              />
            </div>

            <div className="downArrow" >
              <CgArrowLongDown onClick={()=>setIsArrowClicked(true)} />
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
              <Link to="/contact" className="flat-button">
                CONTACT ME
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Home;
