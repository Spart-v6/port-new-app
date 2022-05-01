import PageTransition from "../../Components/PageTransition";
import { useState, useEffect, useRef } from "react";
import RGBLetters from "../../Components/RGBLetters";
import "./index.scss";
import emailjs, { send } from "@emailjs/browser";
import { AnimatePresence } from "framer-motion";

function Contact() {
  const [nameOfPage, setNameOfPage] = useState("Contact");

  const [letterClass, setLetterClass] = useState("text-animate");
  const onHover = () => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
  };

  useEffect(() => {
    return onHover();
  }, []);

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
    {/* <AnimatePresence initial={false}> */}
      <PageTransition nameOfPage={nameOfPage} />
    {/* </AnimatePresence> */}

      <div>
        <div className="contact-page">
          <div className="text-zone">
            <h1>
              <RGBLetters letterClass={letterClass} strArray={[".","c","o","n","t","a","c","t","_","m","e","(",")",]} idx={15}/>
            </h1>
            <div className="short-contact-text">
              <h2>Hey, nice to meet you</h2>
              <span>
                Have a question or just want to get in touch? Drop a message :)
              </span>
            </div>
          </div>

          <div className="socialMediaHandles">
            <h2>You can find me here:</h2>
            <p>Put ur social media handles here</p>
          </div>
        </div>

        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" autoComplete="off" required/>
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" autoComplete="off" required/>
              </li>
              <li className="textInput">
                <input type="text" name="subject" placeholder="Subject" autoComplete="off" required />
              </li>
              <li>
                <textarea name="message" placeholder="Your Message" autoComplete="off" required ></textarea>
              </li>
              <li>
                <input type="submit" className="btn" value="Send" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
