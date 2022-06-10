import React from "react";
import { useEffect, useState } from "react";
import "./style.scss";
import locomotiveScroll from "locomotive-scroll";
import PageTransition from "../../Components/PageTransition";
import { CgArrowLongDown } from "react-icons/cg";
import { gsap } from "gsap-trial";
import anime from "animejs";
import { useInView } from 'react-intersection-observer';

function Project() {

  const [nameOfPage] = useState("Projects");


  const { ref :onePro,    inView: oneProInView, } = useInView();
  const { ref :oneProHead,    inView: oneProHeadInView, } = useInView();
  
  const { ref :twoPro,    inView: twoProInView, } = useInView();
  const { ref :twoProHead,    inView: twoProHeadInView, } = useInView();
  
  const { ref :threePro,  inView: threeProInView, } = useInView();
  const { ref :threeProHead,    inView: threeProHeadInView, } = useInView();
  

  const onePro_animate = ()=> gsap.to(".first-project .pOne h2",{duration: 1, ease:"Power4.easeOut", delay:2, opacity: 1,y: 0,});
  const oneProHead_animate = ()=> gsap.to(".first-project .image-one h2",{duration: 1, ease:"Power4.easeOut", delay:2, opacity: 1,y: 0,});

  const twoPro_animate = ()=> gsap.to(".second-project .pTwo h2",{duration: 1, ease:"Power4.easeOut", delay:2, opacity: 1,y: 0});
  const twoProHead_animate = ()=> gsap.to(".second-project .image-two h2",{duration: 1, ease:"Power4.easeOut", opacity: 1,y: 0},);

  useEffect(()=>{
    if(oneProInView) onePro_animate()
    if(oneProHeadInView) oneProHead_animate()

    if(twoProInView) twoPro_animate()
    if(twoProHeadInView) twoProHead_animate()


  },[oneProInView,oneProHeadInView, twoProInView,twoProHeadInView, ])



  useEffect(()=>{

      const scroll = new locomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true
      });
  },[])


  useEffect(()=>{
    var textWrapperP = document.querySelector('.ml6P .lettersP');
    textWrapperP.innerHTML = textWrapperP.textContent.replace(/\S/g, "<span class='letterP'>$&</span>");
    anime.timeline()
    .add({
      targets: '.ml6P .letterP',
      translateY: ["1.5em", 0],
      translateZ: 0,
      duration: 750,
      delay: (el, i) => 50 * i
    },)
    .add({
      targets: '.ml6P',
      opacity: 1,
      duration: 1000,
      easing: "easeOutExpo",
      // delay: 1000
    })
    gsap.to(".project-heading .about-project",{duration:1, ease:"Expo.easeInOut",y:0, opacity: 1})
  },[])
  

  return (
    <>
      <PageTransition nameOfPage={nameOfPage} />

        <div data-scroll-container className="projects-wrapper">

        <section className="p-sec project-heading" data-scroll-section>
            <h1 className="ml6P">
              <span className="text-wrapper-p">
                  <span className="lettersP">.projects()</span>
              </span>
            </h1>
            
            <div className="about-project">
              Over the course of my career, i've worked on several projects.<br/> Here are some of them:
            </div>
            <div className="downArrow" id="down-arrow" >
              <CgArrowLongDown/>
            </div>

            <div className="shapes">
              <svg viewBox="0 0 271 358" fill="none" className="c1">
                <circle cx="57" cy="144" r="214" fill="#1F1F1F"/>
              </svg>

              <svg viewBox="0 0 439 439" fill="none" className="c2">
                <circle cx="219.5" cy="219.5" r="219.5" fill="#1F1F1F"/>
              </svg>

              <svg viewBox="0 0 55 55" fill="none" className="sc1">
                <circle cx="27.5" cy="27.5" r="27.5" fill="#1F1F1F"/>
              </svg>

              <svg viewBox="0 0 222 276" fill="none" className="c3">
                <circle cx="110.5" cy="27.5" r="27.5" fill="#1F1F1F"/>
                <path d="M221.924 237.772C197.544 262.151 164.478 275.848 130 275.848C95.5219 275.848 62.4559 262.151 38.0761 237.772C13.6964 213.392 6.1294e-06 180.326 2.22486e-06 145.848C-1.67968e-06 111.37 13.6964 78.3036 38.0761 53.9239L65.6533 81.5011C48.5875 98.5669 39 121.713 39 145.848C39 169.982 48.5875 193.129 65.6533 210.194C82.7191 227.26 105.865 236.848 130 236.848C154.135 236.848 177.281 227.26 194.347 210.194L221.924 237.772Z" fill="#1F1F1F"/>
              </svg>


            </div>

        </section>

        <section className="p-sec first-project" data-scroll-section id="s2">
            <div data-scroll data-scroll-sticky data-scroll-target="#s2" data-scroll-speed="-2" data-scroll-repeat="true" className="pOne">
              <h2 ref={onePro}>01</h2>
            </div>

            <div data-scroll data-scroll-sticky data-scroll-target="#s2" data-scroll-speed="-2" data-scroll-repeat="true" className="image-one">
              <h2 ref={oneProHead}>Invoice App</h2>
              <img src="https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </div>

            <div className="detailsOne">
                <p>
                // Concept
                This project was a part of High Radius internship program, and the idea was to build an AI-Enabled FinTech B2B Invoice Management Application.
                The project is a web app to help the people working in the Accounts Receivable departments in their day-to-day activities.
                <br/>

                // My role
                I was responsible for creating full-stack application which utilizes the power of React and for backend, Java and Machine Learning.
                </p>
            </div>

            <div data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal" className="p-shapes-1">
              <svg viewBox="0 0 421 421" fill="none" className="f-c1">
                <circle cx="210.5" cy="210.5" r="210.5" fill="#8B3BDB"/>
              </svg>

              <svg viewBox="0 0 206 206" fill="none" className="f-c3">
                <circle cx="103" cy="103" r="103" fill="#8B3BDB"/>
              </svg>


            </div>
        </section>

        <section className="p-sec second-project" data-scroll-section id="pin2">
            <div data-scroll data-scroll-sticky data-scroll-target="#pin2" data-scroll-speed="-5" data-scroll-class="appear" data-scroll-repeat="true" className="pTwo">
              <h2 ref={twoPro}>02</h2>
            </div>

    
            <div className="image-two" id="one" data-scroll data-scroll-speed="3" data-scroll-sticky data-scroll-target="#pin2">
              <h2 ref={twoProHead}>Air Canvas</h2>
              <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </div>

            <div className="detailsTwo">
              <p>
              // Concept
              The main aim was to be able to draw anything on screen by capturing the motion of hands with a webcam and an additional gesture recognition feature.
              <br/>
              // My role
              I was responsible majorily for front-end to design the whole canvas using Python, Mediapipe and OpenCV and some part in training the model for gesture recognition.
              </p>
            </div>

            <div data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal" className="p-shapes-2">
              <svg viewBox="0 0 206 206" fill="none" className="s-c1">
                <circle cx="103" cy="103" r="103" fill="#8B3BDB"/>
              </svg>


            </div>
        </section>

        <section className="p-sec third-project" data-scroll-section id="pin3">
            <div data-scroll data-scroll-sticky data-scroll-target="#pin3" data-scroll-speed="-5" data-scroll-class="appear" data-scroll-repeat="true" className="pThree">
              <h2>03</h2>
            </div>

    
            <div className="image-three" id="one" data-scroll data-scroll-speed="3" data-scroll-sticky data-scroll-target="#pin3">
              <h2>Chat App</h2>
              <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </div>

            <div className="detailsThree">
              <p>
              // Concept
              The goal was to create a simple and secure messaging app from scratch. 
              <br/>
              // My role
              I was solely responsible for designing and creating the application. This is desktop application which is built  using C# and WPF and for storing messages, Firebase. For encryption/decryption, AES.
              </p>
            </div>

            <div className="p-shapes-3">
              <svg viewBox="0 0 277 277" fill="none">
                <circle cx="138.5" cy="138.5" r="138.5" fill="#8B3BDB"/>
              </svg>


            </div>

        </section>



        </div>
    </>
  );
}

export default Project;
