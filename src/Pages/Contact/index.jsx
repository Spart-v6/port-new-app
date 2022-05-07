import PageTransition from "../../Components/PageTransition";
import { useState, useEffect, useRef } from "react";
import emailjs, { send } from "@emailjs/browser";
import "./style.scss";

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

      <div>
        <div className="contact-page">
          <div className="text-zone">
            <h1>
              .contact_me()
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
