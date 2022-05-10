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
            <section className="about-sec first-about" data-scroll-section>
                <h1 data-scroll>.about_me()</h1>
                <div data-scroll className="about-me">
                    <p>
                    I'm a front-end developer, designer, competitive programmer and
                    a gamer from India
                    </p>
                </div>
            </section>
            <section className="about-sec smth-about-me" data-scroll-section>
                <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-14" data-scroll-class="appear" data-scroll-repeat="true" > Something about me</h2>
                <p data-scroll data-scroll-speed="2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa cumque quos itaque iste suscipit odio ratione quas culpa exercitationem laudantium quidem vel commodi eveniet quis optio ullam nihil fugit, et non molestiae. Totam, atque quos itaque quaerat vero id et corrupti dolorum, excepturi blanditiis officia laboriosam? Nobis officiis totam laboriosam cumque aperiam, maiores deleniti illo a eos ad sequi, repudiandae laborum porro. Quaerat similique at perferendis, tempore saepe, hic impedit quae dicta dolore vero dolorem numquam eos illo sequi nihil minima culpa voluptatum veniam? Magni a ratione enim laudantium animi neque. Voluptates fugiat sapiente ipsum, rem sint est commodi nisi.

                </p>
            </section>

            <section id="threeD" class="threeD" data-scroll-section>
                <h2>
                    <span data-scroll data-scroll-repeat data-scroll-speed="5">3</span>
                    <span data-scroll data-scroll-repeat data-scroll-speed="2">D</span>
                    <span data-scroll data-scroll-repeat data-scroll-speed="3">V</span>
                    <span data-scroll data-scroll-repeat data-scroll-speed="5">i</span>
                    <span data-scroll data-scroll-repeat data-scroll-speed="2">b</span>
                    <span data-scroll data-scroll-repeat data-scroll-speed="4">e</span>
                    <span data-scroll data-scroll-repeat data-scroll-speed="2">s</span>
                </h2>
                <div class="skewsec">
                <div
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="20"
                    data-scroll-target="#threeD"
                >
                    <span>Love the way you live</span>
                </div>
                </div>
                <div class="skewsec">
                <div
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="-20"
                    data-scroll-target="#threeD"
                >
                    <span class="">Live the way you love</span>
                </div>
                </div>
            </section>

            <section className="about-sec second-about" data-scroll-section>
                <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-14" data-scroll-class="appear" data-scroll-repeat="true" > Skills</h2>
                <p data-scroll data-scroll-speed="2">
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
                <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="10" data-scroll-class="appear" data-scroll-repeat="true">Tools</h2>
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

            <div className="footer">
                <h2>
                    <span>T</span>
                    <span>h</span>
                    <span>a</span>
                    <span>t</span>
                    <span>'</span>
                    <span>s</span>
                    <span>&nbsp;</span>
                    <span>a</span>
                    <span>l</span>
                    <span>l</span>
                    <span>&nbsp;</span>
                    <span>f</span>
                    <span>o</span>
                    <span>l</span>
                    <span>k</span>
                    <span>s</span>
                </h2>
            </div>
        
        </div>
    </>

    );
}
