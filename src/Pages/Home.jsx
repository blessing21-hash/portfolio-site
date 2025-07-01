import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Home2 from './Home2';
import Footer from '../Components/Footer';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Header />
      <Home2/>
      <Footer />
    </div>
  );
};

export default Home;
