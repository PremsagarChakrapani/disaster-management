import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/About';
import Resources from './pages/Resources';
import EmergencyContacts from './pages/EmergencyContacts';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
