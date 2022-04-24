import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import {AnimatePresence} from 'framer-motion';
import './App.scss';

function App() {

  const location = useLocation();


  return (
    <>
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;
