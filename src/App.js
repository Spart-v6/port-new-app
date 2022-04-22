import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import {AnimatePresence} from 'framer-motion';
import Contact from './components/Contact';

function App() {

  const location = useLocation();


  return (
    <>
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;
