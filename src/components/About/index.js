import './index.scss';
import { motion } from 'framer-motion';
import PageTransition from '../PageTransition';
import { useState, useEffect, useRef } from 'react';
import RGBLetters from '../RGBLetters';
import SmoothScroll from '../Hooks/SmoothScroll';

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

            <div className='scrollPro'>
                <div className='about-back-tag'>
                    <h1>
                        <RGBLetters letterClass={letterClass} strArray={['.','a','b','o','u','t','_','m','e','(',')']} idx={15}/>
                    </h1>
                </div>

                <div className='about-container'>

                    <div className="about-me">
                        <p>I'm a front-end developer, designer, competitive programmer and a gamer from India</p>
                    </div>

                    
                    <section className="about-1">
                        <h1>Main skills</h1>
                        <span>
                        JavaScript, CSS, HTML, GSAP, Nodejs <br/>
                        C++, Python, Java
                        </span>
                    </section>
                    <section className="about-2">
                        <h1>Tools i've used</h1>
                        <span>
                            Sublime, Visual Studio <br/>
                            VS Code <br/>
                            Adobe Photoshop
                        </span>
                    </section>
                    <section className="about-3">
                        <h1>I can speak:</h1>
                        <span>
                            English Hindi
                            <h1>Music</h1>
                            Charlie Puth, Katy Perry, Blue, Britney Spears
                        </span>
                    </section>
                    <section className="about-4">
                        <h1>And of course: </h1>
                        <span>
                            Video Games <br/>
                            Competitive Programming <br/>
                            Badminton <br/>
                            Chess
                        </span>
                    </section>
                </div>


            </div>
        </div>
        </>
    )
}


export default About
