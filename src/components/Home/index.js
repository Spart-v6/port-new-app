import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RGBLetters from '../RGBLetters'
import './index.scss'
import { motion } from 'framer-motion'
import PageTransition from '../PageTransition'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const strArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r'];

    const onHover = () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }

    useEffect(() => {
        return onHover();
    }, [])

    
    // useEffect(() => {
    //     console.log("loaded");
    // },[]);

    const [nameOfPage, setNameOfPage] = useState("Home");

    return(
        <>

        <PageTransition nameOfPage={nameOfPage}/>

        <div>
            <div className='container home-page' >
                <div className='home-back-tag'>
                    HOME
                </div>
                <div className='text-zone'>
                    <h1> <span style={{color:"#986ee8", fontSize:"70px"}}>H</span><span style={{fontSize:"69px"}}>i</span>,
                    <br/>  
                    <span className={`${letterClass} _12`} >I</span>
                    <span className={`${letterClass} _13`} >'m &nbsp;</span>
                        
                    {/* TODO: svg name */}
                        Ankur
                        <br/>
                        <RGBLetters letterClass={letterClass} strArray={strArray} idx={15}/>
                    </h1>
                    <h2>Front-end Developer/ Designer/ Competitive Coder/ Gamer</h2>
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                </div>
            </div>
        </div>

        </>
    )

}
export default Home