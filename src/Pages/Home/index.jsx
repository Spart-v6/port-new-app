import "./index.scss";
import { useEffect, useState, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RGBLetters from "../../Components/RGBLetters";
import PageTransition from "../../Components/PageTransition";
import { gsap } from "gsap-trial";
import { BsArrowDown } from "react-icons/bs";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const strArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

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

  window.addEventListener("wheel", (event) => {
    if (event.deltaY < 0) {
      setScrollDir(0); // scrolling up
      setCounterUp(1);
      setCounterDown(0);
    } else if (event.deltaY > 0) {
      setScrollDir(1); // scrolling down
      setCounterDown(1);
      setCounterUp(0);
    }
  });

  // for down arrow
  function useSelector() {
    const ref = useRef();
    const q = useMemo(() => gsap.utils.selector(ref), [ref]);
    return [q, ref];
  }
  const [q, ref] = useSelector();

  // useEffect(() => {
  //   gsap.to(q("#downArrow"), {
  //     scaleY: 0.2,
  //     transformOrigin: "center bottom",
  //     borderBottomLeftRadius: "40%",
  //     ease: "Expo.easeOut",
  //     repeat: -1,
  //   });
  // }, []);

  const slideColorRight = () => {
    if (counterDown === 1 && counterUp === 0) {
      gsap.to(".intro .greeting .color", {
        width: "100vw",
        duration: 1.5,
        ease: "Expo.easeInOut",
      });
      gsap.to(".intro .greeting .hello", {
        x: "55%",
        duration: 1.4,
        ease: "Expo.easeInOut",
      });
      gsap.to("#text-reveal", {
        clipPath: "polygon(0px 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        y: 0,
        delay: 0.5,
        stagger: 0.3,
        duration: 1.5,
        ease: "Expo.easeOut",
      });
      gsap.to(".intro .text-zone .flat-button", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 1.4,
        ease: "Expo.easeOut",
      });
    }
  };
  const slideColorLeft = () => {
    if (counterUp === 1 && counterDown === 0) {
      gsap.to(".intro .greeting .color", {
        width: "50vw",
        duration: 1.5,
        ease: "Expo.easeInOut",
      });
      gsap.to(".intro .greeting .hello", {
        x: 0,
        duration: 1.4,
        ease: "Expo.easeInOut",
      });
      gsap.to("#text-reveal", {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1.5,
        ease: "Expo.easeOut",
      });
      gsap.to(".intro .text-zone .flat-button", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        ease: "Expo.easeOut",
      });
    }
  };

  const tl = gsap.timeline();

  // useEffect(()=>{
  //   tl.to('#char_H',  {"stroke-dashoffset": 0, delay:0.1, duration:3, ease:"Expo.easeOut"},'-=0.19');
  //   tl.to('#char_E',  {"stroke-dashoffset": 0, delay:0.1, duration:3, ease:"Expo.easeOut"},'-=0.18');
  //   tl.to('#char_Y',  {"stroke-dashoffset": 0, delay:0.1, duration:3, ease:"Expo.easeOut"},'-=0.17');
  //   tl.to('#char_T',  {"stroke-dashoffset": 0, delay:0.1, duration:3, ease:"Expo.easeOut"},'-=0.16');
  //   tl.to('#char_H1', {"stroke-dashoffset": 0, delay:0.1, duration:3, ease:"Expo.easeOut"},'-=0.15');
  //   tl.to('#char_E1', {"stroke-dashoffset": 0, delay:0.1, duration:3, ease:"Expo.easeOut"},'-=0.14');
  //   tl.to('#char_R',  {"stroke-dashoffset": 0, delay:0.1, duration:3, ease:"Expo.easeOut"},'-=0.13');
  //   tl.to('#char_E2', {"stroke-dashoffset": 0, delay:0.1, duration:3, ease:"Expo.easeOut"},'-=0.12');
  //   tl.to('#char_',   {"stroke-dashoffset": 0, delay:0.1, duration:3, ease:"Expo.easeOut"},'-=0.11');

  //   // console.log(document.getElementById("char_").getTotalLength());

  // },[])

  return (
    <>
      <PageTransition nameOfPage={nameOfPage} />

      <main className="wholeContainer">
        <div className="intro">
          <section className="greeting">
            <div className="hello" id="hello">

            HEY THERE





            </div>
            <div className="color"></div>
            {scrollDir ? slideColorRight() : slideColorLeft()}
          </section>

          <section className="home-page">
            <div className="text-zone">
              <h1>
                <div id="text-reveal" className="dotHome">
                  <RGBLetters
                    letterClass={letterClass}
                    strArray={[".", "h", "o", "m", "e", "(", ")"]}
                    idx={15}
                  />
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
              <h2 id="text-reveal">
                Front-end Developer/ Designer/ Competitive Coder/ Gamer
              </h2>
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
