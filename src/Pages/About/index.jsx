import React, { useEffect, useState } from "react";
import PageTransition from '../../Components/PageTransition';
import locomotiveScroll from "locomotive-scroll";
import "./style.scss";
import './base.scss';
import { gsap } from "gsap-trial";

export default function About() {
    const [nameOfPage, setNameOfPage] = useState("About");

    useEffect(()=>{

        const scroll = new locomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true
        });

        scroll.on('scroll',e=>{
            var scr = e.scroll.y;
            /*
            0th : 0 to 449

            1st 450 to 1200

            2nd 1201 to 1950

            3rd 1951 to 2850

            4th 2851 to 3600

            5th 3601 to 4500

            6th 4501 to 4840

            */

            if(scr >= 0 && scr <= 449){ //s1
                gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#ff6262"})
                gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
            }
            else if(scr >= 450 && scr <= 1200){ //s2
                gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#ff6262"})
                gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
            }
            else if(scr >= 1201 && scr <= 1950){ //s3
                gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#ff6262"})
                gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
            }
            else if(scr >= 1951 && scr <= 2850){ //s4
                gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#ff6262"})
                gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
            }
            else if(scr >= 2851 && scr <= 3600){ //s5
                gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#ff6262"})
                gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
            }
            else if(scr >= 1951 && scr <= 2850){ //s6
                gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#ff6262"})
                gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
            }
            else if(scr >= 1951 && scr <= 2850){ //s7
                gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#ff6262"})
                gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
                gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #ff6262", background: "transparent"})
            }

            if(scr > 400) {
                gsap.to("#hero-about",{duration:1.5, ease:"Power4.easeOut", background:"#252627"})
                gsap.to(".about-sec",{duration:1.5, ease:"Power4.easeOut", color:"#fff"})
            }
            else{
                gsap.to("#hero-about",{duration:1.5, ease:"Power4.easeOut", background:"#cf1313"})
                gsap.to(".about-sec",{duration:1.5, ease:"Power4.easeOut", color:"#252627"})
            }
        })
        

    },[])  
    



    return (
    <>
        <PageTransition nameOfPage={nameOfPage} />

        <div data-scroll-container className="hero-about" id="hero-about">

            <nav className="rightBar">
                <ul>
                    <li id="s1">
                        <div></div>
                    </li>
                    <li id="s2">
                        <div></div>
                    </li>
                    <li id="s3">
                        <div></div>
                    </li>
                    <li id="s4">
                        <div></div>
                    </li>
                    <li id="s5">
                        <div></div>
                    </li>
                    <li id="s6">
                        <div></div>
                    </li>
                    <li id="s7">
                        <div></div>
                    </li>
                </ul>
            </nav>



            <section className="about-sec first-about" data-scroll-section>
                <h1 data-scroll>.about()</h1>
                <div data-scroll className="about-me">
                    <p data-scroll data-scroll-speed="8">
                    I'm a front-end developer, designer, competitive programmer and
                    a gamer from India
                    </p>
                </div>
            </section>
            
            <section className="about-sec smth-about-me" data-scroll-section>
                <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="6" data-scroll-class="appear" data-scroll-repeat="true" > me</h2>
                <p data-scroll data-scroll-speed="2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cumque quos itaque iste suscipit odio ratione quas culpa exercitationem laudantium quidem vel commodi eveniet quis optio ullam nihil fugit, et non molestiae. Totam, atque quos itaque quaerat vero id et corrupti dolorum, excepturi blanditiis officia laboriosam? Nobis officiis totam laboriosam cumque aperiam, maiores deleniti illo a eos ad sequi, repudiandae laborum porro. Quaerat similique at perferendis, tempore saepe, hic impedit quae dicta dolore vero dolorem numquam eos illo sequi nihil minima culpa voluptatum veniam? Magni a ratione enim laudantium animi neque. Voluptates fugiat sapiente ipsum, rem sint est commodi nisi.

                </p>
            </section>

            <section id="threeD" className="threeD" data-scroll-section>
                <h2>
                    <span data-scroll data-scroll-repeat data-scroll-speed="5">3</span>
                    <span data-scroll data-scroll-repeat data-scroll-speed="2">D</span>
                    <span data-scroll data-scroll-repeat data-scroll-speed="3">V</span>
                    <span data-scroll data-scroll-repeat data-scroll-speed="5">i</span>
                    <span data-scroll data-scroll-repeat data-scroll-speed="2">b</span>
                    <span data-scroll data-scroll-repeat data-scroll-speed="4">e</span>
                    <span data-scroll data-scroll-repeat data-scroll-speed="2">s</span>
                </h2>
                <div className="skewsec">
                    <div
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="20"
                        data-scroll-target="#threeD"
                    >
                        <span>Love the way you live</span>
                    </div>
                </div>
                <div className="skewsec">
                    <div
                        data-scroll
                        data-scroll-direction="horizontal"
                        data-scroll-speed="-20"
                        data-scroll-target="#threeD"
                    >
                        <span>Live the way you love</span>
                    </div>
                </div>
            </section>

            <section className="about-sec second-about" data-scroll-section>
                <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-5" data-scroll-class="appear" data-scroll-repeat="true" > Skills</h2>
                <p data-scroll data-scroll-speed="4">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cumque quos itaque iste suscipit odio ratione quas culpa exercitationem laudantium quidem vel commodi eveniet quis optio ullam nihil fugit, et non molestiae. Totam, atque quos itaque quaerat vero id et corrupti dolorum, excepturi blanditiis officia laboriosam? Nobis officiis totam laboriosam cumque aperiam, maiores deleniti illo a eos ad sequi, repudiandae laborum porro. Quaerat similique at perferendis, tempore saepe, hic impedit quae dicta dolore vero dolorem numquam eos illo sequi nihil minima culpa voluptatum veniam? Magni a ratione enim laudantium animi neque. Voluptates fugiat sapiente ipsum, rem sint est commodi nisi.
                    <br/>
                    JavaScript, CSS, HTML, GSAP, Nodejs <br />
                    C++, Python, Java
                </p>
            </section>
            
            <section className="about-sec third-about" data-scroll-section>
                <p data-scroll data-scroll-speed="2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at dolor tenetur, voluptatem obcaecati alias quis adipisci dolores commodi labore nisi maiores, recusandae, quidem maxime hic ratione placeat fuga perspiciatis earum iure rerum veniam quae consequuntur minima! Voluptate sunt, possimus provident quaerat adipisci necessitatibus beatae est amet sint neque ipsa unde ratione pariatur mollitia eveniet facere recusandae nisi officia aut soluta! Eveniet quasi eos nulla eligendi consequatur doloribus reiciendis nemo error aut perspiciatis soluta ab consectetur animi harum nesciunt commodi officiis incidunt omnis sequi, nam architecto, hic et odio! Dolorum repellat debitis quod. Similique obcaecati consequatur sed quas! Obcaecati, asperiores.
                    <br/>   
                    Sublime, Visual Studio <br />
                    VS Code <br />
                    Adobe Photoshop
                </p>
                <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="12" data-scroll-class="appear" data-scroll-repeat="true">Tools</h2>
            </section>
        
            <section className="about-sec fourth-about" data-scroll-section>
                <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-10" data-scroll-class="appear" data-scroll-repeat="true">And of course</h2>
                <p data-scroll data-scroll-speed="2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit eos ratione, itaque, est in molestiae sapiente quos veritatis illum, fugiat maiores. Itaque nam animi, excepturi veniam, alias cupiditate ducimus quos asperiores iste libero incidunt deserunt debitis. Fuga quam repudiandae iste optio et rem reiciendis quae sapiente ab debitis sequi facere, nostrum quaerat quisquam. Vitae exercitationem nisi ullam nostrum voluptatem aliquid, laudantium illum, inventore temporibus, voluptatum assumenda deleniti ipsa. Saepe magnam ipsam, sit doloribus aspernatur itaque rem ex dolore. Deserunt nihil, atque sequi soluta incidunt, architecto dicta expedita natus consequuntur facere consectetur quidem! Id modi, obcaecati soluta beatae error magnam alias.
                    <br/>
                    Video Games <br />
                    Competitive Programming <br />
                    Badminton <br />
                    Chess
                </p>
            </section>

            <section className="foot" data-scroll-section>
                <h2 data-scroll data-scroll-repeat>
                <span data-scroll data-scroll-delay="0.200"  data-scroll-speed="5">T</span>
                <span data-scroll data-scroll-delay="0.195" data-scroll-speed="5">H</span>
                <span data-scroll data-scroll-delay="0.185" data-scroll-speed="5">A</span>
                <span data-scroll data-scroll-delay="0.175" data-scroll-speed="5">T</span>
                <span data-scroll data-scroll-delay="0.165" data-scroll-speed="5">'</span>
                <span data-scroll data-scroll-delay="0.155" data-scroll-speed="5">S</span>
                <span data-scroll data-scroll-delay="0.145" data-scroll-speed="5">&nbsp;</span>
                <span data-scroll data-scroll-delay="0.135" data-scroll-speed="5">A</span>
                <span data-scroll data-scroll-delay="0.125" data-scroll-speed="5">L</span>
                <span data-scroll data-scroll-delay="0.115" data-scroll-speed="5">L</span>
                <span data-scroll data-scroll-delay="0.100" data-scroll-speed="5">&nbsp;</span>
                <span data-scroll data-scroll-delay="0.095" data-scroll-speed="5">F</span>
                <span data-scroll data-scroll-delay="0.085" data-scroll-speed="5">O</span>
                <span data-scroll data-scroll-delay="0.075" data-scroll-speed="5">L</span>
                <span data-scroll data-scroll-delay="0.065" data-scroll-speed="5">K</span>
                <span data-scroll data-scroll-delay="0.055" data-scroll-speed="5">S</span>
                </h2>
            </section>
        
        </div>
    </>

    );
}
