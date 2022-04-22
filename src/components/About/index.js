import './index.scss';
import { motion } from 'framer-motion';

const About = () => {
    const animee = {
        initial: {
            height: "100vh",
        },
        animate: {
            height: 0,
            transition: {
                duration: 1.5,
                ease: [0.87, 0, 0.13, 1],
            },
        },
    };
    return(
        <>
        <div className="load-page">
            <motion.div className="load-screen" initial="initial" animate="animate" variants={animee}/>
        </div>
        <div>

            <div className='container about-page'>
                About page
            </div>
        </div>
        </>
    )
}


export default About
