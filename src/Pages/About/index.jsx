import React, { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import "./style.scss";
import './base.scss';

export default function About() {
  useEffect(()=>{

      const scroll = new locomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true
        });
    })  
    
    return (
        <div data-scroll-container>
        <section className="about-sec" data-scroll-section>
            <h1 data-scroll>Hey</h1>
            <p data-scroll>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque fuga labore exercitationem optio harum impedit provident voluptate! Quasi, voluptate pariatur.</p>
        </section>
        <section className="about-sec" data-scroll-section>
            <h2 data-scroll data-scroll-speed="1">What's up?</h2>
            <p data-scroll data-scroll-speed="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officia veniam quo quos maiores ipsam qui tenetur impedit! Ducimus, alias amet maxime beatae dolorem autem perferendis sed laborum hic itaque rerum at quisquam? Facilis pariatur quis laboriosam atque modi praesentium?</p>
        </section>
    </div>
    );
}
