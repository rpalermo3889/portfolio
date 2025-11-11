import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import videoBg from './assests/ocean.mov';


function App() {
  return (
    <div className="App">
      <video className="bg-video" src={videoBg} autoPlay loop muted playsInline/>
      <div className="video-overlay" />
      <div className="content">
        <Router>
          <Routes>
            <Route path ="/portfolio" element={<Home />} />
            <Route path ="/experience" element={<Experience />} />
          </Routes>
          <Navbar />
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
