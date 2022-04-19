import './App.css';
import Intro from './components/Intro/Intro';
import MyStory from './components/MyStory/MyStory';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <MyStory />
      <Portfolio />
    </div>
  );
}

export default App;
