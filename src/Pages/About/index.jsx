import React, { useEffect, useState } from "react";
import PageTransition from '../../Components/PageTransition';
import locomotiveScroll from "locomotive-scroll";
import "./style.scss";
import './base.scss';

export default function About() {
    const [nameOfPage, setNameOfPage] = useState("About");
  useEffect(()=>{

      const scroll = new locomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true
        });
    },[])  
    
    return (
    <>
        <PageTransition nameOfPage={nameOfPage} />

        <div data-scroll-container className="hero-about">
            <section className="about-sec" data-scroll-section>
                <h1 data-scroll>.about_me()</h1>
                <div data-scroll className="about-me">
                    <p>
                    I'm a front-end developer, designer, competitive programmer and
                    a gamer from India
                    </p>
                </div>
            </section>
            <section className="about-sec" data-scroll-section>
                <h2 data-scroll data-scroll-speed="1">Main skills</h2>
                <p data-scroll data-scroll-speed="2">
                    JavaScript, CSS, HTML, GSAP, Nodejs <br />
                    C++, Python, Java
                </p>
            </section>
            <section className="about-sec" data-scroll-section>
                <h2 data-scroll data-scroll-speed="1">Tools i've used</h2>
                <p data-scroll data-scroll-speed="2">
                    Sublime, Visual Studio <br />
                    VS Code <br />
                    Adobe Photoshop
                </p>
            </section>
        
            <section className="about-sec" data-scroll-section>
                <h2 data-scroll data-scroll-speed="1">And of course: </h2>
                <p data-scroll data-scroll-speed="2">
                    Video Games <br />
                    Competitive Programming <br />
                    Badminton <br />
                    Chess
                </p>
            </section>
        
        </div>
    </>

    );
}
