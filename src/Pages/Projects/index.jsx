import React from "react";
import { useEffect, useState } from "react";
import "./style.scss";
import locomotiveScroll from "locomotive-scroll";
import PageTransition from "../../Components/PageTransition";

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
              Here are some of my projects.
            </span>
        </section>

        <section className="p-sec first-project" data-scroll-section id="s2">
            <div data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2"  data-scroll-repeat="true">
              <h2>Project 1</h2>
            </div>

            <div className="image-one" data-scroll data-scroll-sticky data-scroll-target="#s2" data-scroll-speed="3">
              <img src="https://images.unsplash.com/photo-1499955085172-a104c9463ece?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </div>


            <p data-scroll data-scroll-speed="2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cumque quos itaque iste suscipit odio ratione quas culpa exercitationem laudantium quidem vel commodi eveniet quis optio ullam nihil fugit, et non molestiae. Totam, atque quos itaque quaerat vero id et corrupti dolorum, excepturi blanditiis officia laboriosam? Nobis officiis totam laboriosam cumque aperiam, maiores deleniti illo a eos ad sequi, repudiandae laborum porro. Quaerat similique at perferendis, tempore saepe, hic impedit quae dicta dolore vero dolorem numquam eos illo sequi nihil minima culpa voluptatum veniam? Magni a ratione enim laudantium animi neque. Voluptates fugiat sapiente ipsum, rem sint est commodi nisi.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, amet id! Nesciunt rem mollitia nobis velit similique possimus dolores eum vero fuga! Minima labore ipsum similique, cupiditate voluptatum quae! Libero totam unde expedita repellendus, accusantium aliquid, facere corporis culpa est doloremque odio natus temporibus architecto quas deleniti enim quae tempora nostrum optio dolor quaerat et odit. Est, ab nulla? Saepe consectetur
            </p>
        </section>

        <section className="p-sec second-project" data-scroll-section id="pin2">
            <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5" data-scroll-class="appear" data-scroll-repeat="true" > Project 2</h2>

    
            <div class="image-two" id="one" data-scroll data-scroll-speed="3" data-scroll-sticky data-scroll-target="#pin2">
              <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </div>

            <p data-scroll data-scroll-speed="4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cumque quos itaque iste suscipit odio ratione quas culpa exercitationem laudantium quidem vel commodi eveniet quis optio ullam nihil fugit, et non molestiae. Totam, atque quos itaque quaerat vero id et corrupti dolorum, excepturi blanditiis officia laboriosam? Nobis officiis totam laboriosam cumque aperiam, maiores deleniti illo a eos ad sequi, repudiandae laborum porro. Quaerat similique at perferendis, tempore saepe, hic impedit quae dicta dolore vero dolorem numquam eos illo sequi nihil minima culpa voluptatum veniam? Magni a ratione enim laudantium animi neque. Voluptates fugiat sapiente ipsum, rem sint est commodi nisi.
                <br/>
                JavaScript, CSS, HTML, GSAP, Nodejs <br />
                C++, Python, Java
            </p>
        </section>

        <section>
          
        </section>


        </div>
    </>
  );
}

export default Project;
