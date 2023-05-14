import React from 'react'

import 'aos/dist/aos.css'
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import Header from './components/Header';
import HowItWork from './components/HowItWork';
import Careers from './components/Careers';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';

function App() {
  return (
    <>
    <Nav/>
    <div className="main">
    <Header/>
     <HowItWork/>
     <AboutUs/>
     <Services/>
     <Portfolio/>
     <Careers/>
     <Contact/>
     </div>
     <Footer/>
    </>
  )
}

export default App
