// import React from 'react';
// import './Home.css';
// import profilePic from '../assets/blessing.jpg'; // Replace with your actual image path
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';


// const Home = () => {
//   return (
   
//     <section className="home-section">
//         <Header/>
//       <div className="home-content">
//         <img src={profilePic} alt="Blessing Kusiwani" className="profile-img" />
//         <div className="intro-text">
//           <h1>Hi, I'm <span>Blessing Kusiwani</span></h1>
//           <p className="tagline">Creative Frontend Developer crafting modern & responsive web experiences.</p>
//           <a href="/projects">
//             <button className="cta-button">View My Work</button>
//           </a>
//         </div>
//       </div>
//       <Footer/>
//     </section>
    
//   );
// };

// export default Home;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Home2 from '../Pages/Home2';
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
