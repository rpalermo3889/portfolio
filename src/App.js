import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import videoBg from './assets/ocean.mp4';

function App() {
  return (
    <div className="App">
      <video className="bg-video" src={videoBg} autoPlay loop muted playsInline/>
      <div className="video-overlay" />
      <MusicPlayer /> 
      <div className="content">
        <Router>
          <Navbar />

          <Routes>
            <Route path ="/portfolio" element={<Home />} />
            <Route path ="/experience" element={<Experience />} />
            <Route path ="/projects" element={<Projects />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
