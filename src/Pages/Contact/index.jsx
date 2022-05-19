import PageTransition from "../../Components/PageTransition";
import { useState, useEffect, useRef } from "react";
import emailjs, { send } from "@emailjs/browser";
import CustomCursor from '../../Components/CustomCursor';
import "./style.scss";
import {motion} from "framer-motion";

function Contact() {
  const [nameOfPage, setNameOfPage] = useState("Contact");


  //Form
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_r51pv6c","template_vlea9p9",refForm.current,"8AUwRY3fQK2dczNsj")
      .then((result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <>
      <PageTransition nameOfPage={nameOfPage} />
      {/* <CustomCursor/> */}

      <div className="hero-contact">

        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>

            <div className="input-info">
              <h2>Let's talk. </h2>
              <span>Enter your details.</span>
            </div>

            <div className="input-container">

              <div className="input-field-name">
                <input type="text" id="name" className="form__input" required autoComplete="off" placeholder=" " />
                <label htmlFor="name" className="form__label">Name</label>
              </div>

              <div className="input-field-email">
                <input type="email" id="email" className="form__input" required autoComplete="off" placeholder=" "/>
                <label htmlFor="email" className="form__label">Email</label>
              </div>
            
              <div className="input-field-msg">
                <textarea type="text" name="msg" className="form__input" id="msg" autoComplete="off"  placeholder=" "/>
                <label htmlFor="msg" className="form__label">Message</label>
              </div>



            </div>

            <motion.div whileTap={{scale: 0.8}} className="BtnParent">
              <button class="up">Send</button>
            </motion.div>
          </form>

          <div className="leftDetails">
            Message
          </div>

        </div>

        
      </div>
    </>
  );
}

export default Contact;
