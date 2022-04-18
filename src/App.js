import './App.css';
import Intro from './components/Intro/Intro';
import MyStory from './components/MyStory/MyStory';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <MyStory />
    </div>
  );
}

export default App;
