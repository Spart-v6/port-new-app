import React from "react";
import { useEffect, useState } from "react";
import "./style.scss";
import locomotiveScroll from "locomotive-scroll";
import PageTransition from "../../Components/PageTransition";
import $ from 'jquery';
import * as PIXI from 'pixi.js'

function Project() {

  const [nameOfPage, setNameOfPage] = useState("Projects");

  useEffect(()=>{

      const scroll = new locomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true
      });

  },[])  
  

  return (
    <>
      <PageTransition nameOfPage={nameOfPage} />

        <div data-scroll-container className="projects-wrapper">

        <section className="p-sec project-heading" data-scroll-section>
            <h1 data-scroll>.projects()</h1>
            <span data-scroll className="about-me" data-scroll-speed="3">
              Over the course of my career, i've worked on several projects. Here are some of them:
            </span>
        </section>

        <section className="p-sec first-project" data-scroll-section id="s2">
            <div data-scroll data-scroll-sticky data-scroll-target="#s2" data-scroll-speed="-2" data-scroll-repeat="true" className="pOne">
              <h2>01</h2>
            </div>

            <div className="image-one" data-scroll data-scroll-sticky data-scroll-target="#s2" data-scroll-speed="-2" data-scroll-repeat="true">
              <h2>Invoice App</h2>
              <img src="https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </div>

            <div className="detailsOne">
                <p>
                // Concept
                This project was a part of High Radius internship program, and the idea was to build an AI-Enabled FinTech B2B Invoice Management Application.
                The project is a web app to help the people working in the Accounts Receivable departments in their day-to-day activities.

                // My role
                I was responsible for creating full-stack application which utilizes the power of React and for backend, Java and Machine Learning.
                </p>
            </div>
        </section>

        <section className="p-sec second-project" data-scroll-section id="pin2">
            <div data-scroll data-scroll-sticky data-scroll-target="#pin2" data-scroll-speed="-5" data-scroll-class="appear" data-scroll-repeat="true" className="pTwo">
              <h2>02</h2>
            </div>

    
            <div class="image-two" id="one" data-scroll data-scroll-speed="3" data-scroll-sticky data-scroll-target="#pin2">
              <h2>Air Canvas</h2>
              <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </div>

            <div className="detailsTwo">
              <p>
              // Concept
              The main aim was to be able to draw anything on screen by capturing the motion of hands with a webcam and an additional gesture recognition feature.

              // My role
              I was responsible majorily for front-end to design the whole canvas using Python, Mediapipe and OpenCV and some part in training the model for gesture recognition.
              </p>
            </div>
        </section>

        <section className="p-sec third-project" data-scroll-section id="pin3">
            <div data-scroll data-scroll-sticky data-scroll-target="#pin3" data-scroll-speed="-5" data-scroll-class="appear" data-scroll-repeat="true" className="pThree">
              <h2>03</h2>
            </div>

    
            <div class="image-three" id="one" data-scroll data-scroll-speed="3" data-scroll-sticky data-scroll-target="#pin3">
              <h2>Chat App</h2>
              <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </div>

            <div className="detailsThree">
              <p>
              // Concept
              The goal was to create a simple and secure messaging app from scratch. 

              // My role
              I was solely responsible for designing and creating the application. This is desktop application which is built  using C# and WPF and for storing messages, Firebase. For encryption/decryption, AES.
              </p>
            </div>
        </section>



        </div>
    </>
  );
}

export default Project;
