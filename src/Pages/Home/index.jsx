import "./index.scss";
import { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RGBLetters from "../../Components/RGBLetters";
import PageTransition from "../../Components/PageTransition";
import { gsap } from "gsap-trial";
import { BsArrowDown } from 'react-icons/bs';


function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const strArray = [ "w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r", ];

  const onHover = () => {
    setTimeout(() => {  setLetterClass("text-animate-hover"); }, 2000);
  };

  useEffect(() => { return onHover();}, []);

  const [nameOfPage, setNameOfPage] = useState("Home");


  const [scrollDir, setScrollDir] = useState(0);
  // Scrolling up -> left -> 0
  // Scrolling dwn -> right -> 1

  window.addEventListener('wheel', (event)=>{
    if (event.deltaY < 0){
      setScrollDir(0); // scrolling up
    }
    else if (event.deltaY > 0){
      setScrollDir(1); // scrolling down
    }
  });

  // for down arrow
  function useSelector() {
    const ref = useRef();
    const q = useMemo(() => gsap.utils.selector(ref), [ref]);
    return [q, ref];
  }
  const [q, ref] = useSelector();

  useEffect(() => {
    gsap.to(q("#downArrow"), { scaleY: 0.2,
      transformOrigin: 'center bottom',
      borderBottomLeftRadius: '40%',
      ease: "Expo.easeOut" , repeat:-1});
  }, []);


  const slideColorRight = ()=>{
    gsap.to(".intro .greeting .color", {width:"100vw", duration: 1.5, ease:"Expo.easeInOut"})
    gsap.to(".intro .greeting .hello", {x:"55%", duration:1.4, ease:"Expo.easeInOut"})
    gsap.to("#text-reveal",{clipPath:'polygon(0px 100%, 100% 100%, 100% 0%, 0% 0%)',opacity:1 ,y:0,delay:.5 , stagger:.3, duration:1.5, ease:"Expo.easeOut"})
    gsap.to(".intro .text-zone .flat-button",{opacity:1, y:0, duration: .5, delay:1.4, ease:"Expo.easeOut"})
  }
  const slideColorLeft = ()=>{
    gsap.to(".intro .greeting .color", {width:"50vw", duration: 1.5, ease:"Expo.easeInOut"})
    gsap.to(".intro .greeting .hello", {x:0, duration:1.4, ease:"Expo.easeInOut"})
    gsap.to("#text-reveal",{clipPath:'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',opacity:0 ,y:50, stagger:.3, duration:1.5, ease:"Expo.easeOut"})
    gsap.to(".intro .text-zone .flat-button",{opacity:0, y:50, duration: .5, ease:"Expo.easeOut"})
  }

  const tl = gsap.timeline();
  
  // useEffect(()=>{
  //   tl.to('#char_H',{"stroke-dashoffset": 0},);
  //   console.log(document.getElementById("char_H").getTotalLength());
  // },[])
  

  return (
    <>

      <PageTransition nameOfPage={nameOfPage}/>
      
      <main className="wholeContainer">

        <div className="intro">
          <section className= "greeting">
            <div className="hello" id="hello">
              <span>Hey There!</span>

              {/* <div id="scroll-down" ref={ref}>
                <BsArrowDown id="downArrow" />
              </div> */}
              
            </div>
            <div className="color"></div>
            {scrollDir ? slideColorRight() : slideColorLeft()}
          </section>

          <section className="home-page">
            <div className="text-zone">
              <h1>
                <div id="text-reveal" className="dotHome">
                  <RGBLetters letterClass={letterClass} strArray={[".","h","o","m","e","(",")",]} idx={15}/>
                </div>
                <div id="text-reveal">
                  <span style={{ color: "#986ee8", fontSize: "70px" }}>I</span>
                  <span style={{ fontSize: "69px" }}>'m &nbsp;</span>
                    Ankur
                    <br />
                </div>
                <div id="text-reveal">
                  <span>Web Developer</span>
                </div>
              </h1>
              <h2 id="text-reveal">Front-end Developer/ Designer/ Competitive Coder/ Gamer</h2>
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
