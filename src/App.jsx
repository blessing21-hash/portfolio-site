import React from 'react';
import { Routes,Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import './App.css';
// updates

const App = () => {
  return (
    // <Router>
    //   <Header />
    //   <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      /*{ </main>
      <Footer />
    </Router> }*/
  );
};

export default App;
