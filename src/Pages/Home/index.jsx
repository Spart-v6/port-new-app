import "./index.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RGBLetters from "../../Components/RGBLetters";
import PageTransition from "../../Components/PageTransition";
import { gsap } from "gsap-trial";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const strArray = [ "w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r", ];

  const onHover = () => {
    setTimeout(() => {  setLetterClass("text-animate-hover"); }, 2000);
  };

  useEffect(() => { return onHover();}, []);

  const [nameOfPage, setNameOfPage] = useState("Home");

  const firstHead = {
    initial: {
      opacity: 0,
      transform: "translateY(250%)",
    },
    animate: {
      opacity: 1,
      transform: "translateY(0%)",
      transition: {
        delay: 2,
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const secondHead = {
    initial: {
      opacity: 0,
      transform: "translateY(250%)",
    },
    animate: {
      opacity: 1,
      transform: "translateY(0%)",
      transition: {
        delay: 2.2,
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const thirdHead = {
    initial: {
      opacity: 0,
      transform: "translateY(250%)",
    },
    animate: {
      opacity: 1,
      transform: "translateY(0%)",
      transition: {
        delay: 2.3,
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };


  return (
    <>

      <PageTransition nameOfPage={nameOfPage}/>
      
      <div>
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              {" "}
              <motion.div initial="initial" animate="animate" variants={firstHead}>
                <span style={{ color: "#986ee8", fontSize: "70px" }}>H</span>
                <span style={{ fontSize: "69px" }}>i</span>,
                <br />
              </motion.div>
              <motion.div initial="initial" animate="animate" variants={secondHead}>
                <span className={`${letterClass} _12`}>I</span>
                <span className={`${letterClass} _13`}>'m &nbsp;</span>
                {/* TODO: svg name */}
                  Ankur
                  <br />
              </motion.div>
              <motion.div initial="initial" animate="animate" variants={thirdHead}>
                <RGBLetters letterClass={letterClass} strArray={strArray} idx={15} />
              </motion.div>
            </h1>
            <h2>Front-end Developer/ Designer/ Competitive Coder/ Gamer</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;
