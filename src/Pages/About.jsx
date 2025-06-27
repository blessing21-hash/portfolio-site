// import React from 'react';
// import './About.css';

// const About = () => {
//   return (
//     <section className="about-section">
//       <div className="about-content">
//         <h2>About Me</h2>
//         <p className="about-intro">
//           I'm Blessing Kusiwani, a frontend developer passionate about building interactive and user-focused websites.
//           I enjoy turning complex problems into clean, intuitive interfaces using tools like React and plain CSS.
//         </p>

//         <p>
//           My journey started with a love for technology and creativity, and I’ve since worked on several projects
//           ranging from personal websites to full-blown web apps like <strong>BuildLink</strong>.
//         </p>

//         <p>
//           When I'm not coding, I'm usually exploring UI trends, improving my skills, or experimenting with new technologies.
//         </p>

//         <div className="tools">
//           <h3>Tools & Technologies I Love</h3>
//           <ul className="tools-list">
//             <li>React.js</li>
//             <li>JavaScript</li>
//             <li>HTML & CSS</li>
//             <li>TailwindCSS</li>
//             <li>Git & GitHub</li>
//             <li>Figma</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import About2 from '../Pages/About2';
import Footer from '../Components/Footer';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about">
      <Header />
      <About2/>

      <Footer />
    </div>
  );
};

export default About;
