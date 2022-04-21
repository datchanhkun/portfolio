import './App.css';
import Intro from './components/Intro/Intro';
import MyStory from './components/MyStory/MyStory';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio'
import MySkills from './components/MySkills/MySkills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Intro />
        <MyStory />
        <Portfolio />
        <MySkills />
        <Projects />
      </div>
      <Contact />
      <Footer />
    </>

  );
}

export default App;
