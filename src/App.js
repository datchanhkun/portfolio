import React, { Suspense, useContext, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Loading from './components/Loading/Loading'
import { themeContext } from './Context'

const Intro = React.lazy(() => import('./components/Intro/Intro'))
const MyStory = React.lazy(() => import('./components/MyStory/MyStory'))
const Portfolio = React.lazy(() => import('./components/Portfolio/Portfolio'))
const MySkills = React.lazy(() => import('./components/MySkills/MySkills'))
const Projects = React.lazy(() => import('./components/Projects/Projects'))
const Contact = React.lazy(() => import('./components/Contact/Contact'))
const Footer = React.lazy(() => import('./components/Footer/Footer'))
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop/ScrollToTop'))
const SoundMusic = React.lazy(() => import('./components/SoundMusic/SoundMusic'))
const Container = React.lazy(() => import('./components/Container/Container'))

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
    <Suspense fallback={<Loading />}>
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

    </Suspense>

  );
}

export default App;
