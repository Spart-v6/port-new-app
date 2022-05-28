import React, { useEffect, useState } from "react";
import PageTransition from '../../Components/PageTransition';
import locomotiveScroll from "locomotive-scroll";
import "./style.scss";
import './base.scss';
import { gsap } from "gsap-trial";

function About() {
    const [nameOfPage, setNameOfPage] = useState("About");

    useEffect(()=>{

        const scroll = new locomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true
        });

        scroll.on('scroll',e=>{
            var scr = e.scroll.y;

            // if(scr >= 0 && scr <= 449){ //s1
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }
            // else if(scr >= 450 && scr <= 1200){ //s2
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }
            // else if(scr >= 1201 && scr <= 1950){ //s3
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }
            // else if(scr >= 1951 && scr <= 2850){ //s4
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }
            // else if(scr >= 2851 && scr <= 3600){ //s5
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }
            // else if(scr >= 3601 && scr <= 4350){ //s6
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }
            // else if(scr >= 4351){ //s7
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }

            // if(scr > 400) {
            //     gsap.to("#hero-about",{duration:1.5, ease:"Power4.easeOut", background:"#231433"})
            //     gsap.to(".about-sec",{duration:1.5, ease:"Power4.easeOut", color:"#fff"})
            // }
            // else{
            //     gsap.to("#hero-about",{duration:1.5, ease:"Power4.easeOut", background:"#884dff"})
            //     gsap.to(".about-sec",{duration:1.5, ease:"Power4.easeOut", color:"#252627"})
            // }
        })
        

    },[])  
    



    return (
    <>
        <PageTransition nameOfPage={nameOfPage} />

        <div data-scroll-container className="hero-about" id="hero-about">
        
            <section className="about-sec first-about" data-scroll-section>
                <h1 data-scroll>.about()</h1>
                <div data-scroll className="about-me">
                    <p data-scroll data-scroll-speed="8">
                    I'm a  web developer based in India, having an attitude for creating elegant solutions. Passionate about learning new things.
                    </p>
                </div>

                <div className="img-container" data-scroll data-scroll-speed="5">
                    <div className="featured-img">
                        <img src="https://picsum.photos/id/237/536/354"/>
                    </div>
                </div>

                <svg viewBox="0 0 7 223" fill="none" className="line line1">
                    <line x1="3.5" y1="3.5" x2="3.49999" y2="219.5" stroke="#FD4157" stroke-width="7" stroke-linecap="round"/>
                </svg>

                <svg viewBox="0 0 7 235" fill="none" className="line line2">
                    <line x1="3.5" y1="3.5" x2="3.49999" y2="231.5" stroke="#E7AF5B" stroke-opacity="0.91" stroke-width="7" stroke-linecap="round"/>
                </svg>

                <svg viewBox="0 0 7 232" fill="none" className="line line3">
                    <line x1="3.5" y1="3.5" x2="3.5" y2="228.5" stroke="#7379FF" stroke-opacity="0.89" stroke-width="7" stroke-linecap="round"/>
                </svg>



            </section>

            <section className="second-about" data-scroll-section>

                <svg viewBox="0 0 7 173" fill="none" className="line line4">
                    <line x1="3.5" y1="3.5" x2="3.49999" y2="169.5" stroke="#F55858" stroke-opacity="0.91" stroke-width="7" stroke-linecap="round"/>
                </svg>


                <svg viewBox="0 0 7 157" fill="none" className="line line5">
                    <line x1="3.5" y1="3.5" x2="3.49999" y2="153.5" stroke="#50FF33" stroke-opacity="0.82" stroke-width="7" stroke-linecap="round"/>
                </svg>

                <svg viewBox="0 0 7 169" fill="none" className="line line6">
                    <line x1="3.5" y1="3.5" x2="3.49999" y2="165.5" stroke="#FFDE33" stroke-opacity="0.86" stroke-width="7" stroke-linecap="round"/>
                </svg>


                <div className="information">
                    <div className="skills">
                        <h2>Skills | year</h2>
                        <div className="sk">
                            <h6>Front-end development | 2 years</h6>
                            <h6>Back-end development | 1 year</h6>
                            <h6>UI design | 1 year</h6>
                        </div>
                    </div>
                    <div className="tools">
                        <h2>Tools | years</h2>
                        <div className="main-grid">
                            <div className="grid1">
                                <h6>Javascript | ~1 year</h6>
                                <h6>HTML/CSS | ~2 years</h6>
                                <h6>React.js |  &lt; 1 year</h6>
                                <h6>Node.js |  &lt; 1 year</h6>
                            </div>
                            <div className="grid2">
                                <h6>Python | ~2 years</h6>
                                <h6>C/C++ | ~2 years</h6>
                                <h6>Java | ~2 years</h6>
                            </div>
                            <div className="grid3">
                                <h6>Figma | ~1 year</h6>
                                <h6>Adobe Photoshop | ~1 year</h6>
                                <h6>Visual Studio Code | ~2 years</h6>
                            </div>
                        </div>
                    </div>
                    <div className="exp">
                        <h2>Experience</h2>
                        <p>
                            Intern | Full stack developer <br/>
                            @High Radius <br/>
                            Jan 2022 - May 2022
                        </p>
                    </div>
                    <div className="sometimes">
                        <h2>And sometimes</h2>
                        <div className="smt">
                            <h6>Badminton </h6>
                            <h6>Chess </h6>
                            <h6>Video games </h6>
                            <h6>Sci-fi / Adventure movies </h6>
                            <h6>CP </h6>
                        </div>
                    </div>
                </div>

                <svg viewBox="0 0 218 218" fill="none" className="Circ_">
                    <circle cx="109" cy="109" r="97" stroke="#4536F1" stroke-width="24"/>
                </svg>


            </section>

        </div>
    </>

    );
}

export default About;