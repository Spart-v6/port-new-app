import './index.scss';
import { motion } from 'framer-motion';
import PageTransition from '../PageTransition';
import { useState } from 'react';

const About = () => {

    const [nameOfPage, setNameOfPage] = useState("About");

    return(
        <>
        <PageTransition nameOfPage={nameOfPage}/>
        <div>

            <div className='container about-page'>
                About page
            </div>
        </div>
        </>
    )
}


export default About
