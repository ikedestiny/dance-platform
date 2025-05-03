import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-neutral-700 via-neutral-900 to-neutral-700 overflow-x-hidden overflow-y-auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;