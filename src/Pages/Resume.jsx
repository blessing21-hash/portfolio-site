// import React from 'react';
// import './Resume.css';
// // import resumePDF from '../assets/BlessingKusiwani_Resume.pdf'; // Replace with your actual PDF path

// const Resume = () => {
//   return (
//     <section className="resume-section">
//       <div className="resume-container">
//         <h2>My Resume</h2>
//         <p>
//           I’m a frontend developer skilled in React, JavaScript, HTML, CSS, and UI/UX design.
//           I’ve worked on projects like BuildLink, and I’m passionate about building responsive and user-friendly web applications.
//         </p>
//         <a href={resumePDF} download className="download-btn">
//           Download Resume (PDF)
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Resume;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Resume2 from '../Pages/Resume2';
import Footer from '../Components/Footer';

const Resume = () => {
  const navigate = useNavigate();

  return (
    <div className="resume">
      <Header />
      <Resume2/>

      <Footer />
    </div>
  );
};

export default Resume;
