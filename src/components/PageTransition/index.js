import { motion } from 'framer-motion'
import './index.scss';

const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
      position:'fixed',
      right:0,
    },
    animate: {
      height: 0,
      overflow:'hidden',
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
};

const textContainer = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            duration: 0.25,
            when: "afterChildren",
        },
        transitionEnd:{
            height:0,
        }
    },
};

const text = {
    initial: {
        y: 40,
    },
    animate: {
        y: 80,
        transition: {
            duration: 1.5,
            ease: [0.87, 0, 0.13, 1],
        },
    },
};


const PageTransition = (props) => {
    return (
        <div className="load-page">
            <motion.div
                className="load-screen"
                initial="initial"
                animate="animate"
                variants={blackBox}
                // onAnimationStart={() => document.body.classList.add("after-effect")}
                // onAnimationComplete={() => document.body.classList.remove("after-effect")}
            >

            <motion.svg variants={textContainer}  className="motionSvg">
                <pattern
                    id="pattern"
                    patternUnits="userSpaceOnUse"
                    width={750}
                    height={800}
                    style={{color:"white"}}
                >
                    <rect className="svg1" />
                    <motion.rect  variants={text} className="svg2" />
                </pattern>
                <text
                    className="text1"
                    x="45%" y="45%" textAnchor="middle"
                    style={{ fill: "url(#pattern)" }}
                >
                    {props.nameOfPage}
                </text>
            </motion.svg>

            </motion.div>
            

        </div>
    );
}


export default PageTransition