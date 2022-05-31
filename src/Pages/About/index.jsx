import React, { useEffect, useState } from "react";
import PageTransition from '../../Components/PageTransition';
import locomotiveScroll from "locomotive-scroll";
import "./style.scss";
import './base.scss';
import { gsap } from "gsap-trial";

function About() {
    const [nameOfPage, setNameOfPage] = useState("About");

    useEffect(()=>{

        const scroll = new locomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true
        });

        scroll.on('scroll',e=>{
            var scr = e.scroll.y;

            // if(scr >= 0 && scr <= 449){ //s1
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }
            // else if(scr >= 450 && scr <= 1200){ //s2
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }
            // else if(scr >= 1201 && scr <= 1950){ //s3
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }
            // else if(scr >= 1951 && scr <= 2850){ //s4
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }
            // else if(scr >= 2851 && scr <= 3600){ //s5
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }
            // else if(scr >= 3601 && scr <= 4350){ //s6
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }
            // else if(scr >= 4351){ //s7
            //     gsap.to("#s7",{duration:.9, ease:"Power4.easeOut",rotation:"45", background: "#c88aff"})
            //     gsap.to("#s1",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s2",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s3",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s4",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s5",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            //     gsap.to("#s6",{duration:.9, ease:"Power4.easeOut",rotation:"0", border:"3px solid #c88aff", background: "transparent"})
            // }

            // if(scr > 400) {
            //     gsap.to("#hero-about",{duration:1.5, ease:"Power4.easeOut", background:"#231433"})
            //     gsap.to(".about-sec",{duration:1.5, ease:"Power4.easeOut", color:"#fff"})
            // }
            // else{
            //     gsap.to("#hero-about",{duration:1.5, ease:"Power4.easeOut", background:"#884dff"})
            //     gsap.to(".about-sec",{duration:1.5, ease:"Power4.easeOut", color:"#252627"})
            // }
        })
        

    },[])  
    



    return (
    <>
        <PageTransition nameOfPage={nameOfPage}/>

        <div data-scroll-container className="hero-about" id="hero-about">
        
            <section className="about-sec first-about" data-scroll-section>
                <h1 data-scroll>.about()</h1>
                <div data-scroll className="about-me">
                    <p data-scroll data-scroll-speed="8">
                    I'm a  web developer based in India, having an attitude for creating elegant solutions. Passionate about learning new things.
                    </p>
                </div>

                <div className="img-container" data-scroll data-scroll-speed="5">
                    <div className="featured-img">
                        <img src="https://picsum.photos/id/237/536/354"/>
                    </div>
                </div>


                <div className="shapes-1">
                    <svg viewBox="0 0 132 34" fill="none" className="svg1">
                        <path d="M3.8913 12.2827C3.2505 13.9653 2.94993 15.7582 3.00679 17.5574C2.97763 19.3573 3.30573 21.1453 3.97237 22.8179C4.64617 24.5085 5.65211 26.0468 6.93072 27.3418C8.20933 28.6368 9.73465 29.6623 11.4164 30.3576C13.0982 31.0529 14.9024 31.4041 16.7223 31.3901C18.5421 31.3761 20.3407 30.9974 22.0115 30.2761C23.6825 29.5551 25.1919 28.5063 26.4504 27.1917C27.7089 25.877 28.6911 24.3233 29.3387 22.6226C29.9796 20.94 30.2801 19.1472 30.2231 17.348C30.2524 15.5481 29.9243 13.76 29.2577 12.0875C28.5839 10.3969 27.578 8.85865 26.2992 7.5636C25.0207 6.26854 23.4955 5.24304 21.8135 4.54771C20.1317 3.85238 18.3276 3.50128 16.5078 3.51527C14.6879 3.52927 12.8894 3.90803 11.2185 4.62918C9.5475 5.35033 8.03816 6.39932 6.77968 7.71386C5.52117 9.02841 4.539 10.582 3.8913 12.2827ZM36.8947 12.0355C36.2539 13.7181 35.9532 15.511 36.0101 17.3102C35.981 19.1101 36.3092 20.8981 36.9758 22.5706C37.6496 24.2612 38.6555 25.7997 39.934 27.0947C41.2128 28.3898 42.738 29.4152 44.4197 30.1105C46.1017 30.806 47.9058 31.1568 49.7255 31.1428C51.5455 31.129 53.344 30.7501 55.0148 30.029C56.6858 29.3078 58.1952 28.259 59.4537 26.9444C60.7122 25.6299 61.6944 24.0762 62.342 22.3755C62.9829 20.6929 63.2834 18.9001 63.2266 17.1009C63.2557 15.301 62.9276 13.513 62.261 11.8404C61.5872 10.1499 60.5813 8.61152 59.3025 7.31643C58.024 6.02137 56.4988 4.99587 54.817 4.30052C53.135 3.60515 51.3308 3.25421 49.511 3.26822C47.6913 3.28222 45.8928 3.66096 44.2217 4.38211C42.5509 5.10325 41.0416 6.15207 39.783 7.46666C38.5245 8.78124 37.5423 10.3348 36.8947 12.0355ZM69.8988 11.7678C69.258 13.4505 68.9575 15.2433 69.0144 17.0426C68.9851 18.8424 69.3133 20.6304 69.9799 22.3029C70.6537 23.9935 71.6598 25.5318 72.9383 26.8268C74.2169 28.1218 75.7423 29.1475 77.4241 29.8428C79.1058 30.5381 80.9099 30.8893 82.7298 30.8753C84.5496 30.8613 86.3483 30.4824 88.0191 29.7613C89.69 29.0403 91.1993 27.9913 92.4578 26.6768C93.7166 25.3622 94.6985 23.8085 95.3464 22.1078C95.9872 20.4251 96.2877 18.6323 96.2308 16.833C96.26 15.0332 95.9319 13.2452 95.2653 11.5726C94.5915 9.88202 93.5854 8.34378 92.3069 7.04874C91.0283 5.75368 89.5029 4.72818 87.8211 4.03285C86.1394 3.33752 84.3353 2.9864 82.5153 3.0004C80.6956 3.01441 78.8969 3.39316 77.2261 4.1143C75.555 4.83547 74.0457 5.88446 72.7874 7.19897C71.5288 8.51355 70.5467 10.0671 69.8988 11.7678ZM101.998 16.7943C102.025 20.406 103.487 23.8589 106.06 26.3931C107.334 27.6481 108.843 28.6395 110.501 29.3113C112.158 29.983 113.931 30.3217 115.72 30.3081C117.508 30.2945 119.276 29.9286 120.923 29.2317C122.57 28.5345 124.064 27.52 125.318 26.2458C126.573 24.9716 127.565 23.4629 128.237 21.8054C128.908 20.1479 129.247 18.3744 129.233 16.5861C129.22 14.7978 128.854 13.0297 128.157 11.3827C127.46 9.73581 126.445 8.24221 125.171 6.98734C122.598 4.45302 119.123 3.04477 115.511 3.07241C111.9 3.10002 108.447 4.5612 105.913 7.13458C103.378 9.70794 101.97 13.1827 101.998 16.7943Z" stroke="#B980FF" stroke-width="5"/>
                    </svg>

                    <svg viewBox="0 0 165 165" fill="none" className="svg2">
                        <g clip-path="url(#clip0_8_71)">
                        <path d="M1.95748 81.4275L14.4548 70.804L28.7154 81.6896L41.2031 71.0561L55.4637 81.9416L67.961 71.3182L82.2127 82.2127" stroke="#B980FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M82.2127 82.2127L94.7101 71.5892L108.971 82.4747L121.458 71.8413L135.719 82.7267L148.216 72.1033L162.468 82.9978" stroke="#B980FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_8_71">
                        <rect width="116.272" height="116.272" fill="white" transform="translate(83.017) rotate(45.5605)"/>
                        </clipPath>
                        </defs>
                    </svg>

                    <svg viewBox="0 0 84 84" fill="none" className="svg3">
                        <g clip-path="url(#clip0_8_67)">
                        <path d="M1 83L1.84166 71.18L14.67 69.3303L15.5016 57.5103L28.3299 55.6605L29.1716 43.8406L42 42" stroke="#B980FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M42 42L42.8417 30.18L55.67 28.3303L56.5016 16.5103L69.3299 14.6605L70.1716 2.84056L83 1" stroke="#B980FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_8_67">
                        <rect width="84" height="84" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

                    <svg viewBox="0 0 303 754" fill="none" className="svg4">
                        <path d="M-9.5 2C127 12.0001 136.833 142 79.5 249.5C6.16661 387 60.6 415 117 439C156 455.596 247.5 439 279.5 487C304.2 524.049 304.056 616.192 295 640C264 721.5 200.5 773 94 743C4.37801 717.754 -12 641.167 -12 627.5" stroke="#B980FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>




                </div>



            </section>

            <section className="second-about" data-scroll-section>

                <div className="information">
                    <div className="skills">
                        <h2>Skills | year</h2>
                        <div className="sk">
                            <h6>Front-end development | 2 years</h6>
                            <h6>Back-end development | 1 year</h6>
                            <h6>UI design | 1 year</h6>
                        </div>
                    </div>
                    <div className="tools">
                        <h2>Tools | years</h2>
                        <div className="main-grid">
                            <div className="grid1">
                                <h6>Javascript | ~1 year</h6>
                                <h6>HTML/CSS | ~2 years</h6>
                                <h6>React.js |  &lt; 1 year</h6>
                                <h6>Node.js |  &lt; 1 year</h6>
                            </div>
                            <div className="grid2">
                                <h6>Java | ~2 years</h6>
                                <h6>Python | ~2 years</h6>
                                <h6>C/C++ | ~2 years</h6>
                            </div>
                            <div className="grid3">
                                <h6>Figma | ~1 year</h6>
                                <h6>Adobe Photoshop | ~1 year</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shapes-2">
                    <svg viewBox="0 0 143 131" fill="none" className="svg5">
                        <ellipse cx="3" cy="2.82353" rx="3" ry="2.82353" fill="#BE8BFF"/>
                        <ellipse cx="37" cy="2.82353" rx="3" ry="2.82353" fill="#BE8BFF"/>
                        <ellipse cx="71.5" cy="3.11111" rx="3.5" ry="3.11111" fill="#BE8BFF"/>
                        <ellipse cx="106" cy="2.82353" rx="3" ry="2.82353" fill="#BE8BFF"/>
                        <ellipse cx="140" cy="2.82353" rx="3" ry="2.82353" fill="#BE8BFF"/>
                        <ellipse cx="3" cy="33.8235" rx="3" ry="2.82353" fill="#BE8BFF"/>
                        <ellipse cx="39.5" cy="39" rx="2.5" ry="2" fill="#BE8BFF"/>
                        <ellipse cx="68" cy="39.5" rx="3" ry="2.5" fill="#BE8BFF"/>
                        <ellipse cx="96.5" cy="39" rx="2.5" ry="2" fill="#BE8BFF"/>
                        <ellipse cx="140" cy="33.8235" rx="3" ry="2.82353" fill="#BE8BFF"/>
                        <ellipse cx="3" cy="64.8235" rx="3" ry="2.82353" fill="#BE8BFF"/>
                        <circle cx="39.5" cy="64.5" r="2.5" fill="#BE8BFF"/>
                        <circle cx="68" cy="64" r="2" fill="#BE8BFF"/>
                        <circle cx="96.5" cy="64.5" r="2.5" fill="#BE8BFF"/>
                        <ellipse cx="140" cy="64.8235" rx="3" ry="2.82353" fill="#BE8BFF"/>
                        <ellipse cx="3" cy="95.8235" rx="3" ry="2.82353" fill="#BE8BFF"/>
                        <circle cx="39.5" cy="90.5" r="2.5" fill="#BE8BFF"/>
                        <ellipse cx="68" cy="90.5" rx="3" ry="2.5" fill="#BE8BFF"/>
                        <circle cx="96.5" cy="90.5" r="2.5" fill="#BE8BFF"/>
                        <ellipse cx="140" cy="95.8235" rx="3" ry="2.82353" fill="#BE8BFF"/>
                        <ellipse cx="3" cy="126.824" rx="3" ry="2.82353" fill="#BE8BFF"/>
                        <ellipse cx="37" cy="126.824" rx="3" ry="2.82353" fill="#BE8BFF"/>
                        <ellipse cx="71.5" cy="127.111" rx="3.5" ry="3.11111" fill="#BE8BFF"/>
                        <ellipse cx="106" cy="126.824" rx="3" ry="2.82353" fill="#BE8BFF"/>
                        <ellipse cx="140" cy="126.824" rx="3" ry="2.82353" fill="#BE8BFF"/>
                    </svg>

                    <svg viewBox="0 0 40 48" fill="none" className="svg6">
                        <path d="M0.96445 47.7658L1.22435 34.9548L13.7794 32.4061L14.0422 19.6046L26.5847 17.0492L26.8476 4.24781L39.3997 1.68951" stroke="#007CFF" stroke-width="1.67"/>
                    </svg>

                    <svg viewBox="0 0 58 58" fill="none" className="svg8">
                        <mask id="path-1-inside-1_56_2" fill="white">
                        <rect width="58" height="58" rx="4"/>
                        </mask>
                        <rect width="58" height="58" rx="4" stroke="#A814E2" stroke-width="16" stroke-linejoin="round" mask="url(#path-1-inside-1_56_2)"/>
                    </svg>


                    <svg viewBox="0 0 55 33" fill="none" className="svg11">
                        <path d="M0.58637 3.10636C0.258722 3.76494 0.0639908 4.48163 0.0133108 5.21546C-0.0373693 5.94929 0.0569866 6.68591 0.29099 7.38328C0.524994 8.08064 0.894064 8.72509 1.37713 9.27982C1.86019 9.83455 2.44779 10.2887 3.10637 10.6164C3.76495 10.944 4.48161 11.1387 5.21544 11.1894C5.94928 11.2401 6.68591 11.1458 7.38328 10.9117C8.08064 10.6777 8.72509 10.3087 9.27982 9.8256C9.83455 9.34253 10.2887 8.75496 10.6164 8.09638C10.944 7.4378 11.1387 6.72111 11.1894 5.98728C11.2401 5.25345 11.1457 4.51683 10.9117 3.81946C10.6777 3.1221 10.3087 2.47765 9.8256 1.92292C9.34253 1.36818 8.75494 0.914018 8.09636 0.58637C7.43778 0.258722 6.72113 0.0639907 5.98729 0.0133107C5.25346 -0.0373693 4.51683 0.0569865 3.81946 0.29099C3.1221 0.524994 2.47764 0.894079 1.9229 1.37714C1.36817 1.8602 0.914018 2.44778 0.58637 3.10636ZM14.9164 10.2264C14.5887 10.885 14.394 11.6016 14.3433 12.3355C14.2926 13.0693 14.387 13.8059 14.621 14.5033C14.855 15.2006 15.2241 15.8451 15.7071 16.3998C16.1902 16.9546 16.7778 17.4087 17.4364 17.7364C18.0949 18.064 18.8116 18.2587 19.5454 18.3094C20.2793 18.3601 21.0159 18.2657 21.7133 18.0317C22.4106 17.7977 23.0551 17.4287 23.6098 16.9456C24.1646 16.4626 24.6187 15.875 24.9464 15.2164C25.274 14.5578 25.4687 13.8411 25.5194 13.1073C25.5701 12.3735 25.4757 11.6368 25.2417 10.9395C25.0077 10.2421 24.6387 9.59765 24.1556 9.04291C23.6725 8.48818 23.0849 8.03401 22.4264 7.70637C21.7678 7.37872 21.0511 7.18399 20.3173 7.13331C19.5835 7.08263 18.8468 7.17698 18.1495 7.41099C17.4521 7.64499 16.8076 8.01407 16.2529 8.49714C15.6982 8.9802 15.244 9.56781 14.9164 10.2264ZM29.2464 17.3464C28.9187 18.005 28.724 18.7216 28.6733 19.4555C28.6226 20.1893 28.717 20.9259 28.951 21.6233C29.185 22.3207 29.5541 22.9651 30.0371 23.5198C30.5202 24.0746 31.1078 24.5287 31.7664 24.8564C32.4249 25.184 33.1416 25.3787 33.8754 25.4294C34.6093 25.4801 35.3459 25.3857 36.0433 25.1517C36.7406 24.9177 37.3851 24.5487 37.9398 24.0656C38.4946 23.5826 38.9487 22.9949 39.2764 22.3364C39.9381 21.0063 40.0443 19.4679 39.5717 18.0595C39.0991 16.6511 38.0864 15.4881 36.7564 14.8264C35.4263 14.1646 33.8878 14.0584 32.4795 14.531C31.0711 15.0036 29.9081 16.0163 29.2464 17.3464ZM43.5764 24.4664C43.2487 25.125 43.054 25.8416 43.0033 26.5754C42.9526 27.3093 43.047 28.0459 43.281 28.7433C43.515 29.4407 43.8841 30.0851 44.3671 30.6398C44.8502 31.1946 45.4378 31.6487 46.0964 31.9764C46.7549 32.304 47.4716 32.4987 48.2054 32.5494C48.9393 32.6001 49.6759 32.5057 50.3733 32.2717C51.0706 32.0377 51.7151 31.6687 52.2698 31.1856C52.8246 30.7026 53.2787 30.1149 53.6064 29.4564C53.934 28.7978 54.1287 28.0811 54.1794 27.3473C54.2301 26.6135 54.1357 25.8768 53.9017 25.1794C53.6677 24.4821 53.2987 23.8376 52.8156 23.2829C52.3325 22.7282 51.7449 22.274 51.0864 21.9464C50.4278 21.6187 49.7111 21.424 48.9773 21.3733C48.2435 21.3226 47.5068 21.417 46.8095 21.651C46.1121 21.885 45.4676 22.2541 44.9129 22.7371C44.3582 23.2202 43.904 23.8078 43.5764 24.4664Z" fill="#007CFF"/>
                    </svg>


                    <svg viewBox="0 0 218 218" fill="none" className="svg12">
                        <circle cx="109" cy="109" r="97" stroke="#4536F1" stroke-width="24"/>
                    </svg>





                </div>

            </section>

            <section className="third-about" data-scroll-section>


                <div className="information-2">
                    <div className="exp">
                        <h2>Experience</h2>
                        <p>
                            Intern | Full stack developer <br/>
                            @High Radius <br/>
                            Jan 2022 - May 2022
                        </p>
                    </div>
                    <div className="sometimes">
                        <h2>And sometimes</h2>
                        <div className="smt">
                            <div>
                                <h6>Badminton </h6>
                                <h6>Chess </h6>
                                <h6>Video games </h6>
                            </div>
                            <div>
                                <h6>Sci-fi / Adventure movies </h6>
                                <h6>CP </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shapes-3">
                    <svg viewBox="0 0 26 59" fill="none" className="svg13">
                        <path d="M1 1L11.8199 7.86L7.5 19.92L18.3199 26.77L14.01 38.83L24.8199 45.69L20.51 57.74" stroke="#A814E2" stroke-width="1.61"/>
                    </svg>

                    <svg viewBox="0 0 83 105" fill="none" className="svg14">
                        <path d="M25.5087 56.524C26.2157 56.2743 26.8654 55.8851 27.4192 55.3796C27.973 54.8741 28.4197 54.2625 28.7327 53.5811C29.0457 52.8997 29.2186 52.1624 29.2413 51.413C29.264 50.6635 29.136 49.9171 28.8647 49.218C28.5935 48.519 28.1846 47.8815 27.6624 47.3434C27.1402 46.8053 26.5152 46.3776 25.8246 46.0856C25.1339 45.7936 24.3917 45.6433 23.6419 45.6436C22.8921 45.6438 22.1499 45.7947 21.4595 46.0872C20.7524 46.3369 20.1028 46.726 19.549 47.2315C18.9952 47.737 18.5485 48.3486 18.2355 49.03C17.9225 49.7114 17.7496 50.4487 17.7269 51.1981C17.7042 51.9476 17.8323 52.6941 18.1035 53.3931C18.3747 54.0922 18.7835 54.7297 19.3057 55.2677C19.828 55.8058 20.4529 56.2335 21.1436 56.5255C21.8342 56.8175 22.5765 56.9678 23.3263 56.9675C24.0761 56.9673 24.8183 56.8164 25.5087 56.524ZM19.7196 41.6037C20.4245 41.3519 21.0717 40.9613 21.6231 40.455C22.1745 39.9487 22.6187 39.3371 22.9296 38.6562C23.2405 37.9752 23.4118 37.2389 23.4333 36.4907C23.4547 35.7424 23.326 34.9975 23.0546 34.2999C22.7833 33.6023 22.3748 32.9661 21.8534 32.4291C21.3319 31.8921 20.7081 31.465 20.0188 31.1732C19.3295 30.8814 18.5887 30.7307 17.8401 30.7301C17.0916 30.7295 16.3505 30.879 15.6607 31.1697C14.9558 31.4215 14.3086 31.8121 13.7572 32.3183C13.2058 32.8246 12.7616 33.4363 12.4507 34.1172C12.1398 34.7981 11.9685 35.5344 11.947 36.2827C11.9256 37.0309 12.0543 37.7758 12.3257 38.4734C12.5971 39.1711 13.0056 39.8072 13.527 40.3442C14.0484 40.8813 14.6723 41.3083 15.3616 41.6001C16.0509 41.892 16.7916 42.0427 17.5402 42.0433C18.2887 42.0439 19.0298 41.8944 19.7196 41.6037ZM13.9236 26.6958C14.6093 26.4291 15.2358 26.03 15.7673 25.5212C16.2988 25.0123 16.7248 24.4038 17.0212 23.7304C17.3175 23.0569 17.4783 22.3317 17.4943 21.5961C17.5103 20.8605 17.3813 20.1289 17.1146 19.4432C16.8479 18.7574 16.4488 18.1309 15.94 17.5995C15.4312 17.068 14.8227 16.6419 14.1492 16.3456C13.4757 16.0493 12.7505 15.8885 12.0149 15.8725C11.2793 15.8565 10.5477 15.9855 9.862 16.2522C8.47709 16.7908 7.36288 17.8575 6.76444 19.2176C6.16601 20.5777 6.13243 22.1198 6.67103 23.5048C7.20963 24.8897 8.27629 26.0039 9.63642 26.6024C10.9965 27.2008 12.5387 27.2344 13.9236 26.6958ZM8.12487 11.7783C8.8319 11.5286 9.48161 11.1394 10.0354 10.6339C10.5892 10.1284 11.0359 9.51683 11.3489 8.83545C11.6619 8.15407 11.8348 7.41677 11.8575 6.66729C11.8802 5.9178 11.7521 5.1714 11.4809 4.47234C11.2097 3.77328 10.8008 3.13581 10.2786 2.59774C9.75638 2.05966 9.13141 1.63195 8.44077 1.33995C7.75013 1.04796 7.00791 0.897625 6.25808 0.897892C5.50825 0.898159 4.76609 1.04903 4.07566 1.34151C3.36863 1.59121 2.71896 1.98032 2.16515 2.48583C1.61135 2.99134 1.16471 3.60293 0.851719 4.28431C0.538723 4.96569 0.365745 5.70299 0.343062 6.45247C0.320378 7.20196 0.448448 7.94839 0.719668 8.64745C0.990887 9.3465 1.39969 9.98396 1.92192 10.522C2.44414 11.0601 3.06911 11.4878 3.75974 11.7798C4.45038 12.0718 5.19267 12.2221 5.9425 12.2219C6.69232 12.2216 7.43444 12.0708 8.12487 11.7783ZM52.0113 80.5534C52.7162 80.3016 53.3634 79.911 53.9148 79.4047C54.4662 78.8984 54.9105 78.2868 55.2214 77.6058C55.5323 76.9249 55.7035 76.1886 55.725 75.4404C55.7465 74.6922 55.6177 73.9472 55.3463 73.2496C55.075 72.552 54.6665 71.9159 54.1451 71.3788C53.6236 70.8418 52.9998 70.4147 52.3105 70.1229C51.6212 69.8311 50.8804 69.6804 50.1318 69.6798C49.3833 69.6792 48.6422 69.8287 47.9524 70.1194C47.2475 70.3712 46.6003 70.7618 46.0489 71.2681C45.4976 71.7743 45.0533 72.386 44.7424 73.0669C44.4315 73.7478 44.2602 74.4841 44.2387 75.2324C44.2173 75.9806 44.3461 76.7255 44.6174 77.4231C44.8888 78.1208 45.2973 78.7569 45.8187 79.2939C46.3401 79.831 46.964 80.258 47.6533 80.5499C48.3426 80.8417 49.0834 80.9923 49.8319 80.9929C50.5805 80.9936 51.3215 80.8441 52.0113 80.5534ZM46.2153 65.6455C46.9012 65.3794 47.5281 64.9809 48.06 64.4726C48.5918 63.9643 49.0184 63.3562 49.3153 62.683C49.6122 62.0099 49.7736 61.2849 49.7903 60.5493C49.8069 59.8138 49.6786 59.0822 49.4125 58.3963C49.1465 57.7104 48.7479 57.0836 48.2396 56.5517C47.7313 56.0198 47.1232 55.5932 46.4501 55.2964C45.7769 54.9995 45.0519 54.8381 44.3164 54.8214C43.5809 54.8047 42.8492 54.9331 42.1633 55.1991C41.4774 55.4652 40.8506 55.8637 40.3187 56.372C39.7868 56.8803 39.3603 57.4884 39.0634 58.1615C38.7665 58.8347 38.6051 59.5597 38.5884 60.2952C38.5717 61.0307 38.7001 61.7624 38.9662 62.4483C39.2322 63.1342 39.6308 63.761 40.1391 64.2929C40.6474 64.8248 41.2554 65.2514 41.9286 65.5483C42.6017 65.8451 43.3268 66.0065 44.0623 66.0232C44.7978 66.0399 45.5294 65.9116 46.2153 65.6455ZM40.4262 50.7252C41.1311 50.4734 41.7784 50.0828 42.3297 49.5765C42.8811 49.0703 43.3254 48.4586 43.6363 47.7777C43.9472 47.0968 44.1184 46.3604 44.1399 45.6122C44.1614 44.864 44.0326 44.1191 43.7613 43.4214C43.4899 42.7238 43.0814 42.0877 42.56 41.5506C42.0386 41.0136 41.4147 40.5866 40.7254 40.2947C40.0361 40.0029 39.2953 39.8523 38.5468 39.8516C37.7982 39.851 37.0571 40.0005 36.3674 40.2912C35.6625 40.543 35.0152 40.9336 34.4638 41.4399C33.9125 41.9461 33.4682 42.5578 33.1573 43.2387C32.8464 43.9196 32.6751 44.656 32.6536 45.4042C32.6322 46.1524 32.761 46.8974 33.0323 47.595C33.3037 48.2926 33.7122 48.9287 34.2336 49.4658C34.7551 50.0028 35.3789 50.4299 36.0682 50.7217C36.7575 51.0135 37.4983 51.1642 38.2469 51.1648C38.9954 51.1654 39.7364 51.0159 40.4262 50.7252ZM34.6302 35.8173C35.3161 35.5513 35.943 35.1527 36.4749 34.6444C37.0068 34.1361 37.4333 33.528 37.7302 32.8549C38.0271 32.1817 38.1885 31.4567 38.2052 30.7212C38.2219 29.9857 38.0935 29.2541 37.8274 28.5681C37.5614 27.8822 37.1628 27.2554 36.6545 26.7235C36.1462 26.1916 35.5382 25.7651 34.865 25.4682C34.1919 25.1713 33.4668 25.0099 32.7313 24.9932C31.9958 24.9765 31.2642 25.1049 30.5782 25.3709C29.8923 25.637 29.2655 26.0355 28.7337 26.5438C28.2018 27.0521 27.7752 27.6602 27.4783 28.3334C27.1814 29.0065 27.02 29.7315 27.0033 30.4671C26.9867 31.2026 27.115 31.9342 27.3811 32.6201C27.6471 33.306 28.0457 33.9328 28.554 34.4647C29.0623 34.9966 29.6703 35.4232 30.3435 35.7201C31.0166 36.017 31.7417 36.1783 32.4772 36.195C33.2127 36.2117 33.9443 36.0834 34.6302 35.8173ZM78.5166 104.592C79.9015 104.054 81.0158 102.987 81.6142 101.627C82.2127 100.267 82.2463 98.7247 81.7077 97.3398C81.1691 95.9549 80.1024 94.8407 78.7423 94.2422C77.3821 93.6438 75.84 93.6102 74.4551 94.1488C73.7693 94.4155 73.1428 94.8146 72.6113 95.3235C72.0798 95.8323 71.6538 96.4408 71.3575 97.1142C71.0612 97.7877 70.9004 98.5129 70.8844 99.2485C70.8684 99.9841 70.9974 100.716 71.2641 101.401C71.5307 102.087 71.9299 102.714 72.4387 103.245C72.9475 103.777 73.556 104.203 74.2294 104.499C74.9029 104.795 75.6282 104.956 76.3638 104.972C77.0994 104.988 77.8309 104.859 78.5166 104.592ZM72.7179 89.6749C73.4249 89.4252 74.0746 89.0361 74.6284 88.5306C75.1823 88.0251 75.6289 87.4135 75.9419 86.7321C76.2549 86.0507 76.4279 85.3134 76.4505 84.5639C76.4732 83.8144 76.3452 83.068 76.0739 82.369C75.8027 81.6699 75.3938 81.0325 74.8716 80.4944C74.3494 79.9563 73.7244 79.5286 73.0338 79.2366C72.3432 78.9446 71.6009 78.7943 70.8511 78.7945C70.1013 78.7948 69.3591 78.9457 68.6687 79.2382C67.9616 79.4879 67.312 79.877 66.7582 80.3825C66.2044 80.888 65.7577 81.4996 65.4447 82.181C65.1317 82.8623 64.9588 83.5997 64.9361 84.3491C64.9134 85.0986 65.0415 85.845 65.3127 86.5441C65.5839 87.2432 65.9927 87.8806 66.5149 88.4187C67.0372 88.9568 67.6621 89.3845 68.3528 89.6765C69.0434 89.9685 69.7857 90.1188 70.5355 90.1185C71.2854 90.1183 72.0275 89.9674 72.7179 89.6749ZM66.9315 74.7643C67.6173 74.4976 68.2438 74.0984 68.7753 73.5896C69.3067 73.0808 69.7329 72.4723 70.0292 71.7988C70.3255 71.1254 70.4862 70.4001 70.5022 69.6645C70.5183 68.9289 70.3893 68.1974 70.1226 67.5117C69.8559 66.8259 69.4568 66.1994 68.948 65.6679C68.4391 65.1364 67.8306 64.7104 67.1571 64.4141C66.4837 64.1178 65.7584 63.957 65.0228 63.941C64.2873 63.925 63.5557 64.054 62.8699 64.3207C62.1842 64.5873 61.5577 64.9865 61.0262 65.4953C60.4948 66.0041 60.0687 66.6126 59.7724 67.2861C59.4761 67.9595 59.3153 68.6848 59.2993 69.4204C59.2832 70.156 59.4123 70.8875 59.679 71.5732C59.9457 72.259 60.3448 72.8855 60.8536 73.417C61.3624 73.9485 61.9709 74.3745 62.6444 74.6708C63.3178 74.9671 64.0431 75.1279 64.7787 75.1439C65.5143 75.16 66.2458 75.031 66.9315 74.7643ZM61.1328 59.8468C61.8377 59.5949 62.485 59.2043 63.0363 58.6981C63.5877 58.1918 64.032 57.5801 64.3429 56.8992C64.6538 56.2183 64.8251 55.482 64.8465 54.7338C64.868 53.9855 64.7393 53.2406 64.4679 52.543C64.1965 51.8454 63.788 51.2092 63.2666 50.6722C62.7452 50.1351 62.1214 49.7081 61.4321 49.4163C60.7427 49.1245 60.0019 48.9738 59.2534 48.9732C58.5048 48.9726 57.7638 49.1221 57.074 49.4128C56.3691 49.6646 55.7218 50.0552 55.1704 50.5614C54.6191 51.0677 54.1748 51.6794 53.8639 52.3603C53.553 53.0412 53.3817 53.7775 53.3603 54.5257C53.3388 55.274 53.4676 56.0189 53.739 56.7165C54.0103 57.4141 54.4188 58.0503 54.9402 58.5873C55.4617 59.1243 56.0855 59.5514 56.7748 59.8432C57.4641 60.1351 58.2049 60.2857 58.9535 60.2863C59.702 60.2869 60.443 60.1375 61.1328 59.8468Z" fill="#007CFF"/>
                    </svg>


                    <svg viewBox="0 0 130 410" fill="none" className="svg15">
                        <line x1="91.5" y1="97.5" x2="91.5" y2="247.5" stroke="#CFDD2B" stroke-opacity="0.94" stroke-width="7" stroke-linecap="round"/>
                        <line x1="35.5" y1="3.5" x2="35.5" y2="169.5" stroke="#F55858" stroke-opacity="0.91" stroke-width="7" stroke-linecap="round"/>
                        <line x1="3.5" y1="159.5" x2="3.49999" y2="321.5" stroke="#0BAD5F" stroke-width="7" stroke-linecap="round"/>
                        <line x1="126.5" y1="145.5" x2="126.5" y2="307.5" stroke="#227AE0" stroke-width="7" stroke-linecap="round"/>
                        <line x1="62.5" y1="244.5" x2="62.5" y2="406.5" stroke="#B129B4" stroke-width="7" stroke-linecap="round"/>
                    </svg>


                    <svg viewBox="0 0 812 493" fill="none" className="svg16">
                        <path d="M2 493C17.1402 434.936 55.0916 340.708 214.972 369.231C414.822 404.885 500.617 394.294 548.561 354.461C648.486 271.439 676.487 168.873 689.869 139.011C720 71.779 728 44.5 812 2" stroke="#D57AEC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>



                </div>


            </section>

        </div>
    </>

    );
}

export default About;