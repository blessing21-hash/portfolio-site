



import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Contact2 from './Contact2';
import Footer from '../Components/Footer';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact">
      <Header />
      <Contact2/>

      <Footer />
    </div>
  );
};

export default Contact;
