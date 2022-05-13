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
                <svg width="155" height="732" viewBox="0 0 155 732" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1C62.0553 6.38394 175.669 56.6092 107.889 194.822C50.1788 312.499 32.6149 387.875 55.197 434.792C84.0341 494.704 191.389 520.474 140.507 663.225C112.642 741.4 41.051 741.4 1 719.371" stroke="#D0A6A6"/>
                </svg>





            </section>
            
            <section className="about-sec smth-about-me" data-scroll-section>
                <h2 data-scroll data-scroll-direction="horizontal" data-scroll-speed="5" data-scroll-class="appear" data-scroll-repeat="true" > me</h2>
                <div data-scroll data-scroll-speed="16">
                    <svg width="19" height="333" viewBox="0 0 19 333" fill="none">
                        <line x1="2" y1="57" x2="1.99999" y2="331" stroke="#F3ABFF" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                </div>
                <div data-scroll data-scroll-speed="11">
                    <svg width="19" height="333" viewBox="0 0 19 333" fill="none">
                        <line x1="17" y1="2" x2="17" y2="278" stroke="#F3ABFF" stroke-width="4" stroke-linecap="round"/>
                    </svg>
                </div>

                <svg width="107" height="35" viewBox="0 0 107 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.7771 5.27031C39.6211 6.10392 39.6309 6.96015 39.8058 7.78999C39.9807 8.61984 40.3173 9.4071 40.7965 10.1068C41.2756 10.8066 41.888 11.4051 42.5985 11.8682C43.3089 12.3313 44.1036 12.6499 44.9372 12.8059C45.7708 12.9619 46.6271 12.9521 47.457 12.7772C48.2868 12.6023 49.074 12.2656 49.7737 11.7865C50.4735 11.3073 51.072 10.695 51.5351 9.98452C51.9982 9.27405 52.3168 8.47933 52.4728 7.64571C52.6288 6.8121 52.619 5.95595 52.4441 5.1261C52.2692 4.29626 51.9326 3.509 51.4534 2.80926C50.9743 2.10951 50.362 1.51096 49.6516 1.04785C48.9411 0.584742 48.1463 0.266147 47.3127 0.110175C46.4791 -0.045796 45.6229 -0.0360914 44.7931 0.13882C43.9632 0.313732 43.1759 0.650397 42.4761 1.12956C41.7764 1.60873 41.1779 2.22104 40.7148 2.93151C40.2517 3.64198 39.933 4.4367 39.7771 5.27031ZM57.9041 8.66045C57.7481 9.49407 57.7577 10.3502 57.9326 11.1801C58.1075 12.0099 58.4443 12.7972 58.9234 13.497C59.4026 14.1967 60.0148 14.7952 60.7253 15.2583C61.4358 15.7214 62.2306 16.0401 63.0642 16.1961C63.8978 16.352 64.754 16.3423 65.5838 16.1673C66.4136 15.9924 67.2008 15.6558 67.9006 15.1766C68.6003 14.6974 69.1989 14.0851 69.6621 13.3747C70.1252 12.6642 70.4437 11.8695 70.5997 11.0359C70.7556 10.2022 70.746 9.34609 70.5711 8.51625C70.3962 7.6864 70.0594 6.89914 69.5803 6.1994C69.1011 5.49966 68.4889 4.9011 67.7784 4.43799C67.0679 3.97489 66.2731 3.65629 65.4395 3.50032C64.6059 3.34435 63.7498 3.35405 62.9199 3.52896C62.0901 3.70388 61.3029 4.04054 60.6031 4.51971C59.9034 4.99887 59.3048 5.61118 58.8417 6.32165C58.3786 7.03212 58.06 7.82684 57.9041 8.66045ZM76.0424 12.0621C75.8762 12.9002 75.8778 13.7629 76.0474 14.6003C76.2169 15.4377 76.551 16.2332 77.0302 16.9405C77.5094 17.6479 78.1241 18.2531 78.8389 18.7212C79.5537 19.1892 80.3543 19.5107 81.1943 19.6671C82.0342 19.8235 82.897 19.8117 83.7323 19.6323C84.5677 19.4529 85.3591 19.1095 86.0608 18.622C86.7625 18.1345 87.3604 17.5126 87.82 16.7923C88.2796 16.0721 88.5917 15.2677 88.7382 14.426C88.9045 13.5879 88.9027 12.7252 88.7331 11.8878C88.5636 11.0504 88.2295 10.255 87.7503 9.5476C87.2711 8.84023 86.6564 8.23502 85.9416 7.76698C85.2268 7.29894 84.4262 6.97739 83.5862 6.821C82.7463 6.6646 81.8837 6.67643 81.0483 6.85584C80.213 7.03524 79.4214 7.37865 78.7197 7.86614C78.018 8.35364 77.4202 8.97556 76.9606 9.69582C76.501 10.4161 76.1889 11.2204 76.0424 12.0621ZM94.1808 15.4523C94.0146 16.2903 94.0162 17.1531 94.1858 17.9905C94.3553 18.8279 94.6894 19.6233 95.1685 20.3307C95.6477 21.0381 96.2627 21.6433 96.9775 22.1113C97.6923 22.5793 98.4928 22.9009 99.3328 23.0573C100.173 23.2137 101.035 23.2019 101.871 23.0224C102.706 22.843 103.498 22.4996 104.199 22.0121C104.901 21.5246 105.499 20.9027 105.958 20.1825C106.418 19.4622 106.73 18.6579 106.877 17.8161C107.043 16.9781 107.041 16.1154 106.872 15.278C106.702 14.4405 106.368 13.6451 105.889 12.9377C105.41 12.2304 104.795 11.6252 104.08 11.1571C103.365 10.6891 102.565 10.3675 101.725 10.2111C100.885 10.0547 100.022 10.0666 99.1867 10.246C98.3513 10.4254 97.5599 10.7688 96.8582 11.2563C96.1566 11.7438 95.5586 12.3657 95.099 13.086C94.6394 13.8062 94.3273 14.6105 94.1808 15.4523ZM0.110143 16.6285C-0.0458282 17.4621 -0.0360531 18.3182 0.138858 19.1481C0.31377 19.9779 0.650365 20.7652 1.12953 21.4649C1.6087 22.1647 2.221 22.7632 2.93147 23.2263C3.64195 23.6895 4.43667 24.008 5.27028 24.164C6.10389 24.32 6.96012 24.3102 7.78996 24.1353C8.61981 23.9604 9.40707 23.6238 10.1068 23.1446C10.8066 22.6655 11.405 22.0532 11.8681 21.3427C12.3313 20.6322 12.6499 19.8375 12.8059 19.0039C12.9619 18.1703 12.9521 17.314 12.7772 16.4842C12.6023 15.6544 12.2656 14.8671 11.7864 14.1674C11.3073 13.4676 10.695 12.8691 9.98456 12.406C9.27409 11.9429 8.4793 11.6242 7.64568 11.4683C6.81207 11.3123 5.95592 11.3221 5.12607 11.497C4.29622 11.6719 3.50897 12.0086 2.80922 12.4877C2.10948 12.9669 1.511 13.5791 1.04789 14.2896C0.58478 15.0001 0.266115 15.7949 0.110143 16.6285V16.6285ZM18.2486 20.0186C18.0926 20.8522 18.1023 21.7084 18.2772 22.5382C18.4521 23.3681 18.7888 24.1553 19.268 24.8551C19.7472 25.5548 20.3594 26.1533 21.0699 26.6164C21.7803 27.0795 22.5751 27.3982 23.4087 27.5542C24.2424 27.7101 25.0985 27.7004 25.9284 27.5254C26.7582 27.3505 27.5455 27.0139 28.2453 26.5348C28.945 26.0556 29.5435 25.4433 30.0066 24.7328C30.4697 24.0224 30.7884 23.2276 30.9443 22.394C31.1003 21.5604 31.0905 20.7042 30.9156 19.8743C30.7407 19.0445 30.404 18.2572 29.9248 17.5575C29.4457 16.8578 28.8334 16.2593 28.1229 15.7962C27.4125 15.3331 26.6177 15.0144 25.7841 14.8584C24.9505 14.7024 24.0943 14.7122 23.2645 14.8871C22.4346 15.062 21.6474 15.3987 20.9477 15.8779C20.2479 16.357 19.6493 16.9693 19.1862 17.6797C18.7231 18.3902 18.4046 19.185 18.2486 20.0186ZM36.387 23.4088C36.231 24.2424 36.2408 25.0985 36.4157 25.9284C36.5906 26.7582 36.9272 27.5455 37.4064 28.2452C37.8855 28.945 38.4978 29.5434 39.2083 30.0066C39.9187 30.4697 40.7135 30.7883 41.5471 30.9443C42.3807 31.1003 43.2369 31.0905 44.0667 30.9156C44.8966 30.7407 45.6839 30.4041 46.3837 29.9249C47.0834 29.4458 47.6819 28.8334 48.145 28.123C48.6081 27.4125 48.9268 26.6178 49.0827 25.7842C49.2387 24.9506 49.2289 24.0943 49.054 23.2645C48.8791 22.4346 48.5425 21.6474 48.0634 20.9476C47.5842 20.2479 46.9718 19.6494 46.2613 19.1863C45.5509 18.7232 44.7562 18.4045 43.9226 18.2486C43.089 18.0926 42.2327 18.1024 41.4029 18.2773C40.573 18.4522 39.7858 18.7889 39.0861 19.268C38.3863 19.7472 37.7878 20.3594 37.3247 21.0699C36.8616 21.7804 36.543 22.5752 36.387 23.4088ZM54.5138 26.7989C54.3579 27.6325 54.3676 28.4887 54.5426 29.3185C54.7175 30.1484 55.0541 30.9356 55.5332 31.6354C56.0124 32.3351 56.6248 32.9336 57.3352 33.3967C58.0457 33.8598 58.8404 34.1785 59.674 34.3344C60.5076 34.4904 61.3637 34.4806 62.1936 34.3057C63.0234 34.1308 63.8108 33.7942 64.5105 33.3151C65.2102 32.8359 65.8087 32.2236 66.2718 31.5131C66.7349 30.8026 67.0536 30.0079 67.2096 29.1743C67.3656 28.3407 67.3558 27.4845 67.1809 26.6546C67.006 25.8248 66.6694 25.0375 66.1902 24.3378C65.711 23.638 65.0987 23.0396 64.3882 22.5765C63.6777 22.1133 62.8831 21.7947 62.0494 21.6387C61.2158 21.4827 60.3597 21.4925 59.5298 21.6674C58.7 21.8423 57.9127 22.179 57.2129 22.6582C56.5132 23.1373 55.9147 23.7496 55.4516 24.46C54.9885 25.1705 54.6698 25.9653 54.5138 26.7989Z" fill="#FF1F57"/>
                </svg>


                <div className="horizonLine" data-scroll data-scroll-speed="1">
                    <svg width="373" height="18" viewBox="0 0 373 18" fill="none">
                        <line x1="371.5" y1="1.50006" x2="1.5" y2="1.50003" stroke="#FF6CAA" stroke-width="3" stroke-linecap="round"/>
                        <line x1="371.5" y1="16.5001" x2="162.5" y2="16.5001" stroke="#FF6CAA" stroke-width="3" stroke-linecap="round"/>
                    </svg>
                </div>



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
