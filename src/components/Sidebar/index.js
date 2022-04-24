import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faRectangleAd, faCode } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"


const Sidebar =  () => (
    <motion.div className='nav-bar' initial={{left:'-24%'}} animate={{left:'0%'}} transition={{duration:1.5,ease:[0.87, 0, 0.13, 1],delay:2.2}}>
        {/* <Link className='logo' to='/'>
            <img src={LogoA} alt="logo"/>
        </Link> */}
        <nav>
            <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.8}}>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon id='nav-item-1' icon={faHome} color="#4d4d3e"/>
                </NavLink>
            </motion.div>
            <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.8}}>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon id='nav-item2' icon={faUser} color="#4d4d3e"/>
                </NavLink>
            </motion.div>
            <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.8}}>
                <NavLink exact="true" activeclassname="active" className="project-link" to="/projects">
                    <FontAwesomeIcon id='nav-item3' icon={faCode} color="#4d4d3e"/>
                </NavLink>
            </motion.div>
            <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.8}}>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon id='nav-item4' icon={faEnvelope} color="#4d4d3e"/>
                </NavLink>
            </motion.div>
        </nav>
    </motion.div>
)

export default Sidebar