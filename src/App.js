import React, { useContext } from 'react'
import './App.css';
import Intro from './components/Intro/Intro';
import MyStory from './components/MyStory/MyStory';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio'
import MySkills from './components/MySkills/MySkills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { themeContext } from './Context'
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <>
      <div className={`App ${darkMode ? '' : 'app-theme-dark'}`}>
        <Navbar />
        <Intro />
        <MyStory />
        <Portfolio />
        <MySkills />
        <Projects/>
      </div>
      <Contact />
      <Footer />
    </>

  );
}

export default App;
