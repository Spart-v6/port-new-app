import { useState, useEffect } from 'react';
import PageTransition from '../PageTransition';
import RGBLetters from '../RGBLetters';
import './index.scss';

const Projects = () => {

    const [nameOfPage, setNameOfPage] = useState("Projects");

    const [letterClass, setLetterClass] = useState('text-animate');
    const onHover = () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
    }

    useEffect(() => {
        return onHover();
    }, [])



    return(
        <>
            <PageTransition nameOfPage={nameOfPage}/>
            <div>
                <div className='container projects-page'>
                    <div className='text-zone'>
                        <h1>
                            <RGBLetters letterClass={letterClass} strArray={['P','r','o','j','e','c','t','s']} idx={15}/>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Projects;
