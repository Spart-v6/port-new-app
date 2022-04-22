import PageTransition from '../PageTransition';
import { useState, useEffect } from 'react';
import './index.scss';
import RGBLetters from '../RGBLetters';

const Contact = () => {
    const [nameOfPage, setNameOfPage] = useState("Contact");

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
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <RGBLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']} idx={15}/>
                    </h1>
                    <div className='short-contact-text'>
                        <h2>Hey, nice to meet you</h2>
                        <span>Have a question or just want to get in touch? Drop a message :)</span>
                    </div>
                </div>
            </div>

            <div className='contact-form'>
                <form>
                    <ul>
                        <li className='half'>
                            <input type="text" name='name' placeholder='Name' required/>
                        </li>
                        <li className='half'>
                            <input type="text" name='subject' placeholder='Subject' required/>
                        </li>
                        <li className='textInput'>
                            <input type="email" name='email' placeholder='Email' required/>
                        </li>
                        <li>
                            <textarea name='message' placeholder='Your Message' required></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="Send"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        
        </>
    )
}


export default Contact;