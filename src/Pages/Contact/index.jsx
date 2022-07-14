import PageTransition from "../../Components/PageTransition";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.scss";
import {motion} from "framer-motion";
import { gsap } from "gsap-trial";
import $ from "jquery";

function Contact(props) {
  const [nameOfPage] = useState("Contact");


  //Form
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_r51pv6c","template_vlea9p9",refForm.current,"8AUwRY3fQK2dczNsj")
      .then((result) => {
          // console.log(result);
          $("#name").val('');
          $("#email").val('');
          $("#msg").val('');
          gsap.to("#circ1",{transform:"translate(-160px, -160px)", opacity: 0, duration: 1, ease: "Expo.easeInOut" });
          gsap.to("#circ2",{transform:"translate(160px, 160px)", opacity: 0, duration: 1, ease: "Expo.easeInOut" });
          gsap.to("#path2",{transform: "scale(1, 1) translate(0%, 0%)", duration: 1, ease: "Expo.easeInOut"});
          gsap.to("#path2",{stroke:"#3dd022", duration: .7, delay: .7, ease: "Expo.easeInOut"});
          gsap.to("#path1",{stroke:"#3dd022", duration: .7, delay: .7, ease: "Expo.easeInOut"});
          gsap.to("#path2",{stroke:"#a32dff", duration: .5, delay: 1.3, ease: "Expo.easeInOut"});
          gsap.to("#path1",{stroke:"#a32dff", duration: .5, delay: 1.3, ease: "Expo.easeInOut"});
          
          // resetting
          gsap.to("#path2",{transform: "scale(1, -1) translate(0%, -3%)", delay: 2, duration: 1, ease: "Expo.easeInOut"});
          gsap.to("#circ1",{duration:1, transform:"translate(0,0)", opacity:1, delay:2,  ease:"Expo.easeInOut"},);
          gsap.to("#circ2",{duration:1, transform:"translate(0,0)", opacity:1, delay:2,  ease:"Expo.easeInOut"},);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  var initialDone = false;

  useEffect(()=>{
    if(props.counter >= 2){
      console.log(props.counter);
      initialDone = true; // eslint-disable-line
    } 

  },[props.counter])

  

  useEffect(() => {

    if(initialDone){
      // console.log("Travelling " + initialDone);
      const tl = gsap.timeline();
      
      tl.to(".contact-form",{scale:1, duration:1, ease:"Power4.easeOut"},"+=2.8")
      
      .to("#path1", {strokeDashoffset: 0, duration: 1, ease:"Circ.easeInOut"},'-=1')
      .to("#path2", {strokeDashoffset: 0, duration: 1, ease:"Circ.easeInOut"},'-=1')
      .to("#path2", {transform:"scale(1, -1) translate(0%, -3%)", duration:1, ease: "Expo.easeInOut"},)
      .to("#circ1",{duration:1, transform:"translate(0,0)", opacity:1, delay:1,  ease:"Expo.easeInOut"},"-=2")
      .to("#circ2",{duration:1, transform:"translate(0,0)", opacity:1, delay:1,  ease:"Expo.easeInOut"},'-=2')
      
      .to("#leftBigCirc",{top: 0, left: 0,opacity:1, duration:1, delay:1, ease:"Expo.easeInOut"},'-=2')
      .to("#rightBigCirc",{bottom:0, right: 0,opacity:1, duration:1, delay:1, ease:"Expo.easeInOut"},'-=2')
      
      
      .to("#animateMe",{y:0, opacity:1, delay:1, duration:1, stagger:.1, ease:"Expo.easeInOut"},'-=2')
    }
    else{
      // console.log("First time " + initialDone);
      const tl = gsap.timeline();

      tl.to(".contact-form",{scale:1, duration:1, ease:"Power4.easeOut"},)

      .to("#path1", {strokeDashoffset: 0, duration: 1, ease:"Circ.easeInOut"},'-=1')
      .to("#path2", {strokeDashoffset: 0, duration: 1, ease:"Circ.easeInOut"},'-=1')
      .to("#path2", {transform:"scale(1, -1) translate(0%, -3%)", duration:1, ease: "Expo.easeInOut"},)
      .to("#circ1",{duration:1, transform:"translate(0,0)", opacity:1, delay:1,  ease:"Expo.easeInOut"},"-=2")
      .to("#circ2",{duration:1, transform:"translate(0,0)", opacity:1, delay:1,  ease:"Expo.easeInOut"},'-=2')

      .to("#leftBigCirc",{top: 0, left: 0,opacity:1, duration:1, delay:1, ease:"Expo.easeInOut"},'-=2')
      .to("#rightBigCirc",{bottom:0, right: 0,opacity:1, duration:1, delay:1, ease:"Expo.easeInOut"},'-=2')


      .to("#animateMe",{y:0, opacity:1, delay:1, duration:1, stagger:.1, ease:"Expo.easeInOut"},'-=2')
    }


  },[]) // eslint-disable-line





  return (
    <>

      
       
      <PageTransition nameOfPage={nameOfPage}/>


      <div className="hero-contact">

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>

              <div className="input-info">
                <h2 id="animateMe">Let's talk. </h2>
                <h4 id="animateMe">Drop a message :)</h4>
              </div>

              <div className="input-container">

                <div className="input-field-name" id="animateMe">
                  <input type="text" id="name" name="name" className="form__input" required autoComplete="off" placeholder=" " />
                  <label htmlFor="name" className="form__label">Name</label>
                </div>

                <div className="input-field-email" id="animateMe">
                  <input type="email" id="email" name="email" className="form__input" required autoComplete="off" placeholder=" "/>
                  <label htmlFor="email" className="form__label">Email</label>
                </div>
              
                <div className="input-field-msg" id="animateMe">
                  <textarea type="text" name="message" className="form__input" id="msg" autoComplete="off"  placeholder=" "/>
                  <label htmlFor="msg" className="form__label">Message</label>
                </div>



              </div>

              <div className="BtnParent">
                <motion.div whileTap={{scale: 0.8}}>
                  <button className="up" type="submit" id="animateMe">Send Message</button>
                </motion.div>
                <a href="mailto:ankur.atwork24@gmail.com" id="animateMe">ankur.atwork24@gmail.com</a>
              </div>

            </form>

            <div className="leftDetails">

              <svg viewBox="0 0 383 264" fill="none" >
                  <path d="M377.5 259H5.5V5.5H377.5V259Z" stroke="#A32DFF" strokeWidth="10" strokeLinecap="round" id="path1"/>
                  <path d="M377 6L193 145.5L5.5 6" stroke="#A32DFF" strokeWidth="10" strokeLinecap="round" id="path2"/>
                  <path d="M224 254C224 234.433 227.854 215.058 235.342 196.98C242.83 178.903 253.805 162.477 267.641 148.641C281.477 134.805 297.903 123.83 315.98 116.342C334.058 108.854 353.433 105 373 105V254H224Z" fill="#EB4A34" id="circ2"/>
                  <path d="M6 155C25.567 155 44.9423 151.146 63.0198 143.658C81.097 136.17 97.523 125.195 111.359 111.359C125.195 97.523 136.17 81.097 143.658 63.02C151.146 44.942 155 25.567 155 6H6V155Z" fill="#A32DFF" id="circ1"/>
              </svg>

            </div>

          </div>

          <div id="leftBigCirc">
            <svg width="350" height="350" viewBox="0 0 350 350" fill="none">
              <path d="M0 350C45.9628 350 91.4752 340.947 133.939 323.358C176.402 305.768 214.987 279.988 247.488 247.488C279.988 214.987 305.768 176.402 323.358 133.94C340.947 91.4745 350 45.9628 350 0H0V350Z" fill="#A32DFF"/>
            </svg>
          </div>
            
          <div id="rightBigCirc">
            <svg width="350" height="350" viewBox="0 0 350 350" fill="none">
              <path d="M0 350C0 304.037 9.05305 258.526 26.6423 216.06C44.2316 173.598 70.0117 135.013 102.512 102.512C135.013 70.0117 173.598 44.2316 216.06 26.6423C258.526 9.05305 304.037 0 350 0V350H0Z" fill="#EB4A34"/>
            </svg>
          </div>


          
      </div>
          

      

    </>
  );
}

export default Contact;
