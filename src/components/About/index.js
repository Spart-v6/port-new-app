import './index.scss';
import { motion } from 'framer-motion';
import PageTransition from '../PageTransition';
import { useState, useEffect } from 'react';
import RGBLetters from '../RGBLetters';

const About = () => {

    const [nameOfPage, setNameOfPage] = useState("About");

    
    const [letterClass, setLetterClass] = useState('text-animate');
    const onHover = () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }

    useEffect(() => {
        return onHover();
    }, [])

    const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };





    return(
        <>
        <PageTransition nameOfPage={nameOfPage}/>
        <div>

            <div className='container about-page'>
                <div className='about-back-tag'>
                    <h1>
                        <RGBLetters letterClass={letterClass} strArray={['.','a','b','o','u','t','_','m','e','(',')']} idx={15}/>
                    </h1>
                </div>

                <div className='about-container'>

                
                    <svg className="full_svg" viewBox="0 0 1312 2622" fill="none">
                        <motion.path id="path_1" 
                        d="M1101.86 5.00492C1286.65 4.19831 1390.91 102.797 1221.16 177.012C1051.4 251.227 731.483 238.022 434.966 291.995C218.448 331.407 100.107 404.493 124.048 466" 
                        stroke="white" strokeWidth="10" strokeMiterlimit="0" strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 0.5 }}
                        transition={transition}

                        />
                        <path id="path_2" d="M263 666C469.41 762.742 886.055 657.028 976.23 787.893C1010.54 837.683 976.863 891.303 957.88 915" stroke="white" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path id="path_3" d="M995.091 1132.83C1042.64 1167.62 1060.76 1208.16 989.682 1237.82C918.764 1267.42 832.969 1250.67 765.258 1227.75C692.869 1203.25 464.369 1120.4 285.803 1115.28C197.388 1112.75 105.906 1126.9 50.9555 1167.54C3.54844 1202.61 -7.94685 1251.18 20.0466 1291.95C50.551 1336.38 123.529 1362.52 206.459 1370.72C316.923 1381.65 382.768 1348.38 495.431 1339.05C647.814 1326.43 760.103 1379.73 794.954 1436" stroke="white" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path id="path_4" d="M802.41 1636C826.026 1717.57 753.345 1799.89 555.093 1786.46C435.57 1778.36 267.177 1753.16 149.231 1795.43C43.9105 1833.17 42.6569 1889.63 51.2307 1927.71" stroke="white" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="round"/>
                        <path id="path_5" d="M245 2146C270.836 2194.86 380.53 2309.09 523.479 2331.93C605.773 2345.08 729.43 2279.47 661.014 2231.89C660.354 2231.43 659.683 2230.96 659 2230.5C633.533 2213.17 594.772 2203.82 565.054 2211.93C513.874 2225.89 518.764 2303.46 557.912 2339.26C630.505 2405.64 787.028 2487.84 806.5 2619" stroke="white" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="round"/>
                    </svg>







                    <div className="about-me">
                        <p>I'm a front-end developer, designer, competitive programmer and a gamer from India</p>
                    </div>

                    
                    <div className="about-1">
                        <h1>Main skills</h1>
                        JavaScript, CSS, HTML, GSAP, Nodejs <br/>
                        C++, Python, Java
                    </div>
                    <div className="about-2">
                        <h1>Tools i've used</h1>
                        Sublime, Visual Studio <br/>
                        VS Code <br/>
                        Adobe Photoshop
                    </div>
                    <div className="about-3">
                        <h1>I can speak:</h1>
                        English Hindi
                        <h1>Music</h1>
                        Charlie Puth, Katy Perry, Blue, Britney Spears
                    </div>
                    <div className="about-4">
                        <h1>And of course: </h1>
                        Video Games <br/>
                        Competitive Programming <br/>
                        Badminton <br/>
                        Chess
                    </div>
                </div>


            </div>
        </div>
        </>
    )
}


export default About
