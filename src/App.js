import React, { useContext, useRef } from 'react'
import './App.css';
import Intro from './components/Intro/Intro';
import MyStory from './components/MyStory/MyStory';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio'
import MySkills from './components/MySkills/MySkills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import { themeContext } from './Context'
import Container from './components/Container/Container';
import SoundMusic from './components/SoundMusic/SoundMusic';
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  // Portfolio navbar
  const ScrollToSkills = useRef(null)
  const gotoSkills = () => window.scrollTo({top: ScrollToSkills.current.offsetTop, behavior: 'smooth'})
  // Projects Navbar
  const ScrollToProjects = useRef(null)
  const gotoProjects = () => window.scrollTo({top: ScrollToProjects.current.offsetTop, behavior: 'smooth'})
  // Contact Navbar
  const ScrollToContact = useRef(null)
  const gotoContact = () => window.scrollTo({top: ScrollToContact.current.offsetTop, behavior: 'smooth'})
  return (
    <>
      <div className={`App ${darkMode ? '' : 'app-theme-dark'}`}>
        <Container>
          <Navbar gotoSkills={gotoSkills} gotoProjects={gotoProjects} gotoContact={gotoContact} />
          <Intro />
          <MyStory />
          <Portfolio />
          <MySkills refScroll={ScrollToSkills} />
          <Projects refScroll={ScrollToProjects}/>
        </Container>
      </div>
      <Contact refScroll={ScrollToContact} />
      <Footer />
      <ScrollToTop />
      <SoundMusic />
    </>

  );
}

export default App;
