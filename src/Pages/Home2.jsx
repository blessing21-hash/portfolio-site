import React from 'react';
import './Home2.css';
import profilePic from '../assets/blessing.jpg'; // Replace with your actual image path
import Header from '../Components/Header';
import Footer from '../Components/Footer';


const Home = () => {
  return (
   
    <section className="home-section">
        
      <div className="home-content">
        <img src={profilePic} alt="Blessing Kusiwani" className="profile-img" />
        <div className="intro-text">
          <h1>Hi, I'm <span>Blessing Kusiwani</span></h1>
          <p className="tagline">Creative Frontend Developer crafting modern & responsive web experiences.</p>
          <a href="/projects">
            <button className="cta-button">View My Work</button>
          </a>
        </div>
      </div>
    
    </section>
    
  );
};

export default Home;
