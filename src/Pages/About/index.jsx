import React, { useEffect, useState } from "react";
import PageTransition from '../../Components/PageTransition';
import locomotiveScroll from "locomotive-scroll";
import "./style.scss";
import './base.scss';
import { gsap } from "gsap-trial";
// import { CgArrowLongDown } from "react-icons/cg";
import anime from "animejs";
import { useInView } from 'react-intersection-observer';
import myself from "../../Assets/me2.jpg";
import $ from 'jquery';

function About(props) {
    const [nameOfPage] = useState("About");

    //#region Animating content on scroll
    const { ref :aboutSkills, inView: aboutSkillsInView, } = useInView();
    const { ref :aboutTools, inView: aboutToolsInView, } = useInView();
    const { ref :expAbout, inView: expAboutInView, } = useInView();
    const { ref :someAbout, inView: someAboutInView, } = useInView();

    const aSkills = () =>{
        gsap.to(".skills_stagger",{
            duration:1,
            delay:.5,
            opacity: 1,
            y: 0,
            ease:"Power4.easeOut",
            stagger:{ amount:.3, }
        })
    }

    const aTools = () =>{
        gsap.to(".tools_stagger",{
            duration:1,
            opacity:1,
            delay:.5,
            x: 0,
            ease:"Power4.easeOut",
            stagger:{amount:.3}
        })
    }

    const aExp = () =>{
        gsap.to(".exp_stagger",{
            duration:1,
            delay:.5,
            opacity: 1,
            y: 0,
            ease:"Power4.easeOut",
            stagger:{ amount:.3, }
        })
    }

    const aSome = () =>{
        gsap.to(".some_stagger",{
            duration:1,
            opacity:1,
            delay:.5,
            x: 0,
            ease:"Power4.easeOut",
            stagger:{amount:.3}
        })
    }

    useEffect(()=>{
        if(aboutSkillsInView) aSkills();
        if(aboutToolsInView) aTools();
        if(expAboutInView) aExp();
        if(someAboutInView) aSome();
    },[aboutSkillsInView,aboutToolsInView, expAboutInView, someAboutInView])

    //#endregion
    
    useEffect(()=>{
        new locomotiveScroll({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
          smoothMobile: false,
        });
    },[])  


    var initialDone = false;
    useEffect(()=>{
      if(props.counter >= 2){
        console.log(props.counter);
        initialDone = true;
      } 
    },[props.counter])


    useEffect(()=>{

        if(initialDone){
            let textWrapper = document.querySelector('.ml6 .letters');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            anime
              .timeline()
              .add(
                {
                  targets: ".ml6 .letter",
                  translateY: ["1.5em", 0],
                  translateZ: 0,
                  duration: 750,
                  delay: (el, i) => 50 * i,
                },
                "+=2800"
              )
              .add({
                targets: ".ml6",
                opacity: 1,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000,
              });
            const atl = gsap.timeline();
            atl.to(".first-about .about-me",{duration:1, delay:2.8, ease:"Expo.easeInOut",y:0, opacity: 1})
            // .to(".first-about .shapes-1 .a-f-l1 path",{duration:1, ease:"Expo.easeInOut",strokeDashoffset:0})

            const tl = gsap.timeline();
            const mask = $(".img-container .mask");
            const img = $("#myPic");
            tl.set(mask, { visibility: "visible" });
    
            tl.to(mask, { transform:"translateX(0px)", duration:1.5, ease: "Power2.easeOut"})
            .to(img, { transform:"translateX(0px) scale(1)", duration:1.5, ease: "Power2.easeOut"},"-=1.4");
        }

        else{
            let textWrapper = document.querySelector('.ml6 .letters');
            textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
            anime.timeline()
            .add({
            targets: '.ml6 .letter',
            translateY: ["1.5em", 0],
            translateZ: 0,
            duration: 750,
            delay: (el, i) => 50 * i
            },)
            .add({
            targets: '.ml6',
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
            })
            const atl = gsap.timeline();
            atl.to(".first-about .about-me",{duration:1, ease:"Expo.easeInOut",y:0, opacity: 1})
            // .to(".first-about .shapes-1 .a-f-l1 path",{duration:1, ease:"Expo.easeInOut",strokeDashoffset:0})

            const tl = gsap.timeline();
            const mask = $(".img-container .mask");
            const img = $("#myPic");
            tl.set(mask, {visibility: "visible"});
    
            tl.to(mask, { transform:"translateX(0px)", duration:1.5, ease: "Power2.easeOut"})
            .to(img, { transform:"translateX(0px) scale(1)", duration:1.5, ease: "Power2.easeOut"},"-=1.4");
        }

    },[])

    const [myImage, setMyImage] = useState(0);
    useEffect(()=>{
        setMyImage(myself);
    },[])
    

    return (
    <>
        <PageTransition nameOfPage={nameOfPage}/>

        <div data-scroll-container className="hero-about" id="hero-about">
        
            <section className="about-sec first-about" data-scroll-section>
                <h1 className="ml6">
                    <span className="text-wrapper">
                        <span className="letters">.about()</span>
                    </span>
                </h1>
                <div className="about-me">
                    <p>
                    I'm a  web developer based in India, having an attitude for creating elegant solutions and passionate about learning new things.
                    </p>
                </div>

                <div className="img-container">
                    <div className="mask">
                        <img src={myImage} alt="" id="myPic"/>
                    </div>
                </div>
                <svg viewBox="0 0 299 299" fill="none" className="image_frame">
                    <rect x="2" y="2" width="295" height="295" stroke="#1F1F1F" stroke-width="4" stroke-linecap="round"/>
                </svg>

                <div className="shapes-1">
                    <svg viewBox="0 0 451 451" fill="none" className="a-f-c1">
                        <path d="M420.211 337.856C391.648 387.329 345.336 424.084 290.67 440.667C236.003 457.25 177.076 452.418 125.841 427.152C74.6057 401.886 34.8996 358.077 14.7769 304.612C-5.34587 251.147 -4.37847 192.03 17.4828 139.252C39.3441 86.4741 80.4624 43.9878 132.497 20.4113C184.531 -3.16509 243.585 -6.06621 297.68 12.2964C351.774 30.6591 396.859 68.9106 423.788 119.291C450.717 169.672 457.474 228.41 442.689 283.59L399.222 271.943C411.051 227.799 405.645 180.809 384.102 140.504C362.558 100.2 326.491 69.5984 283.215 54.9083C239.939 40.2182 192.696 42.5391 151.068 61.4002C109.441 80.2614 76.5464 114.25 59.0574 156.473C41.5684 198.695 40.7944 245.989 56.8926 288.761C72.9908 331.533 104.756 366.58 145.744 386.793C186.732 407.006 233.874 410.871 277.607 397.605C321.34 384.339 358.39 354.934 381.24 315.356L420.211 337.856Z" fill="#1F1F1F"/>
                    </svg>

                    {/* <svg viewBox="0 0 488 24" fill="none" className="a-f-l1">
                        <path d="M5 20.5L53 15.5L104.5 11.5L166 9L285.5 5H358.5H385L410 6L444 7.5L483 10.5" stroke="black" strokeWidth="10" strokeLinecap="round"/>
                    </svg> */}


                    <svg viewBox="0 0 165 165" fill="none" className="a-f-w2">
                        <g clipPath="url(#clip0_8_71)">
                        <path d="M1.95749 81.4275L14.4549 70.804L28.7155 81.6896L41.2031 71.0561L55.4637 81.9416L67.961 71.3182L82.2127 82.2127" stroke="#1F1F1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M82.2127 82.2127L94.7101 71.5892L108.971 82.4747L121.458 71.8413L135.719 82.7267L148.216 72.1033L162.468 82.9978" stroke="#1F1F1F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_8_71">
                        <rect width="116.272" height="116.272" fill="white" transform="translate(83.017) rotate(45.5605)"/>
                        </clipPath>
                        </defs>
                    </svg>

                    <svg viewBox="0 0 68 80" fill="none" className="a-pacman-1">
                        <path d="M67.5364 67.5364C62.0291 73.0437 55.0123 76.7942 47.3735 78.3137C39.7346 79.8331 31.8167 79.0533 24.6211 76.0727C17.4254 73.0922 11.2752 68.0449 6.94813 61.5689C2.62106 55.093 0.3115 47.4794 0.311498 39.6909C0.311496 31.9024 2.62106 24.2888 6.94813 17.8129C11.2752 11.337 17.4254 6.2896 24.6211 3.30907C31.8167 0.328535 39.7346 -0.451309 47.3735 1.06815C55.0123 2.58762 62.0291 6.33814 67.5364 11.8455L39.6909 39.6909L67.5364 67.5364Z" fill="#1F1F1F"/>
                    </svg>

                    <svg viewBox="0 0 69 80" fill="none" className="a-pacman-2">
                        <path d="M0.845456 11.8455C6.35277 6.33816 13.3695 2.58763 21.0084 1.06817C28.6472 -0.451292 36.5651 0.328553 43.7608 3.30909C50.9564 6.28962 57.1066 11.337 61.4337 17.8129C65.7608 24.2888 68.0703 31.9024 68.0703 39.6909C68.0703 47.4794 65.7608 55.093 61.4337 61.569C57.1066 68.0449 50.9564 73.0922 43.7608 76.0728C36.5651 79.0533 28.6472 79.8331 21.0084 78.3137C13.3695 76.7942 6.35277 73.0437 0.84546 67.5364L28.6909 39.6909L0.845456 11.8455Z" fill="#1F1F1F"/>
                    </svg>





                </div>

            </section>

            <section className="second-about" data-scroll-section>

                <div className="information">
                    <div className="skills" ref={aboutSkills}>
                        <h2 className="skills_stagger">Skills | year</h2>
                        <div className="sk">
                            <h6 className="skills_stagger">Front-end development | 2 years</h6>
                            <h6 className="skills_stagger">Back-end development | 1 year</h6>
                            <h6 className="skills_stagger">UI design | 1 year</h6>
                        </div>
                    </div>
                    <div className="tools" ref={aboutTools}>
                        <h2 className="tools_stagger">Tools | years</h2>
                        <div className="main-grid">
                            <div className="grid1">
                                <h6 className="tools_stagger">Javascript | ~1 year</h6>
                                <h6 className="tools_stagger">HTML/CSS | ~2 years</h6>
                                <h6 className="tools_stagger">React.js |  &lt; 1 year</h6>
                                <h6 className="tools_stagger">Node.js |  &lt; 1 year</h6>
                            </div>
                            <div className="grid2">
                                <h6 className="tools_stagger">Java | ~2 years</h6>
                                <h6 className="tools_stagger">Python | ~2 years</h6>
                                <h6 className="tools_stagger">C/C++ | ~2 years</h6>
                            </div>
                            <div className="tools_stagger grid3">
                                <h6 className="tools_stagger">Figma | ~1 year</h6>
                                <h6 className="tools_stagger">Adobe Photoshop | ~1 year</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shapes-2">

                    <svg viewBox="0 0 269 269" fill="none" className="a-s-c1">
                        <circle cx="134.5" cy="134.5" r="134.5" fill="#EB4A34"/>
                    </svg>

                    <svg  viewBox="0 0 45 45" fill="none"  className="a-s-c2">
                        <circle cx="22.5" cy="22.5" r="22.5" fill="#EB4A34"/>
                    </svg>

                    <svg  viewBox="0 0 379 345" fill="none" className="a-s-c3">
                        <path d="M245.526 138.882C275.901 191.494 257.875 258.769 205.263 289.145C152.651 319.521 85.3757 301.494 55 248.882C24.6243 196.27 42.6506 128.995 95.2628 98.6194C147.875 68.2437 215.15 86.27 245.526 138.882ZM74.0526 237.882C98.3531 279.972 152.173 294.393 194.263 270.092C236.353 245.792 250.774 191.972 226.473 149.882C202.172 107.792 148.353 93.3714 106.263 117.672C64.173 141.972 49.752 195.792 74.0526 237.882Z" fill="#EB4A34"/>
                        <mask id="path-2-inside-1_83_3" fill="white">
                        <path d="M349.701 106.252C356.608 132.029 353.908 159.439 342.105 183.374C330.302 207.308 310.2 226.136 285.544 236.349C260.889 246.561 233.361 247.462 208.091 238.884C182.82 230.306 161.53 212.833 148.186 189.722C134.843 166.61 130.356 139.436 135.563 113.262C140.769 87.0879 155.313 63.699 176.485 47.4531C197.657 31.2071 224.014 23.212 250.643 24.9574C277.273 26.7028 302.36 38.0697 321.231 56.9402L305.674 72.4965C290.578 57.4001 270.508 48.3067 249.205 46.9103C227.901 45.514 206.816 51.9101 189.878 64.9068C172.94 77.9036 161.305 96.6147 157.14 117.554C152.975 138.493 156.564 160.233 167.239 178.722C177.914 197.211 194.946 211.189 215.162 218.052C235.379 224.914 257.401 224.193 277.125 216.023C296.85 207.853 312.931 192.791 322.374 173.643C331.817 154.496 333.976 132.568 328.451 111.946L349.701 106.252Z"/>
                        </mask>
                        <path d="M349.701 106.252C356.608 132.029 353.908 159.439 342.105 183.374C330.302 207.308 310.2 226.136 285.544 236.349C260.889 246.561 233.361 247.462 208.091 238.884C182.82 230.306 161.53 212.833 148.186 189.722C134.843 166.61 130.356 139.436 135.563 113.262C140.769 87.0879 155.313 63.699 176.485 47.4531C197.657 31.2071 224.014 23.212 250.643 24.9574C277.273 26.7028 302.36 38.0697 321.231 56.9402L305.674 72.4965C290.578 57.4001 270.508 48.3067 249.205 46.9103C227.901 45.514 206.816 51.9101 189.878 64.9068C172.94 77.9036 161.305 96.6147 157.14 117.554C152.975 138.493 156.564 160.233 167.239 178.722C177.914 197.211 194.946 211.189 215.162 218.052C235.379 224.914 257.401 224.193 277.125 216.023C296.85 207.853 312.931 192.791 322.374 173.643C331.817 154.496 333.976 132.568 328.451 111.946L349.701 106.252Z" stroke="#EB4A34" strokeWidth="24" strokeLinecap="square" strokeLinejoin="round" strokeDasharray="28 28" mask="url(#path-2-inside-1_83_3)"/>
                    </svg>


                    <svg viewBox="0 0 363 388" fill="none" className="a-s-c4">
                        <path d="M147.18 233.345C104.223 190.388 104.223 120.739 147.18 77.7817C190.138 34.824 259.786 34.8241 302.744 77.7817C345.702 120.739 345.702 190.388 302.744 233.345C259.786 276.303 190.138 276.303 147.18 233.345ZM287.188 93.3381C252.821 58.9719 197.103 58.9719 162.737 93.3381C128.371 127.704 128.371 183.423 162.737 217.789C197.103 252.155 252.821 252.155 287.188 217.789C321.554 183.423 321.554 127.704 287.188 93.3381Z" fill="#EB4A34"/>
                        <mask id="path-2-inside-1_83_2" fill="white">
                        <path d="M55.0001 291.826C41.6567 268.715 37.1702 241.54 42.3765 215.366C47.5829 189.192 62.127 165.803 83.2992 149.557C104.471 133.311 130.827 125.316 157.457 127.062C184.087 128.807 209.174 140.174 228.045 159.045C246.915 177.915 258.282 203.002 260.027 229.632C261.773 256.262 253.778 282.618 237.532 303.79C221.286 324.962 197.897 339.506 171.723 344.713C145.549 349.919 118.374 345.433 95.2629 332.089L106.263 313.037C124.752 323.711 146.492 327.3 167.431 323.135C188.37 318.97 207.081 307.335 220.078 290.397C233.075 273.46 239.471 252.375 238.074 231.071C236.678 209.767 227.585 189.697 212.488 174.601C197.392 159.505 177.322 150.411 156.018 149.015C134.715 147.618 113.63 154.014 96.6919 167.011C79.7542 180.008 68.1189 198.719 63.9538 219.658C59.7887 240.598 63.3779 262.337 74.0527 280.826L55.0001 291.826Z"/>
                        </mask>
                        <path d="M55.0001 291.826C41.6567 268.715 37.1702 241.54 42.3765 215.366C47.5829 189.192 62.127 165.803 83.2992 149.557C104.471 133.311 130.827 125.316 157.457 127.062C184.087 128.807 209.174 140.174 228.045 159.045C246.915 177.915 258.282 203.002 260.027 229.632C261.773 256.262 253.778 282.618 237.532 303.79C221.286 324.962 197.897 339.506 171.723 344.713C145.549 349.919 118.374 345.433 95.2629 332.089L106.263 313.037C124.752 323.711 146.492 327.3 167.431 323.135C188.37 318.97 207.081 307.335 220.078 290.397C233.075 273.46 239.471 252.375 238.074 231.071C236.678 209.767 227.585 189.697 212.488 174.601C197.392 159.505 177.322 150.411 156.018 149.015C134.715 147.618 113.63 154.014 96.6919 167.011C79.7542 180.008 68.1189 198.719 63.9538 219.658C59.7887 240.598 63.3779 262.337 74.0527 280.826L55.0001 291.826Z" stroke="#EB4A34" strokeWidth="24" strokeLinecap="square" strokeLinejoin="round" strokeDasharray="28 28" mask="url(#path-2-inside-1_83_2)"/>
                    </svg>

                    <svg viewBox="0 0 40 48" fill="none" className="a-s-c5">
                        <path d="M0.983066 47.2617L1.24297 34.4507L13.798 31.9019L14.0608 19.1005L26.6034 16.5451L26.8662 3.74366L39.4183 1.18536" stroke="#EB4A34" strokeWidth="1.67"/>
                    </svg>

                    <svg viewBox="0 0 55 33" fill="none" className="a-s-c6">
                        <path d="M0.58637 3.10636C0.258722 3.76494 0.0639908 4.48163 0.0133108 5.21546C-0.0373693 5.94929 0.0569866 6.68591 0.29099 7.38328C0.524994 8.08064 0.894064 8.72509 1.37713 9.27982C1.86019 9.83455 2.44779 10.2887 3.10637 10.6164C3.76495 10.944 4.48161 11.1387 5.21544 11.1894C5.94928 11.2401 6.68591 11.1458 7.38328 10.9117C8.08064 10.6777 8.72509 10.3087 9.27982 9.8256C9.83455 9.34253 10.2887 8.75496 10.6164 8.09638C10.944 7.4378 11.1387 6.72111 11.1894 5.98728C11.2401 5.25345 11.1457 4.51683 10.9117 3.81946C10.6777 3.1221 10.3087 2.47765 9.8256 1.92292C9.34253 1.36818 8.75494 0.914018 8.09636 0.58637C7.43778 0.258722 6.72113 0.0639907 5.98729 0.0133107C5.25346 -0.0373693 4.51683 0.0569865 3.81946 0.29099C3.1221 0.524994 2.47764 0.894079 1.9229 1.37714C1.36817 1.8602 0.914018 2.44778 0.58637 3.10636ZM14.9164 10.2264C14.5887 10.885 14.394 11.6016 14.3433 12.3355C14.2926 13.0693 14.387 13.8059 14.621 14.5033C14.855 15.2006 15.2241 15.8451 15.7071 16.3998C16.1902 16.9546 16.7778 17.4087 17.4364 17.7364C18.0949 18.064 18.8116 18.2587 19.5454 18.3094C20.2793 18.3601 21.0159 18.2657 21.7133 18.0317C22.4106 17.7977 23.0551 17.4287 23.6098 16.9456C24.1646 16.4626 24.6187 15.875 24.9464 15.2164C25.274 14.5578 25.4687 13.8411 25.5194 13.1073C25.5701 12.3735 25.4757 11.6368 25.2417 10.9395C25.0077 10.2421 24.6387 9.59765 24.1556 9.04291C23.6725 8.48818 23.0849 8.03401 22.4264 7.70637C21.7678 7.37872 21.0511 7.18399 20.3173 7.13331C19.5835 7.08263 18.8468 7.17698 18.1495 7.41099C17.4521 7.64499 16.8076 8.01407 16.2529 8.49714C15.6982 8.9802 15.244 9.56781 14.9164 10.2264ZM29.2464 17.3464C28.9187 18.005 28.724 18.7216 28.6733 19.4555C28.6226 20.1893 28.717 20.9259 28.951 21.6233C29.185 22.3207 29.5541 22.9651 30.0371 23.5198C30.5202 24.0746 31.1078 24.5287 31.7664 24.8564C32.4249 25.184 33.1416 25.3787 33.8754 25.4294C34.6093 25.4801 35.3459 25.3857 36.0433 25.1517C36.7406 24.9177 37.3851 24.5487 37.9398 24.0656C38.4946 23.5826 38.9487 22.9949 39.2764 22.3364C39.9381 21.0063 40.0443 19.4679 39.5717 18.0595C39.0991 16.6511 38.0864 15.4881 36.7564 14.8264C35.4263 14.1646 33.8878 14.0584 32.4795 14.531C31.0711 15.0036 29.9081 16.0163 29.2464 17.3464ZM43.5764 24.4664C43.2487 25.125 43.054 25.8416 43.0033 26.5754C42.9526 27.3093 43.047 28.0459 43.281 28.7433C43.515 29.4407 43.8841 30.0851 44.3671 30.6398C44.8502 31.1946 45.4378 31.6487 46.0964 31.9764C46.7549 32.304 47.4716 32.4987 48.2054 32.5494C48.9393 32.6001 49.6759 32.5057 50.3733 32.2717C51.0706 32.0377 51.7151 31.6687 52.2698 31.1856C52.8246 30.7026 53.2787 30.1149 53.6064 29.4564C53.934 28.7978 54.1287 28.0811 54.1794 27.3473C54.2301 26.6135 54.1357 25.8768 53.9017 25.1794C53.6677 24.4821 53.2987 23.8376 52.8156 23.2829C52.3325 22.7282 51.7449 22.274 51.0864 21.9464C50.4278 21.6187 49.7111 21.424 48.9773 21.3733C48.2435 21.3226 47.5068 21.417 46.8095 21.651C46.1121 21.885 45.4676 22.2541 44.9129 22.7371C44.3582 23.2202 43.904 23.8078 43.5764 24.4664Z" fill="#EB4A34"/>
                    </svg>






                </div>

            </section>

            <section className="third-about" data-scroll-section>


                <div className="information-2">
                    <div className="exp" ref={expAbout}>
                        <h2 className="exp_stagger">Experience</h2>
                        <p className="exp_stagger">
                            Intern | Full stack developer <br/>
                            @High Radius <br/>
                            Jan 2022 - May 2022
                        </p>
                    </div>
                    <div className="sometimes" ref={someAbout}>
                        <h2 className="some_stagger">And sometimes</h2>
                        <div className="smt">
                            <div>
                                <h6 className="some_stagger">Badminton </h6>
                                <h6 className="some_stagger">Chess </h6>
                                <h6 className="some_stagger">Video games </h6>
                            </div>
                            <div>
                                <h6 className="some_stagger">Sci-fi / Adventure movies </h6>
                                <h6 className="some_stagger">CP </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shapes-3">

                    <svg viewBox="0 0 408 431" fill="none" className="a-t-c1">
                        <path d="M328.548 293.899C307.662 330.074 273.261 356.471 232.913 367.282C192.565 378.094 149.574 372.434 113.399 351.548C77.2238 330.662 50.827 296.261 40.0157 255.913C29.2044 215.565 34.8642 172.574 55.75 136.399L192.149 215.149L328.548 293.899Z" fill="#EB4A34"/>
                        <circle cx="83.5" cy="97.5" r="26.5" fill="#EB4A34"/>
                    </svg>

                    <svg viewBox="0 0 431 431" fill="none" className="a-t-c2">
                        <path d="M352.138 136.989C373.023 173.164 378.683 216.154 367.872 256.503C357.061 296.851 330.664 331.252 294.489 352.138C258.313 373.023 215.323 378.683 174.975 367.872C134.626 357.061 100.225 330.664 79.3396 294.489L215.739 215.739L352.138 136.989Z" fill="#EB4A34"/>
                        <circle cx="327.5" cy="95.5" r="26.5" fill="#EB4A34"/>
                    </svg>  

                    <svg viewBox="0 0 194 20" fill="none" className="a-t-l1">
                        <path d="M176.87 0L160.43 16.36L143.98 0L127.54 16.36L111.1 0L96.6 14.43L82.09 0L65.65 16.36L49.2 0L32.76 16.36L16.32 0L0 16.24L1.82 18.06L16.32 3.63L32.76 19.99L49.2 3.63L65.65 19.99L82.09 3.63L96.6 18.07L111.1 3.63L127.54 19.99L143.98 3.63L160.43 19.99L176.87 3.63L191.38 18.06L193.19 16.24L176.87 0Z" fill="#EB4A34"/>
                    </svg>



                </div>


            </section>

        </div>
    </>

    );
}

export default About;